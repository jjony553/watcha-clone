<template> 
<div class="header">
    <div class="logo-search">
        <router-link to="/" class="logo" >
            <img src="../assets/logo.png" alt="logo">
        </router-link>
        <form class="search" v-if="isSearchView">
            <label>
                <i class="material-symbols-outlined">
                search
                </i>
                <input type="text" placeholder="콘텐츠,태그,인물,리스트 검색" ref ="search" v-model="isSeachText" @change="isSearch">
                <button class="cancel" @click="deleteText">x</button>
            </label>
        </form>
    </div>

    <div class="profile">
        <img class="profile-image" src="http://file.mk.co.kr/meet/neds/2021/09/image_readtop_2021_917933_16327070584796067.jpg" alt="" @click="openProfileMenu">
        <ProfileMenu v-if="isOpen"  @mouseleave="isOpen=false"/>
    </div>
</div>
</template>

<script>
import { ref, onMounted , inject } from 'vue'
import ProfileMenu from './ProfileMenu.vue'
export default {
props:{
},

setup(){
    let isOpen = ref(false)
    let isSearchView = ref(false)
    let isSeachText = ref("")

    const emitter = inject('emitter')
     emitter.on('isSearchView', (value) => {
      isSearchView.value = value
    });

//If text in input then show search result
    const isSearch = () => {
        if(isSeachText == ""){
            emitter.emit('isSearchText', false)
        }else{
            emitter.emit('isSearchText', true)
            emitter.emit('SearchText',isSeachText.value)
        }
    }

    function openProfileMenu(){
        isOpen.value = !isOpen.value
    }

    function deleteText(){
            input.value = ''
    }

    return{
        isOpen,
        openProfileMenu,
        deleteText,
        isSearchView,
        emitter,
        isSeachText,
        isSearch,
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

    .logo-search{
        display: flex;
        flex-direction: row;
    .logo{
        padding: 8px;
        margin-left: 20px;
        padding-right: 160px;
        img{
            width: 70px;
            height: 40px;
            
        }
    }
    .search{
        width: 337px;
        margin-top: 10px;
        label{
            display: flex;
            align-items: center;
            background: rgb(34, 35, 38);
            padding: 8px 12px;
            border-radius: 8px;
            overflow: hidden;
            i{
                flex: 0 0 auto;
                color: rgb(132, 134, 141);
                width: 20px;
                height: 20px;
                margin-right: 8px;
            }
            input{
                flex: 1 0 auto;
                background: transparent;
                color: white;
                padding: 0px;
                border: 0px;
                outline: none;
                margin: 0px;
                appearance: none;
                caret-color: rgb(248, 47, 98);
                font-size: 15px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 20px;
            }
            .cancel{
                flex: 0 0 auto;
                color: black;
                width: 20px;
                height: 20px;
                margin-left: 8px;
                cursor: pointer;
                border-radius: 50%;
                font-size: 12px;
                padding: 2px;
                background: #6C6D74;
                border: 1px solid transparent;
            }
        }

    }
    }

    .profile{
        display: inline-block;
        width: 32px;
        align-items: end;
        margin: 10px;
        padding: 0;
        cursor: pointer;

        .profile-image{
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }
    }
}
</style>