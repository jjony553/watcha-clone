<template>
  <div class="card">
    <div v-if="isEvaluate" class="evaluate" @mouseleave="didEvaluate">
        <span>브로커</span>
        <p>2022</p>
        <span>star</span>
        <br>
        <button class="collect">
            <span class="material-symbols-outlined">
                add_circle
            </span>
            <p>담아두기</p>
        </button>

    </div>
    <img v-else src="https://upload.wikimedia.org/wikipedia/commons/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg" alt="" @mouseover="doEvaluate"/>
  </div>
</template>

<script>
export default {
setup(){
    let isEvaluate = true
    let doEvaluate = function() {
        console.log(isEvaluate)
        isEvaluate = true
    }
    let didEvaluate = function() {
        console.log(isEvaluate)
        isEvaluate = false
    }

    return{
        isEvaluate,
        doEvaluate,
        didEvaluate
    }
}
}
</script>

<style lang="scss" scoped>
.card{
  width: 100%;
    .evaluate{
        width: 230px;
        height: 100%;
        background: linear-gradient(#FFC0CB 50%, #00FFFF 50%);
        opacity: 10%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-content: center;
        span{
            color:white;
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-content: center;
        }
        p{
            color: #ffffff99;
            font-size: 11px;
            display: flex;
            justify-content: center;
            align-content: center;
        }
        br{
            background: #ffffff99;
            display: flex;
            justify-content: center;
            align-content: center;
        }
        .collect{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            background: transparent;
            span{
                color:#ffffb3;
                font-size: 12px;
            }
            p{
                color:#ffffb3;
                font-size: 14px;
            }
        }
    }
    img{
        width: 230px;
        height: 340px;
        margin-right: 40px;
        border: 1px solid transparent;
    }
    img:hover{
        border: 1px solid #bdbdbd;
    }
}
</style>