<template>
  <div class="video-player">
    <div class="header" v-if="isMouseOn">
      <i class="material-symbols-outlined">
        menu
      </i>
      <button @click="$router.go(-1)">X</button>
    </div>
    <div class="video" @mouseover="isMouseOn = !isMouseOn">
          <iframe src="https://www.youtube.com/embed/wmXczyb-3P0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
setup () {
  let isMouseOn = ref(false)

  return {
    isMouseOn,
  }
}
}
</script>

<style lang="scss" scoped>
.video-player{
  width: 1920px;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  position: relative;
  .header{
    top: 0;
    position: absolute;
    width: 100%;
    z-index: 2001;
    background: grey;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    i{
      font-size: 50px;
    color:white;
    }

    button{
    font-size: 50px;
    color:white;
    cursor: pointer;
    }
  }
  .video{
    width: 1920px;
    height: 950px;
      iframe{
      width: 1920px;
      height: 950px;
      }
  }

}
</style>