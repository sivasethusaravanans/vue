<!-- src/components/Specifications.vue -->
<template>
    <div>
      <h2>Specifications</h2>
      <ul>
        <li v-for="spec in specifications" :key="spec.id">{{ spec.name }}: {{ spec.value }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        specifications: [
          { id: 1, name: "Engine", value: "V12 Twin Turbo" },
          { id: 2, name: "Horsepower", value: "563 hp" },
          { id: 3, name: "Top Speed", value: "155 mph" },
        ],
      };
    },
  };
  </script>
  