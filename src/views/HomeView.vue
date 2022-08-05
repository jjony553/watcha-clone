<template>
  <div class="home">
    <h1>홈</h1>
    <div class="divider"></div>
    <MainCard/>

    <div class="program">
    <button @click="selectedButton = 'all'">전체</button>
    <button @click="selectedButton = 'movie'">영화</button>
    <button @click="selectedButton = 'tv'">TV 프로그램</button>

    <div>
      <AllProgram v-if="selected == 'all'"/>
    </div>
  </div>
</div>
</template>

<script>
import Footer from '../components/Footer.vue'
import MainCard from '../components/MainCard.vue'
import AllProgram from '../components/AllProgram.vue'
export default {
  name: 'HomeView',
  setup(){
    let selected = 'all'

    function selectedButton(){
      if(selected == 'all'){
        selected = 'all'
      }else if(selected == 'movie'){
        selected = 'movie'
      }else {
        selected = 'tv'
      }
      console.log(selected)
    }
      
    return{
      selected,
      selectedButton
    }
  },
  components: {
    Footer,
    MainCard,
    AllProgram
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

    .program{
      padding: 20px 0px 0 40px;
      button{
        margin-right: 8px;
        color: #84868d;
        font-size: 14px;
        background: transparent;
        border: 1px solid #84868d;;
        border-radius: 15px;
        padding: 8px 16px;
        cursor: pointer;
      }
    }
}
</style>