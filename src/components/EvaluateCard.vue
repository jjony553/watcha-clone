<template>
  <div class="card">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg" alt="" @mouseover="isEvaluate = true" @mouseout="isEvaluate = false"/>
        <div v-show="isEvaluate" class="evaluate" @mouseover="isEvaluate = true" @mouseout="isEvaluate = false">
        <span>브로커</span>
        <p>2022</p>
        <div class="star-rating">
            <input type="radio" id="5-stars" name="rating" value="5" />
            <label for="5-stars" class="star pr-4">★</label>
            <input type="radio" id="4-stars" name="rating" value="4" />
            <label for="4-stars" class="star">★</label>
            <input type="radio" id="3-stars" name="rating" value="3" />
            <label for="3-stars" class="star">★</label>
            <input type="radio" id="2-stars" name="rating" value="2" />
            <label for="2-stars" class="star">★</label>
            <input type="radio" id="1-star" name="rating" value="1"  />
            <label for="1-star" class="star">★</label>
        </div>
        <div class="divider"></div>
        <button class="collect">
            <span class="material-symbols-outlined">
                add_circle
            </span>
            <p>담아두기</p>
        </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
setup(){
    let isEvaluate = ref(false)

    return{
        isEvaluate,
    }
}
}
</script>

<style lang="scss" scoped>
.card{
  width: 100%;
  position: relative;
    .evaluate{
        position: absolute;
        width: 230px;
        height: 160px;
        background: black;
        opacity: 80%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        inset: 0;
        border: 1px solid transparent;
        margin-top: 180px;
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
        .divider{
            background: #bdbdbd;
            height: 1px;
            margin:  16px 25px 0 25px;
        }
        .collect{
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background: transparent;
            span{
                color:rgba(255, 255, 255, 0.7);
                font-size: 12px;
                margin-right: 5px;
            }
            p{
                color:rgba(255, 255, 255, 0.7);
                font-size: 14px;
                margin: 0;
                font-weight: 600;
            }
        }
        .collect:hover{
            background: #bdbdbd;
            cursor: pointer;
        }

        .star-rating {
        display: flex;
        flex-direction: row-reverse;
        font-size: 2.25rem;
        line-height: 2.5rem;
        justify-content: center;
        text-align: center;

        input {
        display: none;
        }

        label {
        -webkit-text-fill-color: #4A494D; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #4A494D;
        cursor: pointer;
        }

        label:hover,
        .star-rating label:hover ~ label {
        -webkit-text-fill-color: #ffb763
        }
        :checked ~ label {
        -webkit-text-fill-color: #ffb763
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