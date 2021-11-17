import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  // render (createElement) {
  //     return createElement(App)
  // },
  // h는 createElement의 축약형이다
  render: h => h(App)
})
