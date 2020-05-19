<template>
     <div>
        <img :src="require(`../assets/images/${article.title}.jpeg`)">
        <h3>{{article.title}}</h3>
        <p>{{article.paragraphe}}</p>
        <a>{{buttonText}}</a>
    </div>
</template>

<script>
export default {
    props: {
    article: Object,
    buttonText: String,
    },
}
</script>

<style scoped lang="scss">
div {
    width: 25%;
    img{
        width: 100%;
    }
    h3,p,a {
        margin: 0;
    }

    h3 {
        margin-bottom: 8px;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
    }

    p {
        margin-bottom: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: justify;
    }

    a {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: none;
        color: #D90429;
        transition: 0.3s;
        cursor: pointer;
        &:hover{
            border-bottom: 2px #D90429 solid
        }
    }
}
</style>