<template>
  <div class="home">
    <h1>홈</h1>
    <div class="divider"></div>
    <MainCard/>

</div>
</template>

<script>
import Footer from '../components/Footer.vue'
import MainCard from '../components/MainCard.vue'
export default {
  name: 'HomeView',
  components: {
    Footer,
    MainCard
}
}
</script>

<style lang="scss" scoped>
.home{
    width: var(--main-width);
    h1{
      color: white;
      padding: 40px 0 0 35px;
    }
    .divider{
      height: 1px;
      background: #1b1c1d;
      margin: 0 16px 16px 16px;
    }
}
</style>