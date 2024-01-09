// main.js or index.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home }, // Import and define your Home component
  { path: '/management', component: Management }, // Import and define your Management component
  { path: '/settings', component: Settings }, // Import and define your Settings component
  { path: '/create', component: Create }, // Import and define your Create component
  { path: '/read', component: Read }, // Import and define your Read component
  { path: '/update', component: Update }, // Import and define your Update component
  { path: '/delete', component: Delete }, // Import and define your Delete component
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
