<!-- src/components/Contact.vue -->
<template>
    <div>
      <h2>Contact</h2>
      <p>Email: {{ contactEmail }}</p>
      <p>Phone: {{ contactPhone }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contactEmail: "info@rollsroyce.com",
        contactPhone: "+1 123-456-7890",
      };
    },
  };
  </script>
  