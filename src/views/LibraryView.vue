<template>
<div class="library">
  <h1>보관함</h1>
  <div v-if="isLibraryData" class="library-card">
    <h3>담아둔 콘텐츠</h3>
    <MyCard />
  </div>
  <div v-else class="empty">
    <div class="info">
      <span class="material-symbols-outlined">
        favorite
      </span>
      <p>리스트 및 담아둔 콘텐츠가 여기 보여져요.</p>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  setup(){
    let isLibraryData = true;
    return{
      isLibraryData
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
.library{
  width: var(--main-width);
  h1{
      color: white;
      padding: 40px 0 0 35px;
  }
  .library-card{
    h3{
      margin-left: 40px;
      color:white;
    }
  }
  .empty{
  display: flex;
  flex-direction: column;
  
  .info{
    padding: 94px 0 150px 0;
    span{
      font-size: 80px;
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