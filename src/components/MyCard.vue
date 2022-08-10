<!--Most Use Card in LibraryView and WatchedView -->
<template>
  <div class="mycard">
        <router-link to="/content" class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg" alt="">
            <span class="title">좋좋소</span>
            <span class="type">TV 프로그램</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.mycard{
    margin-left: 40px;
    .card{
        display: flex;
        flex-direction: column;
        justify-content: left;
        text-decoration: none;
        img{
            width: 186px;
            height: 275px;
            margin-bottom: 3px;
            border-radius: 5px; 
            transition: 0s width height;
        }
        img:hover{
            width: 200px;
            height: 300px;
            background: black;
            opacity: 50%;
            transition-delay:0.5s;
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
    }
}

</style>