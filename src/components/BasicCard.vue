<template>
  <vue-horizontal class="vh">
    <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
    <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
     <div class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </div>
  </vue-horizontal>
</template>

<script>
import VueHorizontal from "vue-horizontal";
export default {
setup(){
    
},
components:{
  VueHorizontal
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