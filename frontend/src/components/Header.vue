<template>
    <div id="NavBar">
        <b-navbar toggleable="md" type="dark" variant="primary" >
        
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        
          <b-navbar-brand href="#">Dashboard</b-navbar-brand>
        
          <b-collapse is-nav id="nav_collapse">
        
            <b-navbar-nav>
              <b-nav-item href="#"disabled>Impressum</b-nav-item>
              <b-nav-item href="#" disabled>Help</b-nav-item>
            </b-navbar-nav>
        
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            </b-navbar-nav>
        
          </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#NavBar{
    margin-top: 5vh;
}
</style>
