// 导入组件，组件必须声明 name
import AdButton from './src'

// 为组件提供 install 安装方法，供按需引入
AdButton.install = function (Vue) {
  Vue.component(AdButton.name, AdButton)
}

// 导出组件
export default AdButton