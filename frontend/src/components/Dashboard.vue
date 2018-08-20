<template>
    <div id="rootDiv">
        <div id="titleDiv">
            <h2>Please select your target locales:</h2>
        </div>
        <Locales v-for="x in country_counter" :key="x"></Locales>
        <br>
    </div>
</template>

<script>
import {store} from '../store/index'
import Locales from '@/components/Locales'
export default {
    name: 'Dashboard',
        components: {
            Locales: Locales,
        },
    data () {
    return {
    }
    },
    computed: {
        countries () {
            return store.state.countries
        },
        country_counter: {
            get () {
                return store.state.country_counter
            },
            set (value) {
                store.commit('update_country_counter', value)
            }
        },
    }
}

</script>

<style scoped>
#titleDiv{
    margin-top: 5vh;
    margin-bottom: 5vh;
}
</style>
