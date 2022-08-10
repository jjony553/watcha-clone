<!--Top 10 Card-->
<template>
<div class="top-card">
    <span>1</span>
    <vue-horizontal class="vh">
        <img src="https://static.news.zumst.com/images/81/2014/07/30/50339_59726_350.jpg" alt="" />
    </vue-horizontal>
</div>

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
div{
        position: relative;
        span{
        position: absolute;
        top: -10px;
        left: 25px;
        color: rgb(255, 255, 255);
        font-size: 56px;
        font-weight: 800;
        z-index: 5;
        }
    .vh{
        margin-left: 40px;
        margin-right: 40px;
            img{
             width: 181px;
            height: 267px;
            margin-right: 16px;
            object-fit: cover;
            border-radius: 5px;
            }
            img:hover{
                background: black;
                opacity: 50%;
            }
    }
}
</style>