<template>
<div class="search-result">
    <div class="top">
        <input type="radio" value="popular" v-model="selected" id="popular" />
        <label for="popular">인기</label>
        <input type="radio" value="movie" v-model="selected" id="movie" />
        <label for="movie">영화</label>
        <input type="radio" value="tv" v-model="selected" id="tv" />
        <label for="tv">TV 프로그램</label>
        <input type="radio" value="people" v-model="selected" id="people" />
        <label for="people">인물</label>
        <input type="radio" value="list" v-model="selected" id="list" />
        <label for="list">리스트</label>
    </div>
    <div class="divider"></div>

    <SearchResultPopularVue v-if="selected == 'popular'"  />
    <SearchResultMovieVue v-else-if="selected == 'movie'" :movies="movies"/>
    <SearchResultTvVue v-else-if="selected == 'tv'"/>
    <SearchResultPeopleVue v-else-if="selected == 'people'"/>
    <SearchResultListVue v-else-if="selected == 'list'"/>

</div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import SearchResultPopularVue from './SearchResultPopular.vue'
import SearchResultMovieVue from './SearchResultMovie.vue'
import SearchResultTvVue from './SearchResultTv.vue'
import SearchResultPeopleVue from './SearchResultPeople.vue'
import SearchResultListVue from './SearchResultList.vue'
import env from '@/env'

export default {
props:{
    SearchText: String
},
setup(props,){
    let searchText = props.SearchText
    let selected  = ref("popular")
    const movies = ref([])

    const getSearchMovies = () =>{
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${searchText}`).then(response => response.json()).then(data => {
           movies.value = data.Search
        })
    }

    onBeforeMount(() => {
        getSearchMovies()
    })
    return{
        searchText,
        selected,
        movies,
        getSearchMovies
    }
},
components:{
    SearchResultPopularVue,
    SearchResultMovieVue,
    SearchResultTvVue,
    SearchResultPeopleVue,
    SearchResultListVue
}
}
</script>

<style lang="scss" scoped>
.search-result{
    .top{
        display: flex;
        justify-content: start;
    padding: 14px 0 0 20px;

        input {
            visibility:hidden;
            
        }
        label {
            cursor: pointer;
            color: #4f5152;
            font-size: 15px;
            font-weight: 500;
        }
        input:checked + label {
            color: white;
            font-size: 15px;
            padding: 0 15px 15px 15px;
            font-weight: 500;
            border-bottom: 2px solid white;
        }
    }
    .divider{
      height: 1px;
      background: #1b1c1d;
      margin: 0 16px 16px 0;
    }
}
</style>