<template>
<div class="nav">
    <router-link to="/" class="logo" >
        <img src="../assets/logo.png" alt="logo">
    </router-link>

    <div class="menu">
        <ul>
             <router-link to="/" class="home">
                <div>
                    <li class="material-symbols-outlined">Cottage</li>
                    <span>홈</span>
                </div>
            </router-link>
            <router-link to="/search" class="search">
                <div>
                    <li class="material-symbols-outlined">Search</li>
                    <span>찾기</span>
                </div>
            </router-link>
            <router-link to="/evaluate" class="evaluate">
                <div>
                    <li class="material-symbols-outlined">Grade</li>
                    <span>평가하기</span>
                </div>
            </router-link>
            <router-link to="/library" class="library">
                <div>
                    <li class="material-symbols-outlined">Bento</li>
                    <span>보관함</span>
                </div>
            </router-link>
            <router-link to="/watched" class="watched">
                <div>
                    <li class="material-symbols-outlined">Check_Box</li>
                    <span>다 본 컨텐츠</span>
                </div>
            </router-link>
        </ul>
    </div>
</div> 
</template>

<script>
export default {

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
            .home, .search, .evaluate, .library, .watched{
                text-decoration: none;
                div{
                    display: flex;
                    justify-content: left;
                    flex-direction: row;
                    margin-bottom: 14px;
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
            }
        }
    }
}
</style>