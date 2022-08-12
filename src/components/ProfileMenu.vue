<template>
    <ul class="menu">
        <li>키즈</li>
        <li>새 프로필</li>
        <div class="divider"></div>
        <li>프로필 편집</li>
        <div class="divider"></div>
        <li>설정</li>
        <li>공지사항</li>
        <li>평가하기</li>
        <li>초대하기</li>
        <li>고객센터</li>
        <li>로그아웃</li>
    </ul>
</template>

<script>
</script>

<style lang="scss" scoped>
.menu{
    position: fixed;
    right: 10px;
    background: #28292a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    list-style: none;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    li{ 
        display: flex;
        justify-content: start;
        align-items: center;
        width: 180px;
        height: 40px;
        color: white;
        font-size: 14px;
        font-weight: 600;
        margin-left: 16px;
    }
    .divider{
        background: #bdbdbd;
        height: 1px;
        margin:  0px 0px 0 0px;
    }
}
</style>