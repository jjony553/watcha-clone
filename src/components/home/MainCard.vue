<!--HomeView banner Card-->
<template>
    <VueHorizontal class="vh">
        <router-link to="/staffmade" class="main">
            <span>스테디셀러</span>
            <h4>왓챠 최고 인기작</h4>
            <p>명량, 탑건 등 지금 가장 많이 보는 작품</p>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MjVfMjM0/MDAxNTY0MDQ2MDQ3NTcx._vdB0BDM7mey_zYvinZI5Plq6Xkgi5-Dq7cGDIzSi48g.ViCflQ0lKJTvseNLuFP3jDw44LEny2WOGJUm2B0v6IYg.JPEG.chunilmkg/%EC%B2%9C%EC%9D%BC_%EB%B8%94%EB%A1%9C%EA%B7%B8_1.jpg?type=w800" alt="">
        </router-link>

        <router-link to="/staffmade" class="main">
            <span>베스트 셀렉션</span>
            <h4>왓챠 익스클루시브</h4>
            <p>왓챠가 발굴한 소문난 띵작들</p>
            <img src="https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2Faad0b5ffb8a741ba9d19bc721cfa0f3b.JPG" alt="">
        </router-link>
        <router-link to="/staffmade" class="main">
            <span>왓챠 익스클루시브</span>
            <h4>애프터 양</h4>
            <p>'파친코'코고나다 감독의 눈부시게 아름다운 SF</p>
            <img src="https://image.imnews.imbc.com/news/2017/culture/article/__icsFiles/afieldfile/2017/11/11/20.jpg" alt="">
        </router-link>
        <router-link to="/staffmade" class="main">
            <span>스테디셀러</span>
            <h4>왓챠 최고 인기작</h4>
            <p>명량, 탑건 등 지금 가장 많이 보는 작품</p>
            <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzAzMjBfMTA0/MDAxNDkwMDE2NjQ4NjM5.GjXx9x-uvwaxrWJ0KV4vlCOmMytTO9xSdFIQL6h6p6Ag.GjPm1-8tbqhN4XZ3e4lIaBfKI-QvDtbGvjteZFVqRtAg.JPEG.zjvl851/IMG_1664.jpg?type=w800" alt="">
        </router-link>
        <router-link to="/staffmade" class="main">
            <span>베스트 셀렉션</span>
            <h4>왓챠 익스클루시브</h4>
            <p>왓챠가 발굴한 소문난 띵작들</p>
            <img src="https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2Faad0b5ffb8a741ba9d19bc721cfa0f3b.JPG" alt="">
        </router-link>
        <router-link to="/staffmade" class="main">
            <span>왓챠 익스클루시브</span>
            <h4>애프터 양</h4>
            <p>'파친코'코고나다 감독의 눈부시게 아름다운 SF</p>
            <img src="https://image.imnews.imbc.com/news/2017/culture/article/__icsFiles/afieldfile/2017/11/11/20.jpg" alt="">
        </router-link>
    </VueHorizontal>
</template>

<script>
export default {
setup(){
    
},
components:{
}
}
</script>

<style lang="scss" scoped>
.vh{
    margin-left: 40px;
    margin-right: 40px;
    .main{
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-right: 10px;
        text-decoration: none;
        span{
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            color: white;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            
        }
        h4{
            font-size: 20px;
            font-weight: 700;
            line-height: 26px;
            color: white;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0;
        }
        p{
            font-size: 18px;
            font-weight: 400;
            line-height: 24px;
            color: rgb(186, 186, 193);
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0;
        }
        img{
            width: 419px;
            height: 235px;
            border-radius: 5px;
        }
        img:hover{
            background: black;
            opacity: 50%;
        }
    }
}
</style>