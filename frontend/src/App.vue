<template>
  <div id="app">
    <Header/></Header>
    <div id="view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components:{
    Header: Header,
  }
}
</script>
<style lang="scss">

  @import "assets/_custom.scss";
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

  body {
    margin: 0;
  }
#view{
  width: 80%;
  margin-left: 10%;
}
</style>
