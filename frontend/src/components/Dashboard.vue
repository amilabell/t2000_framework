<template>
    <div id="rootDiv">
        <div id="titleDiv">
            <h2>Please select your target locales:</h2>
        </div>
        <countrySelect @countryClick="getPrefs($event)"></countrySelect>
        <div v-if="clickedCountry">
            Please read the results below carefully! Keep in mind that those are just suggestions, showing how users from a specific country may prefer a User-Interface to be. 
            <br/>However, the cultural background does only influence a person to a not yet completely recognized degree and 
        </div>
        <!--view preferences-->
        <div v-for="(item, index) in tableArray" class="tableDivs">
          <b-collapse visible :id="item.name" v-model="item.bool">
              <countryTable :title="item.name" :keyAttr="item.name" :items="items[index]" :categories="categories"></countryTable>
          </b-collapse>
        </div>
        <br>
    </div>
</template>

<script>
import axios from 'axios';
import countrySelect from './CountrySelect.vue';
import countryTable from './Table.vue';
export default {
    name: 'Dashboard',
    components: {
      countrySelect,
      countryTable
    },
     data () {
    return {
      selected: 'countries',
      dims: [],
      items: [],
      countries: [],
      clickedCountry: '',
      tableArray: [],
      items_degree: [],
      categories: [{key: 'dim', label: 'dim'}, {key: 'pole', label: 'score'}],
      items: [],
    };
  },
  async mounted(){
      await this.getCategories();
      this.dims = await this.getDims();
    },

  methods:{
    async getCountry(id){
        var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/countries/getOne/' + id);
        console.log(response);
        return response.data[0].name;
    },
    
    async getDegrees(id){
      var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/countries/getDims/' + id);
      return(response);
    },
    
    showingOverview: async function(){
      for(var i=0; i<this.items.length; i++){
        var response = await this.getDegrees(this.items[i].code);
        if(this.items_degree === null || this.items_degree === [] || this.items_degree.length === 0){
          this.items_degree = response.data;
        }else{
          this.items_degree.push(response.data[0]);
        }
      }
    },
    
    getCategories: async function(){
      var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/prefs/getCats');
      var data = response.data;
      for(var i=0; i<data.length; i++){
        this.categories.push({'label': data[i].name, 'key': data[i].id, 'thStyle': {'min-width': '220px !important'}});
      }
    },
    
    getDims: async function(){
      var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/dims/getAll');
      var dims = [];
      for(var i=0; i<response.data.length; i++){
        dims.push(response.data[i]);
      }
      return dims;
    },
    
    checkArray: function(name){
        var response = false;
        for(var q=0; q<this.tableArray.length; q++){
            if(this.tableArray[q].name === name){
                response = true;
            }
        }
        return response;
    },
    
    getPrefs: async function(c_code){
        var name = await this.getCountry(c_code);
      //retrieve position of element already in array
      var x = this.checkArray(name);
      console.log(x);
      if(x === false){
        //var position = this.tableArray.length;
        this.tableArray.push({'name': name, 'bool': true});
        var dims = await this.getCountryDims(c_code);
        this.items.push([]);
          //iterate over all dims
          for(var i=0; i<dims.length; i++){
            //get scores
            //determine the pole (high=true or false)
            var poleArray = this.getPole(dims[i].score);
            var pole = poleArray.bool;
            var prefids = [];
            var item = {};
            item['pole'] = poleArray.score;
            item['_rowVariant'] = poleArray.rowvariant;
            item['dim'] = this.dims[i];
            console.log(item.dim);
            if(pole === true || pole === false){
              //ids = all the ids for the given dimension and pole
              var ids = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/prefs/getPref/' + this.dims[i] + '/' + pole);
              for(var k=0; k<ids.data.length; k++){
                //prefids = array with all ids
                prefids.push(ids.data[k].pref_id);
              }
              var data = [];
              for(var j=0; j<prefids.length; j++){
                var response2 = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/prefs/getSinglePref/' + prefids[j]);
                data.push(response2.data);
              }
              for(var y=0; y<data.length;y++){
                  data[y].text = '<li style> ' + data[y].text + ' </li> ';
                  console.log(data[y].text);
              }
              var categories = data.map(a => a.category);
              categories = this.removeDuplicates(categories);
              for(var l=0; l<categories.length; l++){
                  item[categories[l]] ='';
                  var helperArray =  this.filterByCat(data, 'category', categories[l]);
                  for(var a=0; a<helperArray.length; a++){
                    item[categories[l]] = item[categories[l]] + helperArray[a].text;
                  }
                }
            }
            this.items[this.items.length -1].push(item);
          }
          console.log(this.items);
      }
      else{
          alert("Country already selected");
      }
      console.log(this.categories[3].thStyle);
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
      return pole;
    },
    
    getCountryDims: async function(c_code){
      var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/score/getDims/' + c_code);
      return response.data;
    },
    
    toggle: function(index){
        this.tableArray[index].bool = this.tableArray[index].bool ? false : true;
        console.log(this.tableArray[index].bool);
    }
  }
};

</script>

<style scoped>
#titleDiv{
    margin-top: 5vh;
    margin-bottom: 5vh;
}
#high{
 background-color: red; 
}
.tableDivs{
     max-width: 100%;
}
.table{
 font-size: 0.8em;
}
</style>
