<!-- Dashboard.vue -->
<template>
  <div>
    <h1>Dashboard</h1>
    <BarChart />
    <!-- Add more components as needed -->
  </div>
</template>

<script>
import BarChart from '@/components/Chart.vue'; // Adjust the path based on your project structure

export default {
  components: {
    BarChart,
    // Add more components as needed
  },
};
</script>

<style scoped>
/* Add any dashboard-specific styles here */
</style>
