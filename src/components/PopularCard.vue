<template>
<vue-horizontal class="vh">
    <div class="popular">
        <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
    </div>
    <div class="popular">
        <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
    </div>
    <div class="popular">
        <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
    </div>
     <div class="popular">
        <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
    </div>
    <div class="popular">
        <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
    </div>
    <div class="popular">
        <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
    </div>
     <div class="popular">
        <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
    </div>
    <div class="popular">
        <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
    </div>
    <div class="popular">
        <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
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
    .popular{
        margin-right: 16px;
        img{
            width: 177px;
            height: 177px;
            border-radius: 5px;
        }
        img:hover{
            background: black;
            opacity: 50%;
        }
    }
}
</style>