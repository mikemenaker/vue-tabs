import TabsComp from './Components/tabs.vue'
import TabComp from './Components/tab.vue'

const Tabs = {
    install(Vue, options = {}) {        
        Vue.component('tab', TabComp)
        Vue.component('tabs', TabsComp)
    },
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Tabs);
}

window.Tabs = Tabs

export { Tabs }
export default Tabs
