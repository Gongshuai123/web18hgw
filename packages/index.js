<<<<<<< HEAD
import taurusfirst from './taurusfirst'
const components = [
    taurusfirst
=======
import darwer from './darwer'
const components=[
    darwer
>>>>>>> 9c9261e6a072cc367f12b8825638dfca01b1d672
]

const install = function (Vue) {
    if(install.installed) return
    components.map(component => Vue.component(component.name,component))
}

if (typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
<<<<<<< HEAD
    taurusfirst
=======
    darwer
>>>>>>> 9c9261e6a072cc367f12b8825638dfca01b1d672
}