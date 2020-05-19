<template>
  <div class="home">
    <img src="../assets/images/home.jpg">
    <div class="home__yokai">
      <h2>{{ title }}</h2>
      <span>{{ textBackground }}</span>
      <p>{{paragraphe}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      title: String,
      textBackground: String,
      paragraphe: String
  },
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  padding-left: 40px;
  padding-right: 80px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;

  img{
    width: 40%;
    margin-right: 30px;
    object-fit: cover;
  }

  .home__yokai {
    width: 50%;
    text-align: justify;
    position: relative;

    @media screen and (max-width: 675px) {
      span {
        display: none;
      }
    }

    span {
      font-size: 7em;
      color: rgba(217, 4, 39, 0.26);
      position: absolute;
      top: 10px;
      left: -10px;
    }
  }
}
</style>
