import Vue from 'vue'
import axios from 'axios'
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'

import App from './App'
import router from './router'
import store from './store'
import QrcodeVue from 'qrcode.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(contentmenu)
Vue.component('qrcode-vue', QrcodeVue);
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.courses = [
    {name: '准备', time: 0, pk: ['老张','老李']},{name: '准备', time: 0, pk: ['老张1','老李1']},{name: '准备', time: 0, pk: ['老张2','老李2']}
]
Vue.prototype.globalpk = [{
    name: '', view: ''
}, {
    name: '', view: ''
}]
/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    store,
    template: '<App/>'
}).$mount('#app')
