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
}
</style>