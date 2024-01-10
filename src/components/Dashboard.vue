<template>
  <div>
    <v-container
      style="
        background-color: rgb(225, 225, 212);
        padding: 20px;
        justify-content: space-around;
      "
    >
      <v-v-column>
        <h1>Dashboard</h1>
        <v-container></v-container>
        <h5>Select a title for deatiled analysis</h5>
      </v-v-column>
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
                    selectedSingleCityWeather.main.temp
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
                        getWeatherData(city).main.temp
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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tabs: [{ name: 'Single Select' }, { name: 'Multiple Select' }],
      cities: [
        { name: 'London', weatherData: null },
        { name: 'New York', weatherData: null },
        // Add more cities as needed
      ],
      apiKey: '2c72f5e663805f54c9e77f860f692b64', // Your OpenWeatherMap API key
      tab: null,
      selectedSingleCity: null,
      selectedSingleCityWeather: null,
      selectedMultipleCities: [],
    };
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
            }
          } else {
            console.error('Incomplete weather data received:', response.data);
          }
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      } else {
        this.selectedSingleCityWeather = selectedCity.weatherData;
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
  },
};
</script>
