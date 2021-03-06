import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


/*
* 1. 发  get  普通 请求
* */

axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then((res) => {
  console.log('111111111111111', res);
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  method: 'get',
  // 专门针对 get 请求的 参数拼接
  param: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log('2222222222222222', res);
})
