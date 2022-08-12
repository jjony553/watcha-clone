<template>
  <vue-horizontal class="vh">
    <div class="card">
        <p>SF</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>판타지</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>한국 드라마</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>로맨틱 코미디</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>전기</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
    <div class="card">
        <p>강렬한, 스릴러</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>사랑, 짝사랑</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>미국, 춤</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>아일랜드</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>덴마크</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
  </vue-horizontal>
</template>

<script>
export default {
setup(){
    
},
components:{
}
}

</script>
<style lang="scss" scoped>
.vh{
    margin-left: 40px;
    margin-right: 40px;
  
    .card{
    position: relative;
    margin-right: 16px;
        p{
        position: absolute;
        top: -10px;
        left: 15px;
        color:white;
        font-size: 16px;
        }
        img{
        width: 260px;
        height: 146px;
        border-radius: 5px;
        }
        img:hover{
            background: black;
            opacity: 50%;
        }
    }
}
</style>