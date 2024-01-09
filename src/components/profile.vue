<template height="100%">
    <div>
      <h2>Profile</h2>
      <p>Username: {{ username }}</p>
      <p>Email: {{ email }}</p>
      <button @click="editProfile">Edit Profile</button>
      <h2>Profile</h2>
      <p>Username: {{ username }}</p>
      <p>Email: {{ email }}</p>
      <button @click="editProfile">Edit Profile</button>
      <h2>Profile</h2>
      <p>Username: {{ username }}</p>
      <p>Email: {{ email }}</p>
      <button @click="editProfile">Edit Profile</button>
      <h2>Profile</h2>
      <p>Username: {{ username }}</p>
      <p>Email: {{ email }}</p>
      <button @click="editProfile">Edit Profile</button>
    </div>
  </template>
  
  <script>
  export default {
    name:"ProfileScreen1",
    computed: {
       
       
    },
    methods: {
        name:"ProfileScreen",
      editProfile() {
        // Redirect to the profile edit screen
      }
    }
  };
  </script>
  