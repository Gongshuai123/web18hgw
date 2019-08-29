
import taurusfirst from './taurusfirst'
import darwer from './darwer'
import webCollapse from './webCollapse/index.js'
import webCollapseItem from './webCollapse/webCollapse-Item/index.js'
const components = [taurusfirst,darwer,webCollapse,webCollapseItem]  

const install = function (Vue) {
    if(install.installed) return
    components.map(component => Vue.component(component.name,component))
}

if (typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {

install,
darwer,
taurusfirst,
webCollapse,
webCollapseItem
}