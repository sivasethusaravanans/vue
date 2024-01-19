import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbVDO61518teCzXHsSVPOZYbvl0jjNmeY",
  authDomain: "as-trail-app.firebaseapp.com",
  projectId: "as-trail-app",
  storageBucket: "as-trail-app.appspot.com",
  messagingSenderId: "133753687252",
  appId: "1:133753687252:web:79a86160b0b3839b26bf41",
  measurementId: "G-BB7WYPNFW2"
};

// Initialize Firebase
  initializeApp(firebaseConfig);
 
new Vue({
  theme:{
    defaultTheme : "white"
  },
  vuetify,
  router, // Add this line to use the router
  render: (h) => h(App),
}).$mount('#app');
