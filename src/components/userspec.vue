<template height="100px">
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {{ username }}!</p>
      <router-link to="/profile">View Profile</router-link>
      <router-link to="/settings">Settings</router-link>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    name:"AboutPage",
    computed: {
      
    },
    methods: {
      logout() {
        // Perform logout logic and redirect to the login screen
      }
    }
  };
  </script>
  