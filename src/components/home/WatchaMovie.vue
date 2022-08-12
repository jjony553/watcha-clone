<template>
  <div class="watcha-movie">
        <router-link to="/content" class="card">
            <img :src="item.image" alt=""
            @mouseover="isHover = true" @mouseout="isHover = false">
            <span class="title">{{item.title}}</span>
            <span class="type">{{item.type}}</span>
            <div v-show="isHover" @mouseover="isHover = true" @mouseout="isHover = false" class="detail">
                <img :src="item.image" alt=""
                >
                <div class="info">   
                    <div class="action">
                        <router-link to="/watch" class="video">
                            <span class="material-symbols-outlined">
                                play_arrow
                            </span>
                        </router-link>
                        <button class="collect">
                            <span class="material-symbols-outlined">
                                favorite
                            </span>
                        </button>
                    </div>
                    <span class="detail-title">{{item.title}}</span>
                    <span class="detail-episode">{{item.episode}}</span>
                    <span class="detail-tag">{{item.tag}}</span>
                </div>
            </div>
        </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
props:{
    item: Object
},
setup() {
    let isHover = ref(false)

    return{
        isHover,
    }
},
components:{
}
}
</script>

<style lang="scss" scoped>
.watcha-movie{
    margin-right: 20px;
    .card{
        display: flex;
        flex-direction: column;
        justify-content: left;
        text-decoration: none;
        position: relative;
        img{
            width: 186px;
            height: 275px;
            margin-bottom: 3px;
            border-radius: 5px; 
            margin-top: 10px;
        }
        .title{
            color:white;
            font-size: 15px;
            margin-bottom: 3px;
        }
        .type{
            color: #84868d;
            font-size: 14px;
        }
        .detail{
            position: absolute;
            background: black;
            transform: translateX(-10px) translateY(-40px);
            img{
            width: 223px;
            height: 330px;
            border-radius: 5px; 
            position: relative;
            background: black;
            opacity: 30%;
            }
            .info{
                width: 223px;
                height: 130px;
                margin-top: 200px;
                inset: 0;
                position: absolute;
                flex-direction: column;
                display: flex;
                justify-content: end;
            .action{
                padding-left: 10px;
                margin-bottom: 12px;
                .video{
                    span{
                        padding: 5px;
                        font-size: 25px;
                        background: white;
                        border-radius: 50%;
                        color: black;
                    cursor: pointer;
                    }
                    span:hover{
                        background: #FF0559;
                    }
                }
                .collect{
                    background: transparent;
                    border: transparent;
                    span{
                        padding: 5px;
                        font-size: 25px;
                        cursor: pointer;
                        border-radius: 50%;
                        background: black;
                        color: white;
                    }
                    span:hover{
                        background: #FF0559;
                    }
                }
            }

            .detail-title{
                padding-left: 10px;
                color:white;
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 12px;
            }

            .detail-episode{
                padding-left: 10px;
                color: #84868d;
                font-size: 13px;
                margin-bottom: 12px;
                font-weight: 500;
            }

            .detail-tag{
                padding-left: 10px;
                margin-bottom: 12px;
                color:white;
                font-size: 13px;
                font-weight: 500;
            }
            }

        }
    }
}

</style>