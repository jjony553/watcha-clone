<template>
  <div class="home">
    <h1>홈</h1>
    <div class="divider"></div>
    <MainCard/>

    <div class="program">
      <input type="radio" value="all" v-model="selected" id="all" />
      <label for="all">전체</label>
      <input type="radio" value="movie" v-model="selected" id="movie" />
      <label for="movie">영화</label>
      <input type="radio" value="tv" v-model="selected" id="tv" />
      <label for="tv">TV 프로그램</label>
    </div>
    <div>
        <AllProgram v-if="selected == 'all'" :items="items"/>
        <MovieProgram v-else-if="selected == 'movie'"/>
        <TvProgram v-else-if="selected == 'tv'"/>
    </div>
</div>
</template>

<script>
import { ref, onMounted} from 'vue'
import MainCard from '../components/home/MainCard.vue'
import AllProgram from '../components/home/AllProgram.vue'
import MovieProgram from '../components/home/MovieProgram.vue'
import TvProgram from '../components/home/TvProgram.vue'
export default {
  name: 'HomeView',
  setup(){
    let selected  = ref("all")
    let items= ref([])

  onMounted( async () => {
    items.value = await fetchItems()
  })

  async function fetchItems(){
        const res = await fetch(`https://62f01d0b57311485d12d76cd.mockapi.io/item`)
        const data = await res.json()
        return data
  }
    return{
        selected,
        items,
        fetchItems

    }
  },
  components: {
    MainCard,
    AllProgram,
    MovieProgram,
    TvProgram
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
        display: flex;
        padding: 10px 0 0 20px;
      input {
          visibility:hidden;
          margin: 0;
      }
      label {
          color: #84868d;
          font-size: 14px;
          background: transparent;
          border: 2px solid #84868d;;
          border-radius: 24px;
          padding: 10px 16px;
          font-weight: 600;
          cursor: pointer;
      }
      input:checked + label {
          color: black;
          background: white;
          font-size: 14px;
          border-radius: 24px;
          padding: 10px 16px;
          font-weight: 600;
      }
    }
}
</style>