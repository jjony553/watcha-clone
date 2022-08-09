<template>
  <div class="content">
    <div class="top">
        <img src="http://www.irobotnews.com/news/photo/202102/23834_52718_5639.jpg" alt=""/>

        <div class="title">
            <h1>극장판 귀멸의 칼날: 무한열차편</h1>
            <ul>
                <li>애니메이션</li>
                <li>일본 애니메이션</li>
                <li>1시간 56분</li>
                <li class="average">평균 4.4</li>
                <li class="age">15</li>
            </ul>
            <p>혈귀로 변한 여동생 네즈코를 인간으로 되돌릴 단서를 찾아 비밀조직 귀살대에 들어간 탄지로. 임무 수행을 위해 최강 검사 염주 렌고쿠와 무한 열차에 탑승한 그는 숨어있던 식인 혈귀와 마주한다.</p>
        </div>
    </div>

    <div class="center">
        <div class="divider"></div>
            <div class="watch-collect">
                <router-link to="/watch">
                    <button>감상하기</button>
                </router-link>
                <div class="collect">
                    <button>담아두기</button>
                    <span class="material-symbols-outlined">
                        more_horiz
                    </span>
                </div>
            </div>
        <div class="divider"></div>
    </div>

    <div class="info">
            <input type="radio" value="content-info" v-model="selected" id="content-info" />
            <label for="content-info">콘텐츠 정보</label>
            <input type="radio" value="related-content" v-model="selected" id="related-content" />
            <label for="related-content">관련 콘텐츠</label>
    </div>
    <ContentInfo v-if="selected == 'content-info'" />
    <RelatedContent v-else-if="selected == 'related-content'" />
</div>
</template>

<script>
import ContentInfo from '../components/content/ContentInfo.vue'
import RelatedContent from '../components/content/RelatedContent.vue'
import { ref } from 'vue'
export default {
setup () {
    let selected  = ref("content-info")
    return{
        selected
    }
},
components:{
    ContentInfo,
    RelatedContent
}
}
</script>

<style lang="scss" scoped>
.content{
    width: var(--main-width);
    .top{
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        img{
        width: 170px;
        height: 250px;
        border-radius: 5px;
        margin-right: 50px;
        padding: 120px 0px 0px 40px;

        }
        .title{
            display: flex;
            flex-direction: column;
            justify-content: end;
            h1{
                font-size: 64px;
                color: white;
                margin: 0;
            }
            ul{
                display: flex;
                align-items: center;
                list-style: none;
                margin: 15px 0 8px 0;
                padding: 0;
                li{
                    color:#babac1;
                    font-size: 15px;
                }
                li:after{
                    content: '\00B7';
                    margin-left: 5px;
                    margin-right: 5px;
                    }
                .average{
                    color: white;
                    font-weight: 600;
                }
                .average::after{
                    content: "";
                    display: inline-block;
                    background: rgba(255,255,255,0.2);
                    vertical-align: top;
                    width: 1px;
                    height: 10px;
                    margin: 5px 10px 0 10px;
                }
                .age{
                    color: white;
                    font-weight: 900;
                    border-radius: 5px;
                    background: #2e2f31;
                    padding: 3px;
                    font-size: 12px;
                }
                .age::after{
                    content: '';
                    margin: 0;
                }

            }
            p{
                width: 600px;
                font-size: 15px;
                color: #babac1;
                margin: 0;
            }
        }
    }

    .center{
        display: flex;
        flex-direction: column;
        
        .divider{
        height: 1px;
        background: #1b1c1d;
        margin: 16px 0 16px 0;
        }
        .watch-collect{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 0 0 40px;

            button{
                background: #f82f62;
                color: white;
                padding: 10px;
                font-size: 15px;
                font-weight: 700;
                border-radius: 5px;
            }

            .collect{
                display: flex;
                flex-direction: row;
                justify-content: end;
                margin-right: 20px;
                button{
                    margin-right: 10px;
                    border: 1px solid #1b1c1d;
                    background: transparent;
                    color: white;
                    padding: 5px 10px 5px 10px;
                }

                span{
                    font-size: 20px;
                    color: white;
                    border: 1px solid #1b1c1d;
                    padding: 5px 10px 5px 10px;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }

    .info{
        display: flex;
        justify-content: center;
    input {
        visibility:hidden;
        
    }
    label {
        cursor: pointer;
        color: #4f5152;
    }
    input:checked + label {
        color: white;
        border-bottom: 2px solid white;
    }
    }
}
</style>