<template>
  <div class="evaluate">
    <EvaluateCard />
  </div>
</template>

<script>
import EvaluateCard from '../components/EvaluateCard.vue'
export default {
setup(){

},
components:{
  EvaluateCard
}
}
</script>

<style lang="scss" scoped>
.evaluate{
  width: var(--main-width);
  padding-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
}
</style>