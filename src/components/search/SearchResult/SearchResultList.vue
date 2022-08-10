<template>
  <div class="search-result-list">
      <div class="profile">
      <img src="https://cdn.gukjenews.com/news/photo/202201/2388626_2381760_1339.jpg" alt="">
      <p class="name">아이유</p>
      <p class="info">영화 · 2개</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-result-list{
  padding: 30px 0 0 40px;
  // display: grid;
  .profile{
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
    img{
      width: 210px;
      height: 210px;
      border-radius: 15px;
    }
    .name{
      font-size: 15px;
      color:white;
      margin: 3px 0 3px 0;
    }
    .info{
      font-size: 14px;
      color: #84868d;
      margin: 0;
    }
  }
}
</style>