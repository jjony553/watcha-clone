<template> 
<div class="header">
    <router-link to="/" class="logo" >
        <img src="../assets/logo.png" alt="logo">
    </router-link>
    <img class="profile" src="http://file.mk.co.kr/meet/neds/2021/09/image_readtop_2021_917933_16327070584796067.jpg" alt="">
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 56px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #141517;

    .logo{
        position: absolute;
        left:0;
        padding: 16px;

        img{
            width: 70px;
            height: 40px;
        }
    }
    .profile{
        width: 32px;
        height: 32px;
        position: absolute;
        right: 0;
        border-radius: 50%;
        padding: 16px 40px;
    }
}
</style>