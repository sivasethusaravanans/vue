<template>
    <div><h1>Selled car details in india</h1></div>
    <div><h2>Jan-2023 - Sep-2023</h2></div>
    <div>
      <div class="chart-row">
        <div class="chart-container">
          <h3>Jan</h3>
          <canvas ref="myChart1" width="40" height="40"></canvas>
        </div>
        <div class="chart-container">
          <h3>Feb</h3>
          <canvas ref="myChart2" width="40" height="40"></canvas>
        </div>
        <div class="chart-container">
          <h3>Mar</h3>
          <canvas ref="myChart3" width="40" height="40"></canvas>
        </div>
      </div>
  
      <div class="chart-row">
        <div class="chart-container">
          <h3>Apr</h3>
          <canvas ref="myChart4" width="40" height="40"></canvas>
        </div>
        <div class="chart-container">
          <h3>May</h3>
          <canvas ref="myChart5" width="40" height="40"></canvas>
        </div>
        <div class="chart-container">
          <h3>Jun</h3>
          <canvas ref="myChart6" width="40" height="40"></canvas>
        </div>
      </div>
  
      <div class="chart-row">
        <div class="chart-container">
          <h3>Jul</h3>
          <canvas ref="myChart7" width="40" height="40"></canvas>
        </div>
        <div class="chart-container">
          <h3>Aug</h3>
          <canvas ref="myChart8" width="40" height="40"></canvas>
        </div>
        <div class="chart-container">
          <h3>Sep</h3>
          <canvas ref="myChart9" width="40" height="40"></canvas>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  export default {
    name: 'Chart1',
  
    mounted() {
      this.renderCharts();
    },
    methods: {
      renderCharts() {
        // Loop to create and render 9 charts
        for (let i = 1; i <= 9; i++) {
          const data = {
            labels: [`Susuki `, `Tata `, `Honda  `, `Hundai  `, `Kia`],
            datasets: [
              {
                label: `My Pie Chart ${i}`,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
                data: [10, 30, 20, 15, 25],
              },
            ],
          };
  
          const ctx = this.$refs[`myChart${i}`].getContext('2d');
          new Chart(ctx, {
                
            type: 'pie',
            data: data,
            options: {
              responsive: true,
              maintainAspectRatio: false,
              
              // Add other options as needed
            },
          });
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .chart-container {
    width: 200px;
    height: 400px; /* Adjust height as needed */
    margin: 10px; /* Add margin between containers if needed */
  }
  
  .chart-row {
    justify-content: space-between;
    display: flex;
    margin: 10px; /* Add margin between rows if needed */
  }
  /* Add any component-specific styles here */
  </style>
  