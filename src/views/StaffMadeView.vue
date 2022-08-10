<template>
<div class="staff-made">
    <div class="top">
        <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202009/16/img_20200916152758_395c9c8b.webp" alt=""/>

        <div class="title">
            <h1>왓챠 최고 인기작</h1>
            <p>콘텐츠 293개</p>
            <p>블록버스터 영화부터 아트 영화, 인기 애니메이션, 드라마, 예능 등 모든 작품을 2주 무료 이용으로 감상하세요. 취향에 맞는 작품을 선별하여 추천해드릴게요 :)</p>
        </div>

    </div>
    <div class="center">
        <div class="divider"></div>
            <div class="collect">
                <button>담아두기</button>
                <span class="material-symbols-outlined">
                    more_horiz
                </span>
            </div>
        <div class="divider"></div>
    </div>

    <MyCard />
</div>
</template>

<script>
import MyCard from '../components/MyCard.vue'
export default {
components:{
    MyCard
}
}
</script>

<style lang="scss" scoped>
.staff-made{
    width: var(--main-width);
    .top{
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        img{
        width: 270px;
        height: 270px;
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
            p{
                width: 600px;
                font-size: 15px;
                color: #babac1;
                margin-bottom: 0;
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
                font-weight: 700;
                font-size: 15px;
                padding: 10px 10px 10px 10px;
            }
            button:hover{
                cursor: pointer;
                background: black;
                opacity: 50%;
                }
            span{
                font-size: 20px;
                color: white;
                border: 1px solid #1b1c1d;
                padding: 10px 10px 10px 10px;
            }
            span:hover{
                cursor: pointer;
                background: black;
                opacity: 50%;
                }
        }
    }
}
</style>