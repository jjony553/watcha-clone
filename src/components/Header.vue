<template> 
<div class="header">
    <router-link to="/" class="logo" >
        <img src="../assets/logo.png" alt="logo">
    </router-link>
    <div class="profile">
        <img class="profile-image" src="http://file.mk.co.kr/meet/neds/2021/09/image_readtop_2021_917933_16327070584796067.jpg" alt="" @click="openProfileMenu">
        <ProfileMenu v-if="isOpen" />
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import ProfileMenu from './ProfileMenu.vue'
export default {
setup(){
    let isOpen = ref(false)

    function openProfileMenu(){
        isOpen.value = !isOpen.value
    }
    return{
        isOpen,
        openProfileMenu
    }
},
components:{
    ProfileMenu
}
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    background: #141517;

    .logo{
        padding: 8px;
        margin-left: 20px;
        img{
            width: 70px;
            height: 40px;
        }
    }
    .profile{
        display: inline-block;
        width: 32px;
        align-items: end;
        margin: 10px;
        padding: 0;


        .profile-image{
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    }
}
</style>