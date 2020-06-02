import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './utils/store'
import animated from 'animate.css'
// import antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  apis from './apis.js'
Vue.config.productionTip = false



if (
  '-ms-scroll-limit' in document.documentElement.style &&
  '-ms-ime-align' in document.documentElement.style
) { // detect it's IE11
  window.addEventListener("hashchange", function (event) {
    var currentPath = window.location.hash.slice(1);
    if (store.state.route.path !== currentPath) {
      router.push(currentPath)
    }
  }, false)

}

Vue.prototype.$apis=apis
Vue.use(ElementUI)
// Vue.use(antd)
Vue.use(animated)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


