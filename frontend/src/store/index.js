import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

//creation of new store
export const store = new Vuex.Store({
    state: {
        regions: [
            {"name": "Northern America", "countries": ""},
            {"name": "Central America", "countries": ""},
            {"name": "Carribeand", "countries": ""},
            {"name": "South America", "countries": ""},
            {"name": "Northern Europe", "countries": ""},
            {"name": "Western Europe", "countries": ""},
            {"name": "Southern Europe", "countries": ""},
            {"name": "Eastern Europe", "countries": ""},
            {"name": "Western Africa", "countries": ""},
            {"name": "Northern Africa", "countries": ""},
            {"name": "Middle Africa", "countries": ""},
            {"name": "Southern Africa", "countries": ""},
            {"name": "Eastern Africa", "countries": ""},
            {"name": "Western Asia", "countries": ""},
            {"name": "Central Asia", "countries": ""},
            {"name": "Southern Asia", "countries": ""},
            {"name": "Eastern Asia", "countries": ""},
            {"name": "Southeastern Asia", "countries": ""},
            {"name": "Australia and New Zealand", "countries": ""}
            ],
            country_counter: 1,
    },
    mutations: {
        update_country_counter (state, country_counter) {
            state.country_counter = country_counter
        },
    },
    //all mutations should be used via actions to prevent problems with asycnhronity and follow best practice
    actions: {
    }
})