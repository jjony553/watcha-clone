<template>
  <div class="search-result-movie" >
    <div v-for="movie in movies" :key="movie">
      <img :src="`${movie.Poster}`" alt="">
    </div>
  </div>
</template>

<script>

export default {
props:{
  movies: Array
},
setup(props){
    let movies = props.movies
  return {
    movies
  }
}
}
</script>

<style lang="scss" scoped>
.search-result-movie{
  padding: 10px 0 0 40px;
  display: grid;
  gap: 5px 5px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: auto auto auto auto;
  list-style-type: none;
  div{
    img{
    width: 180px;
    height: 230px;
    border-radius: 5px;
    margin-top: 10px;
  }
  img:hover{
    background: black;
    opacity: 50%;
  }
  }
}
</style>