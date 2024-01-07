import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { provideLicense } from '@syncfusion/ej2-vue-base';
//  provideLicense('Ngo9BigBOggjHTQxAR8/V1NAaF5cWWdCfExyWmFZfVpgcl9FZVZQRGYuP1ZhSXxXdkRjXH9ZcXRXQmRbWUA=');
const app = createApp(App);
app.use(router);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy6iyE34w5oU1tpMQTH_j6pZGn3avlV0Q",
  authDomain: "saravanan-203cd.firebaseapp.com",
  projectId: "saravanan-203cd",
  storageBucket: "saravanan-203cd.appspot.com",
  messagingSenderId: "717852062496",
  appId: "1:717852062496:web:aac1762193f7eb5e0d9d45",
  measurementId: "G-ZT1TR06PPV"
};

// Initialize Firebase
const ap1p = initializeApp(firebaseConfig);
const analytics = getAnalytics(ap1p);
/*Ngo9BigBOggjHTQxAR8/V1NAaF5cWWdCfExyWmFZfVpgcl9FZVZQRGYuP1ZhSXxXdkRjXH9ZcXRXQmRbWUA=*/
app.mount('#app');

