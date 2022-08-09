<template>
<div v-if="!isSearch" class="search">
  <div class="popular">
    <h3>인기</h3>
    
    <router-link to="popular_list">
    <a>모두 보기</a>
    </router-link>
  </div>
    <PopularCard/>
  <div class="genre">
    <h3>추천 장르</h3>
       <router-link to="tag_suggestions/genres">
    <a :title="title">모두 보기</a>
    </router-link>
  </div>
    <BasicCard/>
    <div class="tag">
    <h3>추천 태그</h3>
        <router-link to="tag_suggestions/tags">
    <a :title="title">모두 보기</a>
    </router-link>
  </div>
    <BasicCard/>
    <div class="nation">
    <h3>국가</h3>
        <router-link to="tag_suggestions/nations">
    <a :title="title">모두 보기</a>
    </router-link>
  </div>
    <BasicCard/>
</div>

</template>

<script>
import { ref, inject } from 'vue'
import PopularCard from '../components/PopularCard.vue'
export default {
props:{
},
setup(){
  let isSearch = ref(false)
  const emitter = inject('emitter');

  emitter.on('search', (value) =>{
    if(value !== null)
    isSearch = value

  })

  return {
    isSearch,
  }
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
      text-decoration: none;
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
.search-result{
  background: white;
}
</style>