<template>
<div class="nav">
    <router-link to="/" class="logo" >
        <img src="../assets/logo.png" alt="logo">
    </router-link>

    <div class="menu">
        <ul>
             <router-link to="/" class="home" @click="isOtherView">
                <li class="material-symbols-outlined">Cottage</li>
                <span>홈</span>
            </router-link>
            <router-link to="/search" class="search" @click="isSearchView">
                    <li class="material-symbols-outlined">Search</li>
                    <span>찾기</span>
            </router-link>
            <router-link to="/evaluate" class="evaluate" @click="isOtherView">
                    <li class="material-symbols-outlined">Grade</li>
                    <span>평가하기</span>
            </router-link>
            <router-link to="/library" class="library" @click="isOtherView">
                    <li class="material-symbols-outlined">Bento</li>
                    <span>보관함</span>
            </router-link>
            <router-link to="/watched" class="watched" @click="isOtherView">
                    <li class="material-symbols-outlined">Check_Box</li>
                    <span>다 본 컨텐츠</span>
            </router-link>
        </ul>
    </div>
</div> 
</template>

<script>
import { inject } from 'vue'
export default {
setup(){
     const emitter = inject('emitter')
     const isSearchView = () => {
        emitter.emit('isSearchView', true)
    }
    const isOtherView = () => {
        emitter.emit('isSearchView', false)
    }
    return{
        emitter,
        isSearchView,
        isOtherView
    }
}
}
</script>

<style lang="scss" scoped>
.nav{
    width: var(--sidebar-width);
    height: 100%;
    background: #141517;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 0;
    z-index: 1000;

    .logo{
        img{
            padding: 20px;
            width: 70px;
            height: 40px;
        }
    }

    .menu{
        ul{
            list-style: none;
            padding: 0 20px 0 20px;
            .home, .search, .evaluate, .library, .watched{
                text-decoration: none;
                display: flex;
                justify-content: left;
                flex-direction: row;
                padding: 10px 0 10px 16px;
                border-radius: 5px;
                li{
                    color:#D4D7DB;
                    font-size: 18px;
                    margin-right:6px;
                }
                span{
                    color:#D4D7DB;
                    font-size: 14px;
                }
            }
            .home.router-link-exact-active, .search.router-link-exact-active, .evaluate.router-link-exact-active, .library.router-link-exact-active, .watched.router-link-exact-active{
                background: #303133;
                    li{
                        color:white;
                    }
                    span{
                        color:white;
                    }
            }
        }
    }

}
</style>