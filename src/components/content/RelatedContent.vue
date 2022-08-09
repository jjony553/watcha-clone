<template>
<div class="related_content">
  <h2>비슷한 콘텐츠</h2>
  <div class="card">
    <img src="https://blog.kakaocdn.net/dn/sgtFl/btrgi1vZItx/VqnRvzwzUlF80oJWwykeJK/img.jpg" alt="" />
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.related_content{
  padding-left: 40px;
  h2{
  color:white;
}
  .card{
      margin-right: 16px;
      img{
          width: 173px;
          height: 255px;
          border-radius: 5px;
      }
      img:hover{
          background: black;
          opacity: 50%;
      }
  }
}

</style>