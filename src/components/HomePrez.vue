<template>
  <!-- <div class="hello">
    <h1 v-if="isShow">{{ msg }}</h1>
    <h1 v-else>NOT SHOWED</h1>
    <h1 @click="toggleShow()"> {{ isShow }}</h1>
    <span @click="handleCount()">{{ count }}</span>
    <p>{{ testComputed }}</p>
  </div> -->
  <div class="home">
    <img src="../assets/images/home.jpg">
    <div class="home__yokai">
      <h2>Qu’est ce qu’un Yokai ?</h2>
      <span>モンスター</span>
      <p>Monstre, créature, esprit, fantôme, objet, démon où tout autre apparition étrange souvent malfaisant ou simplement malicieux du folklore japonais qui incarne les obsessions, les vices, les craintes, les mal-être, les blessures, les rancoeurs et tout état émotionnel compliqué des humains. Ils représentent également des phénomènes naturels, des objets créés par les hommes ou des éléments naturels inanimés (rocher…).</p>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  // data() {
  //   return {
  //     isShow: false,
  //     count: 0
  //   }
  // },
  // computed: {
  //   testComputed() {
  //     if (this.count > 0) {
  //       this.$emit('titleUpdated', 'Yokai')
  //       return 'zerooo'
  //     } else {
  //       this.$emit('titleUpdated', 'Hello')
  //       return 'positif'
  //     }
  //   }
  // },
  // created () {
  //   console.log('created')
  // },
  // mounted () {
  //   console.log('ajouté au DOM')
  // },
  // methods: {
  //   toggleShow () {
  //     this.isShow = !this.isShow
  //   },
  //   handleCount () {
  //     if (this.count > 2) this.count = 0
  //     else this.count++
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
