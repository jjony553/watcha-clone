<template>
<div class="tag-suggestions">
<h1>{{title}}</h1>
<div class="divider"></div>
<ul>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
    <li class="card">
        <p>type</p>
        <img src="https://thumbs.dreamstime.com/b/purple-black-checkered-flag-racing-background-texture-d-illustration-banner-extreme-widescreen-ratio-173954326.jpg" alt="">
    </li>
</ul>
</div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
setup () {
    const slug = useRoute().params.slug
    let title = ref("")

    if(slug == "genres"){
        title = "추천 장르"
    }else if(slug == "tags"){
        title = "추천 태그"
    }
    else if(slug == "nations"){
        title = "국가"
    }
    return {
        title
    }
}
}
</script>

<style lang="scss" scoped>
.tag-suggestions{
    width: var(--main-width);
    h1{
    color: white;
    padding: 40px 0 0 35px;
    }
    .divider{
            height: 1px;
            background: #1b1c1d;
            margin: 0 16px 0 16px;
    }
    ul{
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(219px, 1fr));
        grid-template-rows: auto auto auto auto;
        list-style-type: none;
        .card{
        display: list-item;
        position: relative;
            p{
            position: absolute;
            top: -10px;
            left: 15px;
            color:white;
            font-size: 16px;
            }
            img{
            width: 210px;
            height: 120px;
            border-radius: 5px;
            }
            img:hover{
                background: black;
                opacity: 50%;
            }
        }
    }
}

</style>