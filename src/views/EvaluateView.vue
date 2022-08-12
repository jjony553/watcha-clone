<template>
  <div class="evaluate">
    <EvaluateCard  :movies="movies"/>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import EvaluateCard from '../components/evaluate/EvaluateCard.vue'
import { useMovieStore } from '@/stores/movie'
export default {
setup(){

  const movieStore = useMovieStore()

  const movies = computed(() =>{
    return movieStore.movie
  })

  onMounted( async () => {
    movieStore.fetchMovies()
  })

  return{
    movieStore,
    movies
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