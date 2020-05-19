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

  * {
    box-sizing: border-box;
  }

  .header {
    text-align: justify;

    .title {
      position: relative;
    }

    span {
      display: none;
      font-size: 4em;
      color: rgba(217, 4, 39, 0.26);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -20px;
      opacity: 0.5;

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
