<template>
  <div class="home">
    <h1>HomeView</h1>
</div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Footer,
}
}
</script>

<style lang="scss" scoped>
.home{
  color:white;
  width: var(--main-width);
  height: 100%;
  background: red;
  
}
</style>