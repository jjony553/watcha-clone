<template>
  <div class="video-player">
    <div class="header" v-if="isMouseOn">
      <i class="material-symbols-outlined" @click="openMenu">
        menu
      </i>
      <button @click="$router.go(-1)">X</button>
    </div>
    <div class="video" @mouseover="isMouseOn = !isMouseOn">
          <iframe src="https://www.youtube.com/embed/wmXczyb-3P0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div v-if="isOpenMenu" class="menu">
      <div class="top">
        <span>title</span>
        <button @click="isOpenMenu = false">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
setup () {
  let isMouseOn = ref(false)
  let isOpenMenu = ref(false)

  function openMenu(){
    isOpenMenu.value = !isOpenMenu.value
  }

  return {
    isMouseOn,
    openMenu,
    isOpenMenu
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
    height: 100px;
    z-index: 2001;
    background: black;
    opacity: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    i{
      font-size: 45px;
      color:white;
      padding: 20px;
      cursor: pointer;
    }

    button{
    font-size: 45px;
    color:white;
    background: transparent;
    cursor: pointer;
    padding: 20px;
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

.menu{
  width: 400px;
  height: 100%;
  background: white;
  z-index: 2002;
  position:absolute;
  left: 0;
  .top{
    display: flex;
    justify-content: space-between;
    background: black;
    opacity: 70%;
    padding: 20px;
    span{
      font-size: 20px;
      color: white;
    }
    button{
      font-size: 20px;
      color: grey;
      cursor: pointer;
    }
  }
}
}
</style>