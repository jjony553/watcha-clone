<template>
  <div class="search-result-people">
      <div class="profile">
        <img src="https://cdn.gukjenews.com/news/photo/202201/2388626_2381760_1339.jpg" alt="">
        <p class="name">허위주</p>
        <p class="job">배우</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-result-people{
  padding: 30px 0 0 40px;
  // display: grid;
  .profile{
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
    img{
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
      .name{
        font-size: 15px;
        color:white;
      margin: 3px 0 3px 0;
      }
      .job{
        font-size: 14px;
        color: #84868d;
        margin: 0;
      }
  }
}
</style>