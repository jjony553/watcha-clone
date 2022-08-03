<template>
<div class="search">
  <div class="popular">
    <h3>인기</h3>
    <a>모두 보기</a>
  </div>
    <PopularCard/>
  <div class="genre">
    <h3>추천 장르</h3>
    <a>모두 보기</a>
  </div>
    <BasicCard/>
    <div class="tag">
    <h3>추천 태그</h3>
    <a>모두 보기</a>
  </div>
    <BasicCard/>
    <div class="nation">
    <h3>국가</h3>
    <a>모두 보기</a>
  </div>
    <BasicCard/>
</div>
</template>

<script>
import PopularCard from '../components/PopularCard.vue'
export default {
setup(){
},
components:{
  PopularCard
}
}
</script>

<style lang="scss" scoped>
.search{
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
  .popular, .genre, .tag, .nation{
    display: flex;
    flex-direction: row;
    padding: 40px 40px 0 35px;
    justify-content: space-between;
  }
}
</style>