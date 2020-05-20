<template>
  <div class="header">
    <img
      v-if="image"
      :src="require(`../assets/images/${image}`)"
      alt="`représentations de différents yokai`"
    />
    <div class="text-section">
      <div class="title-section">
        <h1 class="title">{{ title }}</h1>
        <span class="japanese-text">{{ textBackground }}</span>
      </div>
      <p>{{ paragraph }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    textBackground: String,
    paragraph: String,
    image: String
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/style.scss";

.header {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 850px) {
    flex-direction: row;
  }
}

img {
  order: 1;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 850px) {
    order: unset;
    width: 40%;
    margin-right: 25px;
  }
}

.text-section {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.title-section {
  position: relative;
  line-height: 50px;
  z-index: 1;

  @media screen and (min-width: 450px) {
    line-height: 60px;
  }

  @media screen and (min-width: 500px) {
    line-height: 80px;
  }

  @media screen and (min-width: 875px) {
    line-height: 88px;
  }

  @media screen and (min-width: 1000px) {
    line-height: 100px;
  }

  .japanese-text {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -1;
    color: $pink;
    font-size: 60px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;

    @media screen and (min-width: 450px) {
      font-size: 60px;
    }

    @media screen and (min-width: 500px) {
      font-size: 80px;
    }

    @media screen and (min-width: 875px) {
      font-size: 88px;
    }

    @media screen and (min-width: 1000px) {
      font-size: 100px;
    }
  }
}

p {
  margin: 15px 0 20px 0;
  max-width: 650px;
  z-index: 1;
}
</style>
