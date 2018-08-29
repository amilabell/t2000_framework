<template>
    <div>
        <b-form-select @input="fireEvent(clickedCountry)"  v-model="clickedCountry" :options="countries" value-field="c_code" text-field="name" class="countrySelect"/>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: '',
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
    width: 20vw;
}
</style>
