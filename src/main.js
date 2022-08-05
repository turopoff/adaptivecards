import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

import AdaptiveCards from '@madewithcards/adaptivecards-vue'
import '@madewithcards/adaptivecards-vue/dist/adaptivecards-vue.css'
Vue.use(AdaptiveCards);


new Vue({
  render: h => h(App),
}).$mount('#app')
