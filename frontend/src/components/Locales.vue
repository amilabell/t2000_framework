<template>
    <div>
      <b-form-group variant="danger" label="I want to select">
        <b-form-radio-group id="country_region_select" v-model="selected">
          <b-form-radio value="countries">countries</b-form-radio>
          <b-form-radio value="regions">regions</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <!--country selection
        <v-select multiple v-if="selected === 'regions'" class="countrySelect" label="name" :options="regions"></v-select>
        <v-select @input="getPrefs(clickedCountries)" multiple v-if="selected === 'countries'" class="countrySelect" label="name" v-model="clickedCountries" :options="countries"></v-select>-->
        <b-form-select @input="getPrefs(clickedCountry)"  v-model="clickedCountry" :options="countries" value-field="c_code" text-field="name" class="countrySelect"/>
        <br>
        <br>
        <!--view preferences-->
          <b-table v-for="x in tableArray" :key="x.name" :items="x.items" :fields="categories"></b-table>
    </div>
</template>
<script>
import {store} from '../store/index';
import axios from 'axios';
export default {
  name: '',
  data () {
    return {
      selected: 'countries',
      dims: [],
      countries: [],
      clickedCountry: '',
      tableArray: [],
      fields: [ 
        {
          key: 'name',
          sortable: true
        },
        {
          key:'code',
          sortable: true
        },
        {
          key: 'pdi',
          sortable: true
        },
        {
          key: 'idv',
          sortable: true
        },
        {
          key: 'mas',
          sortable: true
        },
        {
          key: 'uai',
          sortable: true
        },
        {
          key: 'lto',
          sortable: true
        },
        {
          key: 'ivr',
          sortable: true
        }
          ],
      items_degree: [],
      categories: [{key: 'dim', label: 'dimension'}, {key: 'pole', label: 'score'}],
      test: {
        
      }
    };
  },
  computed: {
    regions () {
      return store.state.regions;
    }
  },

  async mounted(){
  this.countries = await this.getCountries();
  await this.getCategories();
  this.dims = await this.getDims();
},

  methods:{
    async getCountries(){
            var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/countries/getAll');
            for(var i=0; i<response.data.length; i++){
              response.data[i]['disabled'] = !response.data[i].hasDims;
            }
            return response.data;
    },
    
    async getCountry(id){
        var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/countries/getOne/' + id)
        if(this.items === null || this.items === [] || this.items.length === 0){
          this.items = response.data
        }else{
          this.items.push(response.data[0])
        }
        console.log(this.items);
    },
    
    async getDegrees(id){
      var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/countries/getDims/' + id)
      console.log(response);
      return(response)
    },
    
    showingOverview: async function(){
      for(var i=0; i<this.items.length; i++){
        var response = await this.getDegrees(this.items[i].code);
        if(this.items_degree === null || this.items_degree === [] || this.items_degree.length === 0){
          this.items_degree = response.data
        }else{
          this.items_degree.push(response.data[0])
        }
      }
      console.log(this.items_degree)
    },
    
    getCategories: async function(){
      var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/prefs/getCats');
      var data = response.data;
      for(var i=0; i<data.length; i++){
        this.categories.push({'label': data[i].name, 'key': data[i].id});
      }
    },
    
    getDims: async function(){
      var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/dims/getAll');
      var dims = []
      for(var i=0; i<response.data.length; i++){
        dims.push(response.data[i]);
      }
      return dims
    },
    
    getPrefs: async function(c_code){
      console.log(c_code);
      this.tableArray.push([]);
      this.tableArray[this.tableArray.length-1]['items'] = [];
      this.tableArray[this.tableArray.length-1]['name'] = c_code;
      var dims = await this.getCountryDims(c_code);
        //iterate over all dims
        for(var i=0; i<dims.length; i++){
          //get scores
          //determine the pole (high=true or false)
          var poleArray = this.getPole(dims[i].score);
          console.log(poleArray)
          var pole = poleArray.bool;
          var prefids = [];
          var item = {};
          item['pole'] = poleArray.score;
          item['_rowVariant'] = poleArray.rowvariant;
          item['dim'] = this.dims[i];
          if(pole === true || pole === false){
            //ids = all the ids for the given dimension and pole
            var ids = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/prefs/getPref/' + this.dims[i] + '/' + pole);
            for(var k=0; k<ids.data.length; k++){
              //prefids = array with all ids
              prefids.push(ids.data[k].pref_id);
            }
            console.log(prefids);
            var data = [];
            for(var j=0; j<prefids.length; j++){
              var response2 = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/prefs/getSinglePref/' + prefids[j]);
              data.push(response2.data);
            }
            var categories = data.map(a => a.category);
            categories = this.removeDuplicates(categories);
            console.log(categories);
            for(var l=0; l<categories.length; l++){
            var helperArray =  this.filterByCat(data, 'category', categories[l]);
            item[categories[l]] = helperArray;
            }
          }
          var items = [];
          items.push(item);
        }
        console.log(this.tableArray[this.tableArray.length-1]['items']);
    },
    
    filterByCat: function(array, key, value) {
    return array.filter(function(e) {
      return e[key] == value;
    });
  },
    
    removeDuplicates: function(arr){
      let unique_array = []
      for(let i = 0;i < arr.length; i++){
          if(unique_array.indexOf(arr[i]) == -1){
              unique_array.push(arr[i])
          }
      }
      return unique_array
  },
  
    getPole: function(score){
      var pole = {};
      switch (true) {
      case (score < 20):
          pole['bool'] = false;
          pole['score'] = 'very low';
          pole['rowvariant'] = 'very_low';
          break;
      case (score < 40):
          pole['bool'] = false;
          pole['score'] = 'low';
          pole['rowvariant'] = 'low';
          break;
      case (score < 60):
          pole['bool'] = null;
          pole['score'] = 'medium';
          pole['rowvariant'] = 'medium';
          break;
      case (score < 80):
          pole['bool'] = true;
          pole['score'] = 'high';
          pole['rowvariant'] = 'high';
          break;
      case (score < 130):
          pole['bool'] = true;
          pole['score'] = 'very high';
          pole['rowvariant'] = 'very_high';
          break;
      }
      console.log(pole)
      return pole;
    },
    
    getCountryDims: async function(c_code){
      var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/score/getDims/' + c_code);
      return response.data;
    },
    
    initItem: function(){
      
    }
  }
}
</script>

<style scoped>
.countrySelect{
    width: 20vw;
}
#high{
 background-color: red; 
}
</style>
