<template>
    <div class="header" :style="{width: width}">
      <div class="title">
        <h1>{{ title }}</h1>
        <span>{{ textBackground }}</span>
      </div>
      <p>{{paragraphe}}</p>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    textBackground: String,
    paragraphe: String,
    width: {
      type: String,
      default: '100%'
    }
  },
}
</script>

<style scoped lang="scss">
 @import '../assets/styles/style.scss';


  .header {

    .title {
      position: relative;
      z-index: 1;
    }

    p {
      position: relative;
      z-index: 1;
    }

    span {
      display: none;
      font-size: 4em;
      color: $pink;
      position: absolute;
      z-index: -1;
      top: 50%;
      transform: translateY(-50%);
      left: -20px;

      @media screen and (min-width: 700px) {
        display: block;
      }

      @media screen and (min-width: 950px) {
        display: block;
        font-size: 6em;
      }
    }
  }

</style>
