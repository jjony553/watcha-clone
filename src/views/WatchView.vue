<template>
  <div class="watch">
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
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0px;

}


</style>