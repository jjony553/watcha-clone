<template>
  <div class="mycard">
        <router-link to="/content" class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg" alt=""
            @mouseover="isHover = true" @mouseout="isHover = false">
            <span class="title">좋좋소</span>
            <span class="type">TV 프로그램</span>
            <div v-show="isHover" @mouseover="isHover = true" @mouseout="isHover = false" class="detail">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg" alt=""
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
                    <span class="detail-title">좋좋소</span>
                    <span class="detail-episode">에피소드 54개 시즌 1개</span>
                    <span class="detail-tag">드라마 사무실</span>
                </div>

            </div>
        </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
props:{},
setup() {
    let isHover = ref(false)

    return{
        isHover,
    }
}
}
</script>

<style lang="scss" scoped>

.mycard{
    display: flex;
    margin-left: 40px;
    display: grid;
    gap: 5px 5px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: auto auto auto auto;
    list-style-type: none;
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