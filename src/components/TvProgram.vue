<template>
<div class="tv-program">
  <div class="exclusive">
    <h3>왓챠 익스클루시브</h3>
    <a>더보기</a>
  </div>
    <MyCard/>

    <div class="new-apisode">
        <h3>새로운 에피소드</h3>
        <a>더보기</a>
    </div>
    <MyCard/>

  <div class="top">
    <h3>왓챠 TOP 10</h3>
  </div>
    <TopCard/>

    <div class="popular">
    <h3>왓챠 최고 인기작</h3>
    <a>더보기</a>
    </div>
    <MyCard/>
</div>
</template>

<script>
import TopCard from './TopCard.vue'
export default {
components:{
    TopCard
}
}
</script>

<style lang="scss" scoped>
.tv-program{
  width: var(--main-width);
    h3{
      color:white;
    }
    a{
      color:#84868d;
      font-size:15px;
      display: flex;
      align-items: center;
    }
  .exclusive, .top, .new-apisode, .popular{
    display: flex;
    flex-direction: row;
    padding: 40px 40px 0 35px;
    justify-content: space-between;
  }
}
</style>