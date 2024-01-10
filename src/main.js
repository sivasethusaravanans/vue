import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  theme:{
    defaultTheme : "white"
  },
  vuetify,
  router, // Add this line to use the router
  render: (h) => h(App),
}).$mount('#app');
