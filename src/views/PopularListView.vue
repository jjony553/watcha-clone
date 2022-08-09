<template>
  <div class="popular-list">
        <h1>인기</h1>
        <div class="divider"></div>
        <ul>
            <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
                <li class="card">
                <img src="https://do6ll9a75gxk6.cloudfront.net/images/og.84e274ba21ac6d47d8ad.png" alt="">
            </li>
    
        </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.popular-list{
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
        gap: 5px 5px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-template-rows: auto auto auto auto;
        list-style-type: none;
        
        .card{
        display: list-item;
            img{
            width: 200px;
            height: 200px;
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