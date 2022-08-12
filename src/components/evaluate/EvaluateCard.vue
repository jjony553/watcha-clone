<template>
  <div class="card">
        <div v-for="(movie, index) in movies" :key="movie">
            <img  :src="`${movie.Poster}`" alt="" @mouseover="toggle(index)" @mouseout="isEvaluate = false"/>
            <div v-show="isEvaluate && isActive==index" class="evaluate" @mouseover="isEvaluate = true" @mouseout="isEvaluate = false" >
            <span>{{movie.Title}}</span>
            <p>{{movie.Year}}</p>
            <div class="star-rating" >
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
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
props:{
    movies: Array
},
setup(props){
    let isEvaluate = ref(false)
    let isActive = ref('')


    function toggle (index){
        isEvaluate.value = !isEvaluate.value
        isActive.value = index
    }
    

        return{
            isEvaluate,
            isActive,
            toggle
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    display: grid;
    gap: 5px 5px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-template-rows: auto auto auto auto;
    list-style-type: none;

    div{
        display: flex;

            img{
            width: 230px;
            height: 340px;
            margin-right: 40px;
            border: 1px solid transparent;
            border-radius: 3px;
            position: relative;

            }
            img:hover{
                border: 1px solid #bdbdbd;
            }
            .evaluate{
            width: 230px;
            height: 160px;
            background: black;
            opacity: 80%;
            flex-direction: column;
            display: flex;
            justify-content: center;
            border: 1px solid transparent;
            margin-top: 180px;
            position: absolute;
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

    }
    
}
</style>