<template>
  <Header class="header"/>
  <Nav class="nav"/>
  <router-view class="view"/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
export default {
  setup() {
    
  },components:{
    Header,
    Nav,
    Footer
  }
}
</script>

<style lang="scss">
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}
body{
  background: black;
}

#app{
  --sidebar-width:220px;
  --main-width: calc(100% - var(--sidebar-width));
}
.view{
  width: 100%;
  height: 100%;
  padding-left: var(--sidebar-width);
}

</style>
