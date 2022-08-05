<template>
  <div class="watch">
    <button @click="$router.go(-1)">X</button>
    <VideoPlayer/>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
export default {
setup(){
},
components:{
    VideoPlayer
}
}
</script>

<style lang="scss" scoped>
.watch{
    width: 100%;
    height: 100%;
    position: relative;
    button{
        position: absolute;
        font-size: 30px;
        color:white;
        cursor: pointer;
}
}

</style>