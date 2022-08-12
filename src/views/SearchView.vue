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
    <a >모두 보기</a>
    </router-link>
  </div>
    <BasicCard/>
    <div class="tag">
    <h3>추천 태그</h3>
        <router-link to="tag_suggestions/tags">
    <a >모두 보기</a>
    </router-link>
  </div>
    <BasicCard/>
    <div class="nation">
    <h3>국가</h3>
        <router-link to="tag_suggestions/nations">
    <a >모두 보기</a>
    </router-link>
  </div>
    <BasicCard/>
</div>
<SearchResult v-else :SearchText="SearchText" />
</template>

<script>
import { ref, inject, onMounted } from 'vue'
import PopularCard from '../components/search/PopularCard.vue'
import SearchResult from '../components/search/SearchResult/SearchResult.vue'
export default {
setup(){
  let isSearch = ref(false)
  let SearchText = ref('')

  const emitter = inject('emitter');

  emitter.on('isSearchText', (value) =>{
    isSearch.value = value
  })

  emitter.on('SearchText', (value) =>{
    SearchText.value = value

  })



  return {
    isSearch,
    SearchText,
  }
},
components:{
  PopularCard,
  SearchResult
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
</style>