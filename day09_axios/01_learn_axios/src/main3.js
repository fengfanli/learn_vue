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
* 3. axios 设置超时时间和 基本URL
* */

axios.all([axios({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000,
  url: '/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  param: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1, res2) => {
  console.log('6666666666666666666', res1)
  console.log('7777777777777777777', res2)
}))

