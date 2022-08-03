<template>
  <div class="watched">
    <h1>다 본 콘텐츠</h1>
    <div v-if="isWatchedData" class="watched-card">
      <MyCard />
    </div>
    <div v-else class="empty">
      <div class="divider"></div>
      <div class="info">
        <span class="material-symbols-outlined">
          play_circle
        </span>
        <p>아직 본 콘텐츠가 없어요</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
setup(){
  let isWatchedData = true
  return{
    isWatchedData
  }
},
components:{
}
}
</script>

<style lang="scss" scoped>
.watched{
    width: var(--main-width);

    h1{
      color: white;
      padding: 40px 0 0 35px;
    }
  .empty{
    display: flex;
    flex-direction: column;
    
    .divider{
      height: 1px;
      background: #1b1c1d;
      margin: 0 16px 0 16px;
    }
    .info{
      padding: 94px 0 150px 0;
      span{
        font-size: 101px;
        color:#292929;
        display: flex;
        justify-content: center;
        align-content: center;
      }
      p{
        color:#292929;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-content: center;
      }
    }
  }
}

</style>