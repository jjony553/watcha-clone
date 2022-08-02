<template>
  <div class="library">
    <h3>담아둔 콘텐츠</h3>
    <div class="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/IU_posing_for_Marie_Claire_Korea_March_2022_issue_03.jpg" alt="">
        <span class="title">좋좋소</span>
        <span class="type">TV 프로그램</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.library{
    margin-left: 40px;
    padding-bottom: 230px;
    h3{
        color:white;
    }
    .card{
        display: flex;
        flex-direction: column;
        justify-content: left;
        img{
            width: 156px;
            height: 230px;
            margin-bottom: 3px;
            border-radius: 5px;
        }
        img:hover{
            background: black;
            opacity: 50%;
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