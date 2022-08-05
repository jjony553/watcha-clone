<template>
  <div class="footer">
    <div class="info">
      <ul class="top-footer">
        <li>왓챠피디아 서비스 이용약관</li>
        <li class="private">개인정보 처리 방침</li>
        <li>왓챠 서비스 이용약관</li>
        <li>고객센터</li>
        <li>채용정보</li>
      </ul>
      <ul class="center-footer">
        <li>
          <span cl>고객 센터(이용 및 결제 문의)</span>
          <a>cs@watcha.co.kr/02-515-9985(유료)</a>
        </li>
        <li>
          <span>제휴 및 대외 협력</span> 
          <a>https://watcha.team/contact</a>
        </li>
        <li>
          <span>B2B 이용권 구매 문의</span>
          <a>쿠프마케팅 (ksm1459@coopnc.com / 070-4020-5289)</a>
        </li>
      </ul>
      <div class="bottom-footer">
        <ul>
          <li>주식회사 왓챠</li>
          <li>대표 박태훈</li>
          <li>서울특별시 서초구 강남대로 343 신덕빌딩 3층</li>
        </ul>
        <ul>
          <li>사업자등록번호 211-88-66013</li>
          <li>통신판매업 신고번호 제 2019-서울서초-0965호</li>
        </ul>
        <div>
          <img src="../assets/logo.png" alt="">
          <p> Copyright © 2022 by Watcha, Inc.All rights reserved</p>
        </div>
      </div>
    </div>
    <ul class="social">
        <li>
          <img src="../assets/footer/meta.svg" alt="">
        </li>
        <li>
          <img src="../assets/footer/twitter.svg" alt="">
        </li>
        <li>
          <img src="../assets/footer/instagram.svg" alt="">
        </li>
        <li>
          <img src="../assets/footer/blog.svg" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  padding-left: var(--sidebar-width);
  background: black;
  color: white;
  position: relative;
  padding-bottom: 50px;
  padding-top: 230px;
  .top-footer{
    display:flex;
    flex-direction: row;
    list-style: none;
    .private{
      color: white;
      font-weight: 700;
    }
    li{
      color: #ffffffb3;
      font-size: 12px;
      margin-right: 5px;
    }
    li:after{
      content: "";
      display: inline-block;
      background: rgba(255,255,255,0.2);
      vertical-align: top;
      width: 1px;
      height: 10px;
      margin: 5px 6px 0;
    }
    li:last-child::after {
    content: "";
    background: transparent;
    }
  }

  .center-footer{
    display:flex;
    flex-direction: column;
    list-style: none;
    margin-bottom: 50px;

    span{
      display: inline-block;
      width: 149px;
    }
    li{
      color: #ffffffb3;
      font-size: 12px;
      margin-bottom: 5px;
    }
    a:before{
    content: "";
    display: inline-block;
    background: rgba(255,255,255,0.2);
    vertical-align: middle;
    width: 1px;
    height: 10px;
    margin: 0 9px 0 0;
    }
  }

  .bottom-footer{
    ul{
      display:flex;
      flex-direction: row;
      list-style: none;
      margin:0 0 6px 0 ;
      li{
        font-size: 12px;
        color: rgba(255,255,255,0.3);
      }
      li:after{
        content: "";
        display: inline-block;
        background: rgba(255,255,255,0.2);
        vertical-align: top;
        width: 1px;
        height: 10px;
        margin: 5px 6px 0;
      }
      li:last-child::after {
      content: "";
      background: transparent;
    }
    }

    div{
      height: 20px;
      display: flex;
      flex-direction: row;
      padding-left: 42px;
      align-items: center;
      
      img{
        width: 35px;
        height: 20px;
        margin-right: 8px;
      }
      p{
        font-size: 12px;
        color: rgba(255,255,255,0.3);
      }
    }
  }


  .social{
    display:flex;
    flex-direction: row;
    list-style: none;
    justify-content: end;
    position: absolute;
    right: 50px;
    bottom: 50px;
    cursor: pointer;
    li{
      margin-right: 16px;
      img{
        width: 25px;
        height: 25px;
        border: 1px solid white;
        border-radius: 50%;
        padding: 5px;
      }
    }
  }
}
</style>