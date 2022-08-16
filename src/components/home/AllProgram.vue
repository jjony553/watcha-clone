<template>
<div class="all-program">
    <div class="new-apisode">
      <h3>새로운 에피소드</h3>
      <router-link to="/staffmade">
        <a>더보기</a>
      </router-link>
    </div>
  <VueHorizontal class="vh" v-if="newVideos.length > 0">
    <div v-for="newVideo in newVideos" :key="newVideo">
      <newVideos :newVideo="newVideo"/>
    </div>
  </VueHorizontal>

  <div class="exclusive">
    <h3>왓챠 익스클루시브</h3>
    <router-link to="/staffmade">
      <a>더보기</a>
    </router-link>
  </div>
  <VueHorizontal class="vh" v-if="items.length > 0">
  <div v-for="item in items" :key="item">
    <WatchaMovie :item="item"/>
  </div>
  </VueHorizontal>

  <div class="top">
    <h3>왓챠 TOP 10 </h3>
  </div>
    <TopCard/>

    <div class="popular">
      <h3>왓챠 최고 인기작</h3>
      <router-link to="/staffmade">
        <a>더보기</a>
      </router-link>
    </div>
    <VueHorizontal class="vh" v-if="items.length > 0">
    <div v-for="item in items" :key="item">
      <WatchaMovie :item="item"/>
    </div>
    </VueHorizontal>
</div>
</template>

<script>
import TopCard from './TopCard.vue'
import WatchaMovie from './WatchaMovie.vue'
import newVideos from './NewVideo.vue'
export default {
props:{
  items: Array,
  newVideos: Array
},
setup(){

},
components:{
    TopCard,
    WatchaMovie,
    newVideos
}
}
</script>

<style lang="scss" scoped>
.all-program{
    h3{
      color:white;
    }
    a{
      text-decoration: none;
      color:#84868d;
      font-size:15px;
      display: flex;
      align-items: center;
    }
  .exclusive, .top, .new-apisode, .popular{
    display: flex;
    flex-direction: row;
    padding: 20px 40px 0 35px;
    justify-content: space-between;
  }
  .vh{
    margin-left: 40px;
    margin-right: 40px;
  }
}
</style>