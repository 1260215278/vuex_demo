<template>
  <div class="hello">
    <h1>{{ cutten }}</h1>
    <input type="text" name v-model.number="mony" id placeholder="点击" />
    <button @click="setStore()">钱+1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
	name: "HelloWorld",
	props: {
		msg: String
	},
	data() {
		return {
			// cutten:0,
			mony: 0
		}
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
					console.log(res)
				})
		},
		getStore() {
			this.cutten = this.$store.state.cutten
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
