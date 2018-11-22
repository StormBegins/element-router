import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router.js'


Vue.config.productionTip = false

let gstore = {
};

new Vue({
    data: {
        store: gstore
    },
    router,
    render: h => h(App)
}).$mount('#app')
