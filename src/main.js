// 入口文件
import Vue from 'vue'
// 导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入 vue-router
import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.http.options.root = 'http://localhost:3000'
// 导入格式化时间插件
// import moment from 'moment'
// Vue.filter('dateFormat', function (pattern = "YYYY-MM-DD HH:mm:ss") {
//   return moment(Date.now()).format(pattern)
// })


// 导入 { Mint-UI } 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


// 导入自己的路由
import router from './router'

// 导入 app 根组件
import app from './App.vue'

// 创建实例
const vm = new Vue({
  el: '#app',
  data: {},
  methods: {},
  render: c => c(app),
  router,
})
