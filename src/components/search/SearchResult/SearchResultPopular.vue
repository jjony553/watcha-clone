<template>
  <div class="search-result-popular">
    <div class="list">
      <img src="https://post-phinf.pstatic.net/MjAxOTEyMDRfOSAg/MDAxNTc1NDI1MTg2MDE2.b1S1g-yhSiy6hxFJOoMsO7-PlMTc2iWAdznJ2xZwTxQg.3kTCo5pOPX6G3wtYR1AAYeGetDTkOXO2xTCM0SU4bNcg.JPEG/253-%EC%95%84%EC%9D%B4%EC%9C%A04.jpg?type=w1200" alt="">
      <div>
        <p class="title">김복남 살인사건의 전말</p>
        <p class="info">영화 · 장철수 · 2010</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-result-popular{
    padding: 10px 0 0 40px;
  .list{
    display: flex;
    flex-direction: row;
    img{
      width: 48px;
      height: 70px;
      margin-right: 12px;
      border-radius: 5px;
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