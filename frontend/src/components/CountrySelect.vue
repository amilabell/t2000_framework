<template>
    <div id="selectDiv">
      <b-row>
        <h5>Please select your target locales: </h5> <helpBtn id="helpSelect"></helpBtn></b-row>
        <b-popover :target="'helpSelect'"
                  :placement="'right'"
                  triggers="hover focus click"
                  content="From the dropdown below, choose the locales you plan to develop a web-application for. The framework will then generate a table containing customized UI-preferences according to the selected country's Hofstede-scores. Please note that for the disabled countries, the Hofstede scores are not yet determined  ">
        </b-popover>
        <p/>
        <b-row><b-form-select @input="fireEvent(clickedCountry)"  v-model="clickedCountry" :options="countries" value-field="c_code" text-field="name" class="countrySelect"/></b-row>
    </div>
</template>

<script>
import axios from 'axios';
import helpBtn from './HelpBtn.vue';
export default {
  name: '',
  components: {
    'helpBtn': helpBtn,
  },
  data () {
    return {
      countries: [],
      clickedCountry: '',
    }
  },
  async mounted(){
      this.countries = await this.getCountries();
  },
  methods: {
      async getCountries(){
            var response = await axios.get('http://t2000-framework-amilabell.c9users.io:8082/countries/getAll');
            for(var i=0; i<response.data.length; i++){
              response.data[i]['disabled'] = !response.data[i].hasDims;
            }
            return response.data;
    },
    fireEvent(clickedId) {
      this.$emit('countryClick', clickedId);
    }
  }
};
</script>

<style scoped>
.countrySelect{
    width: 23vw;
    margin-bottom: 4vh;
}
</style>
