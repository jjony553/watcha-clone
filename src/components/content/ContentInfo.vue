<template>
<div>
<div class="content-info">
  <div class="info">
    <img src="https://an2-mars.amz.wtchn.net/assets/reason_icons/rate_24-c3f027bf1048b7f33daefe37a233e9bf8d1d331b0b508bedefe7a8fed772a5d1.png" alt="">
    <p>최근 시청한 회원님들의 78%가 4점 이상 평가했어요</p>
  </div>

  <div class="related-video">
    <h2>관련 동영상</h2>
    <img src="https://img.youtube.com/vi/d7-GyxrbaG0/0.jpg" alt="">
    <span>메인 예고편</span>
  </div>

  <div class="people">
    <h2>감독/출연</h2>
    <div class="people-info">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xtGlL_BmBhECaZ7lnk8lTLH2MzsBXQf7YQ&usqp=CAU" alt="">
      <div class="profile">
        <p>에구치 타쿠야</p>
        <span>성우 · 로이드 포저</span>
      </div>
    </div>
  </div>

  <div class="user-rate">
    <div class="title">
      <h2>왓챠피디아 사용자 평</h2>
      <span>6180</span>
    </div>
    <div class="people-info">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xtGlL_BmBhECaZ7lnk8lTLH2MzsBXQf7YQ&usqp=CAU" alt="">
      <div class="profile">
        <div class="name">
          <p>에구치 타쿠야</p>
          <span>★★★★</span>
        </div>
        <p>
상당히 재밌다. 무거운 주제를 가볍게 일상물처럼 푼데다가 전체를 관통하는 스토리도 마음에 든다. 거의 코난급 만화가 나온느낌....계속 읽기</p>
      </div>
    </div>
  </div>
</div>
<div class="best-reply"></div>
</div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.content-info{
  padding-left: 40px;
  .info{
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    p{
      color: white;
      font-size: 15px;
    }
  }

  .related-video{
    display: flex;
    flex-direction: column;
    h2{
      font-size: 20px;
      color:white;
      margin: 0;
    }
    img{
      width: 276px;
      height: 220px;
      object-fit: cover;
      margin: 0;
    }
    span{
      font-size: 15px;
      color: white;
    }
  }

  .people{

    h2{
      font-size: 20px;
      color: white;
    }
    .people-info{
        display: flex;
        flex-direction: row;
        align-items: center;
      img{
        width: 62px;
        height: 62px;
        border-radius: 50%;
        margin-right: 15px;
      }
      .profile{

        p{
          font-size: 16px;;
          color:white;
        }
        span{
          font-size: 13px;;
          color:#84868d;
        }
      }
    }
  }

  .user-rate{
    .title{
        display: flex;
        flex-direction: row;
        align-items: center;
      h2{
        font-size: 20px;
        color:white;
      }
      span{
        font-size: 15px;
        color:#babac1;
      }
    }

    .people-info{
        display: flex;
        flex-direction: row;
        align-items: center;
      img{
        width: 38px;
        height: 38px;
        border-radius: 50%;
      }
      .profile{
        
        .name{
                  display: flex;
        flex-direction: row;
        align-items: center;
          p{
            font-size: 15px;
            color:white;
          }
          span{
            color: gold;
          }
        }
        p{
          font-size: 15px;;
          color:#84868d;
        }
      }
    }
  }
}

</style>