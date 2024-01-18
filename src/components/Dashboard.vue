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
        <h5>Select a title for deatiled analysis</h5>
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
            
            </v-card>
            
            <v-card v-else>
              <p v-if="selectedSingleCity !== null">Weather data loading...</p>
              <p v-else>No city selected.</p>
            </v-card>
            <v-card>
        
      </v-card>
          </v-col>
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
                    <!-- Display other weather information as needed -->
                  </v-card-text>
                  <v-card-text v-else>
                    <p>Weather data incomplete or unavailable.</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!-- </v-col> -->
          </v-container>
        </v-card>
       
       
   
  
      </v-tab-item>
    </v-tabs>
    <v-card v-if="selectedSingleCity !== null">
      <canvas ref="myChart1" width="400" height="400"></canvas>

    </v-card>
 
    
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
      citiesTemperatureAndTime:[],
    };


  },
  mounted() {
    // Fetch weather data for the default city when component mounts
    this.fetchWeatherForCity(this.selectedSingleCity);
    this.$nextTick(() => {
    try {
      this.renderChart();
    } catch (error) {
      console.error('Error rendering chart:', error);
    }
  });
    // this.$nextTick(() => {
    
   
  },
  computed: {
    cityNames() {
      return this.cities.map((city) => city.name);
    },
  },
  watch: {
    selectedMultipleCities: {
      handler(newVal) {
        // Fetch weather data for all selected cities
        newVal.forEach((city) => {
          this.fetchWeatherForCity(city);
        });
      },
      deep: true,
    },
    selectedSingleCity: {
      handler(newVal) {
        if (newVal) {
          this.fetchWeatherForCity(newVal);
        } else {
          this.selectedSingleCityWeather = null;
        }
      },
    },
  },
  methods: {
    renderChart() {
      // Loop to create and render 9 charts
      for (let i = 1; i <= 1; i++) {
        const data = {
          labels: [`1-1-2024 `, `2-1-2024 `, `2-1-2024  `, `4-1-2024  `, `5-1-2024`],
          datasets: [
            {
              
              label: `  Celcius`,
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
          type: 'line',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            
            // Add other options as needed
          },
        });
      }
    },
  
    async fetchWeatherForCity(city) {
  const selectedCity = this.cities.find((c) => c.name === city);
  if (selectedCity && !selectedCity.weatherData) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.name}&appid=${this.apiKey}`
      );
      if (
        response.data &&
        response.data.weather &&
        response.data.weather.length > 0
      ) {
        selectedCity.weatherData = response.data;

        if (this.selectedSingleCity === selectedCity.name) {
          this.selectedSingleCityWeather = selectedCity.weatherData;

          const response2 = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${response.data.coord.lat}&longitude=${response.data.coord.lon}&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
          );

          console.log("response2 ", response2.data);
          this.$nextTick(() => {
    try {
      this.renderChart();
    } catch (error) {
      console.error('Error rendering chartkbuvu:', error);
    }
  });
          // Render the chart after fetching the weather data
          //this.renderChart();
        }
      } else {
        console.error('Incomplete weather data received:', response.data);
      }
    } catch (error) {
      console.error('Error fetching weather datah:', error);
    }
  } else {
    this.selectedSingleCityWeather = selectedCity.weatherData;
    // Render the chart if weather data is available
    this.$nextTick(() => {
    try {
      this.renderChart();
    } catch (error) {
      console.error('Error rendering chartkjbhvytc:', error);
    }
  });
   // this.renderChart();
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
      return Math.round(kelvin - 273.15); // Conversion from Kelvin to Celsius
    },
  },
};
</script>
<style>

.chart-container {
  width: 200px;
  height: 400px; /* Adjust height as needed */
  margin: 10px; /* Add margin between containers if needed */
}

.chart-row {
  justify-content: space-between;
  display: flex;
  margin: 10px; /* Add margin between rows if needed */
}</style>