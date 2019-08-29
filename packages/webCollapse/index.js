//这个index.js是管理 huangButtons.js 的
import webCollapse from './src/webCollapse.vue'
webCollapse.install = function (Vue) {
    Vue.component(webCollapse.name,webCollapse)
}

export default webCollapse