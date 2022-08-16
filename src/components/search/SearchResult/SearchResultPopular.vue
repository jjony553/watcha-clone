<template>
  <div class="search-result-popular">
    <div class="list" v-for="searchList in searchList" :key="searchList">
      <img :src="searchList.Poster" alt="">
      <div>
        <p class="title">{{searchList.Title}}</p>
        <p class="info">{{searchList.Year}}, {{searchList.Type}}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
props:{
  searchList: Array
},
}
</script>

<style lang="scss" scoped>
.search-result-popular{
    padding: 10px 0 0 40px;
  .list{
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    img{
      width: 48px;
      height: 70px;
      margin-right: 12px;
      border-radius: 5px;
    }
    img:hover{
      opacity: 50%;
      cursor: pointer;
    }
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title{
      font-size: 16px;
      color:white;
      margin: 0 0 5px 0;
      }
      .info{
        font-size: 13px;
        color: #84868d;
        margin: 0;
      }
    }
  }
}
</style>