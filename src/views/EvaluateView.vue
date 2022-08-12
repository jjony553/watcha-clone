<template>
  <div class="evaluate">
    <EvaluateCard  :movies="movies"/>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import EvaluateCard from '../components/evaluate/EvaluateCard.vue'
import env from '@/env'
export default {
setup(){
  let movies = ref([])

  onMounted( async () => {
    movies.value = await fetchMovies()
  })

  async function fetchMovies(){
        const res = await fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=hot}`)
        const data = await res.json()
        return data.Search
  }

  return{
    movies,
    fetchMovies
  }
},
components:{
  EvaluateCard
}
}
</script>

<style lang="scss" scoped>
.evaluate{
  width: var(--main-width);
  padding-top: 100px;
}
</style>