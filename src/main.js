import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';

import '@/assets/styles/index.scss';

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
