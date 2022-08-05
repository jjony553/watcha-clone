<template>
  <component :is="layout" >
    <router-view class="view" v-model="layout"/>
  </component>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed  } from 'vue';
export default {
  name:'App',
  setup(){
    const route = useRoute()
    const layout = computed(() => route.meta.layout || 'DefaultLayout' )

      return {
          layout
      }
  },
  components:{
  }
}
</script>

<style lang="scss">
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}
body{
  background: black;
}
#app{
  --sidebar-width:220px;
  --main-width: calc(100% - var(--sidebar-width));
  .v-hl-svg{
      opacity: .4;
  }
}
.view{
  width: 100%;
  height: 100%;
  padding-left: var(--sidebar-width);
}

</style>
