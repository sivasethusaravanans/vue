// index.js
import { createRouter, createWebHashHistory } from 'vue-router';
import Overview from '@/components/Overview.vue';
import Specifications from '@/components/Specifications.vue';
import Gallery from '@/components/Gallery.vue';
import Contact from '@/components/Contact.vue';
import Chart from '@/components/Chart.vue'; // This is the route for "/Chart"

const routes = [
  { path: '/', component: Overview },
  { path: '/specifications', component: Specifications },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
  { path: '/Chart', component: Chart, name: 'Chart' }, // This is the route for "/Chart"
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
