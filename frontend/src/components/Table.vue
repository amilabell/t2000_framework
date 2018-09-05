<template>
    <div class="wrapper_div">
        <b-row align-h="around">
            <b-col><b>{{title}}</b></b-col>
            <b-col cols="auto"><toggle-button  @change="show = !show" :width='75' :value="true" :labels="{checked: 'displayed', unchecked: 'hidden'}"/></b-col><br/>
        </b-row>
        <b-table v-if="show" small responsive :key="keyAttr" :items="items" :fields="categories" class="table">
            <span slot="1" slot-scope="data" v-html="data.value"></span>
            <span slot="2" slot-scope="data" v-html="data.value"></span>
            <span slot="3" slot-scope="data" v-html="data.value"></span>
            <span slot="4" slot-scope="data" v-html="data.value"></span>
            <span slot="5" slot-scope="data" v-html="data.value"></span>
            <span slot="6" slot-scope="data" v-html="data.value"></span>
            <span slot="7" slot-scope="data" v-html="data.value"></span>
            <span slot="8" slot-scope="data" v-html="data.value"></span>
        </b-table>
    </div>
</template>

<script>
export default {
  name: 'countryTable',
  props: ['keyAttr', 'items', 'categories', 'title'],
  data () {
    return {
        show: true
    };
  },
  async mounted(){
      
  },
  methods: {
         toggle: function(index){
        this.tableArray[index].bool = this.tableArray[index].bool ? false : true;
        console.log(this.tableArray[index].bool);
    }
  }
};
</script>

<style scoped>
.wrapper_div{
    padding-top: 4vh;
    padding-bottom: 4vh;
}
</style>
