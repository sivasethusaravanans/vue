<template>
  <div>
    <v-container
      style="
        background-color: rgb(225, 225, 212);
        padding: 20px;
        justify-content: space-around;
      "
    >
      <v-column>
        <h1>Dashboard</h1>
        <v-container></v-container>
        <h5>Select a title for detailed analysis</h5>
      </v-column>
    </v-container>
    <v-tabs v-model="tab">
      <v-tab v-for="(tabItem, index) in tabs" :key="index">
        {{ tabItem.name }}
      </v-tab>
      <v-tab-item v-for="(tabItem, index) in tabs" :key="index">
        <v-card v-if="tabItem.name === 'Single Select'">
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-select
              v-model="selectedSingleCity"
              :items="cityNames"
              label="Select a City"
              @change="fetchWeatherForCity(selectedSingleCity)"
            ></v-select>
            
            <v-card v-if="selectedSingleCity !== null">
              <v-card-title>{{ selectedSingleCity }}</v-card-title>
              <v-card-text
                v-if="isWeatherDataComplete(selectedSingleCityWeather)"
              >
                <p>
                  Temperature:
                  {{
                    selectedSingleCityWeather.main &&
                    kelvinToCelsius(selectedSingleCityWeather.main.temp)
                  }}°C
                </p>
                <p>
                  Description:
                  {{
                    selectedSingleCityWeather.weather &&
                    selectedSingleCityWeather.weather[0].description
                  }}
                </p>
          

                <!-- Display other weather information as needed -->
              </v-card-text>
              <v-card-text v-else>
                <p>Weather data incomplete or unavailable.</p>
              </v-card-text>
              <v-card>
                  </v-card>
            </v-card>
            
            <v-card v-else>
              <p v-if="selectedSingleCity !== null">Weather data loading...</p>
              <p v-else>No city selected.</p>
            </v-card>
            <v-card>
         
      </v-card>
      
          </v-col>
          <v-card><canvas :ref="'myChart' + index" width="400" height="400"></canvas></v-card>
          

        </v-card>

        <v-card v-else-if="tabItem.name === 'Multiple Select'">
          <v-container>
            <v-select
              v-model="selectedMultipleCities"
              :items="cityNames"
              label="Select Cities"
              multiple
              :style="{ width: '50%' }"
            ></v-select>
            <v-row v-if="selectedMultipleCities.length > 0">
              <v-col
                v-for="(city, index) in selectedMultipleCities"
                :key="index"
                cols="12"
                sm="12"
                md="6"
                lg="6"
              >
                <v-card
                  v-if="getWeatherData(city)"
                  class="single-select-card-style"
                >
                  <v-card-title>{{ city }}</v-card-title>
                  <v-card-text
                    v-if="isWeatherDataComplete(getWeatherData(city))"
                  >
                    <p>
                      Temperature:
                      {{
                        getWeatherData(city).main &&
                        kelvinToCelsius(getWeatherData(city).main.temp)
                      }}°C
                    </p>
                    <p>
                      Description:
                      {{
                        getWeatherData(city).weather &&
                        getWeatherData(city).weather[0].description
                      }}
                    </p>
                  </v-card-text>
                  <v-card-text v-else>
                    <p>Weather data incomplete or unavailable.</p>
                  </v-card-text>
                </v-card>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  data() {
    return {
      tabs: [{ name: 'Single Select' }, { name: 'Multiple Select' }],
      cities: [
        { name: 'Chennai', weatherData: null },
        { name: 'Bengaluru', weatherData: null },
        { name: 'New Delhi', weatherData: null },
      ],
      apiKey: '2c72f5e663805f54c9e77f860f692b64', // Your OpenWeatherMap API key
      tab: null,
      selectedSingleCity: 'Chennai',
      selectedSingleCityWeather: null,
      selectedMultipleCities: [],
    };
  },
  mounted() {
    this.fetchWeatherForCity(this.selectedSingleCity);
  },
  computed: {
    cityNames() {
      return this.cities.map((city) => city.name);
    },
  },
  watch: {
    selectedMultipleCities: {
      handler(newVal) {
        newVal.forEach((city, index) => {
          this.fetchWeatherForCity(city, index);
        });
      },
      deep: true,
    },
    selectedSingleCity: {
      handler(newVal) {
        if (newVal) {
          this.fetchWeatherForCity(newVal, 0);
        } else {
          this.selectedSingleCityWeather = null;
        }
      },
    },
  },
  methods: {
    renderChart(weatherData, chartIndex) {
    
const chartId = 'myChart' + chartIndex;
    const canvas = this.$refs[chartId][0];

    // Destroy existing chart if it exists
    const existingChart = canvas.chart;
    if (existingChart) {
      existingChart.destroy();
    }
  const numberOfDays = 20;
  const hoursPerDay = 24;
  const totalHours = weatherData.hourly.time.length;

  // Calculate the starting index for the last 10 days
  const startIndex = totalHours - numberOfDays * hoursPerDay;

  // Extract one entry per day
  const slicedTime = [];
  const slicedTemperature = [];

  for (let i = startIndex; i < totalHours; i += hoursPerDay) {
    slicedTime.push(weatherData.hourly.time[i]);
    slicedTemperature.push(weatherData.hourly.temperature_2m[i]);
  }

  const data = {
    labels: slicedTime,
    datasets: [
      {
        label: 'Temperature (°C)',
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: slicedTemperature,
      },
    ],
  };

const ctx = canvas.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Attach the newly created chart to the canvas for later reference
    canvas.chart = newChart;
  },



 async fetchWeatherForCity(city, chartIndex) {
  const selectedCity = this.cities.find((c) => c.name === city);
  let response2 = null;

  try {
    if (selectedCity && !selectedCity.weatherData) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.name}&appid=${this.apiKey}`
      );

      response2 = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${response.data.coord.lat}&longitude=${response.data.coord.lon}&past_days=20&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );

      if (
        response.data &&
        response.data.weather &&
        response.data.weather.length > 0
      ) {
        selectedCity.weatherData = response.data;

        if (this.selectedSingleCity === selectedCity.name) {
          this.selectedSingleCityWeather = selectedCity.weatherData;
          this.$nextTick(() => this.renderChart(response2.data, 0));
        }
      } else {
        console.error('Incomplete weather data received:', response.data);
      }

    } else {
      this.selectedSingleCityWeather = selectedCity.weatherData;
      this.$nextTick(() => this.renderChart(response2.data, chartIndex));
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
},



    getWeatherData(city) {
      return this.cities.find((c) => c.name === city)?.weatherData || null;
    },

    isWeatherDataComplete(weatherData) {
      return (
        weatherData &&
        weatherData.weather &&
        Array.isArray(weatherData.weather) &&
        weatherData.weather.length > 0
      );
    },
    kelvinToCelsius(kelvin) {
      return Math.round(kelvin - 273.15);
    },
  },
};
</script>

<style>
.chart-container {
  width: 200px;
  height: 400px;
  margin: 10px;
}

.chart-row {
  justify-content: space-between;
  display: flex;
  margin: 10px;
}