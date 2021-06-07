// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../src/assets/theme/index.css'//element自定义主题文件
import Vue from 'vue'
import App from './App'
import router from './router'
import {Pagination,Carousel,CarouselItem,Button} from 'element-ui';
import axios from 'axios'
import "../src/base/js/quill.snow.css"
Vue.config.productionTip = false
// 配置请求的跟路径
axios.defaults.baseURL = 'http://8.131.83.90:8086'

// 配置axios
Vue.prototype.$http = axios
Vue.prototype.$host = 'http://8.131.83.90:8086'
// 配置moment
// import moment from 'moment'
// Vue.prototype.$moment = moment
// moment.locale('zh-cn') 

// 使用elementui
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
