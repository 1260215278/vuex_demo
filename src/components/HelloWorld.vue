<template>
  <div class="hello">
    <h1 class="animate__animated animate__bounce">{{ cutten }}</h1>
    <div class="myH1">kkk</div>
    <input class="input" type="text" name v-model.number="mony" id placeholder="点击" />
    <button class="btn" @click="setStore()">钱+1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      // cutten:0,
      mony: 0
    };
  },
  // computed: mapState({   //第一种方法 但是不够优雅
  //     cutten:'cutten'
  //   }),
  computed: {
    ...mapState({
      cutten: cutten => cutten.cutten
    }),
    ...mapMutations([
      "setSTate" // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ])
    // cutten(){
    //   return this.$store.state.cutten
    // }
  },
  created() {
    // this.getStore()
  },
  methods: {
    setStore() {
      // this.$store.commit("addCutten", this.mony);
      this.$store
        .dispatch("addCutten", {
          cutten: this.mony
        })
        .then(res => {
          // exlint 开发环境下会这样
          // eslint-disable-next-line no-console
          console.log(res);
        });
    },
    getStore() {
      this.cutten = this.$store.state.cutten;
    }
  }
};
</script>
 <style lang="stylus" scoped>
 @import '../compontCss/styuls.styl';
</style>

<style  scoped>
.myH1 {
  font-size: 30px;
  height: 100px;
  width: 100px;
  border: 2px solid red;
  text-align: center;
  line-height: 100px;
}
.myH1:hover {
  font-size: 40px;
  height: 200px;
  width: 200px;
  line-height: 200px;
}
.input,
.btn {
  font-size: 28px;
  animation: rubberBand; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}

h3 {
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
}
</style>