<template>
    <div>
      <canvas ref="myChart"></canvas>
    </div>
  </template>
  

  <script>
  import PieChart from './Chart1.vue'; // Correct import statement
  
  export default {
    name: "App1",
    components:{
      PieChart
    }
     
  };
  </script>