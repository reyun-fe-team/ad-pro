// examples/main.js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import ADPro from '../packages'
// import ADPro from 'ad-pro'
// import 'ad-pro/lib/ad-pro.css'

// 注册组件库
Vue.use(ADPro)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')