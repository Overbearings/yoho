// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import '@/assets/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'lib-flexible'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/error.jpg',
  loading: 'static/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false
// Use是什么
// 插件 install，就会执行VueAwesomeSwiper中的install方法。
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
