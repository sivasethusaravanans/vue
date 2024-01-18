<template>
  <div>
    <div><h1>Sold Car Details in India</h1></div>
    <div><h2>Jan-2023 - Sep-2023</h2></div>
    
    <div class="chart-row">
      <div v-for="i in 9" :key="i" class="chart-container">
        <h3>{{ monthNames[i-1] }}</h3>
        <canvas :ref="'myChart' + i" width="400" height="400"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js';

export default {
  name: 'Chart1',
components:{

},
  data() {
    return {
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    };
  },

  mounted() {
    this.renderCharts();
  },

  methods: {
    renderCharts() {
      for (let i = 1; i <= 9; i++) {
        const data = {
          labels: ['Susuki', 'Tata', 'Honda', 'Hundai', 'Kia'],
          datasets: [
            {
              label: `My Chart ${i}`,
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
              data: [i * 10, i * 30, i * 20, i * 15, i * 25],
            },
          ],
        };

        const ctx = this.$refs[`myChart${i}`].getContext('2d');
        new Chart(ctx, {
          type: 'bar', // You can customize the chart type here
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
  border-radius: 30px;
  padding: 20px;
  width: 400px;
  height: 400px;
  margin: 10px;
  background-color: lightblue;
}

.chart-row {
  display: flex;
  margin: 50px;
  justify-content: space-around;
}
</style>
