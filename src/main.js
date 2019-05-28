// 入口文件
import Vue from 'vue'
// 导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入 { Mint-UI } 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

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
