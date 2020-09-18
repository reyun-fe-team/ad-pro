# [AD-Pro](http://www.alexshan.com/) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) 

description": "An enterprise-class UI design language and Vue UI library with a set of high-quality Vue components, focus on AD industry


## 使用 npm 或 yarn 安装 

```sh
npm i ad-pro -S
```

```sh
yarn add ad-pro
```

## 引入 `ad-pro` 

// main.js

```js
import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import ADPro from 'ad-pro'
import 'ad-pro/lib/ad-pro.css'

// 注册组件库
Vue.use(ADPro)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

在你所需要的页面，引入所需组件即可：

```vue
<template>
  <div>
    <Button primary size='large' @onClick='handleClick'>AD Pro</Button>
  </div>
</template>

<script>
import { Button } from 'ad-pro'

export default {
  name: 'Demo',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    handleClick() {
      console.log("handleClick");
    }
  },
  computed: {},
  components: {
    Button
  },
}
</script>

<style scoped lang="less">
</style>

```

## 运行组件 Demo

```sh
git clone https://github.com/reyun-fe-team/ad-pro.git

npm i
npm run storybook
```