<template>
    <v-app>
      <v-container>
        <v-tabs v-model="tab" background-color="#fffde7">
          <v-tab :value="'single'">Single site</v-tab>
          <v-tab :value="'multi'">Multi site</v-tab>
        </v-tabs>
        <v-row v-if="tab === 'single'">
          <v-col>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="selectedItem"
                  label="Select Item"
                  readonly
                  @click="menu = !menu"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-list>
                <v-list-item
                  v-for="item in items"
                  :key="item.id"
                  @click="selectItem(item)"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
  
        <v-row v-else>
          <v-col>
            <v-checkbox
              v-for="item in items"
              :key="item.id"
              v-model="selectedItems"
              :label="item.text"
              :value="item.value"
            ></v-checkbox>
            <v-btn @click="applySelection">Apply</v-btn>
          </v-col>
        </v-row>
  
        <v-row v-if="filteredData.length > 0">
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            v-for="(dataItem, index) in filteredData"
            :key="index"
          >
            <v-card>
              <v-card-title>{{ dataItem.name }}</v-card-title>
              <v-card-text>
                <div>Temperature: {{ kelvinToCelsius(dataItem.main.temp) }}</div>
                <div>Description: {{ dataItem.weather[0].description }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col>
            <div>No data available for the selected option.</div>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tab: null,
        menu: false,
        selectedItem: null,
        selectedItems: [],
        items: [
          { id: 0, text: 'Chennai', value: 'chennai' },
          { id: 1, text: 'Bengaluru', value: 'bengaluru' },
          { id: 2, text: 'Delhi', value: 'delhi' },
        ],
        optionData: {
          chennai: [],
          engaluru: [],
          delhi: [],
        },
        filteredData: [],
      };
    },
    mounted() {
      this.tab = 'single'; // Set the default tab to 'single'
      this.selectedItem = this.items[0].value;
      this.filteredData = this.optionData[this.items[0].value] || [];
      this.fetchWeatherData(this.items[0].value); // Fetch weather data for the default city
    },
    methods: {
      selectItem(item) {
        if (this.tab === 'single') {
          this.selectedItem = item.value;
          this.menu = false; // Close the dropdown after selection
          this.filteredData = this.optionData[item.value] || [];
          this.fetchWeatherData(item.value); // Fetch weather data when a city is selected
        } else {
          // Handle multi-select logic for the 'multi' tab
          const index = this.selectedItems.indexOf(item.value);
          if (index === -1) {
            // If the item is not already selected, add it to the selected items
            this.selectedItems.push(item.value);
          } else {
            // If the item is already selected, remove it from the selected items
            this.selectedItems.splice(index, 1);
          }
          // Update the filtered data based on selected items
          this.filteredData = this.selectedItems.reduce((acc, value) => {
            return acc.concat(this.optionData[value] || []);
          }, []);
        }
      },
  
      async fetchWeatherData(city) {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c72f5e663805f54c9e77f860f692b64`
          );
          const data = await response.json();
  
          if (data && data.cod === 200) {
            this.optionData[city] = [data]; // Store the weather data for the city
  
            if (this.tab === 'single' && this.selectedItem === city) {
              this.filteredData = this.optionData[city];
            }
          } else {
            console.error('Error fetching weather data:', data.message);
          }
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      },
      kelvinToCelsius(kelvin) {
        return (kelvin - 273.15).toFixed(2);
      },
      applySelection() {
        this.selectedItem = this.selectedItems
          .map((value) => this.items.find((item) => item.value === value).value)
          .join(', ');
        this.menu = false; // Close the dropdown after selection
        this.filteredData = this.selectedItems.reduce((acc, value) => {
          return acc.concat(this.optionData[value] || []);
        }, []);
      },
    },
    watch: {
      tab(newTab) {
        if (newTab === 'single') {
          this.filteredData = this.optionData[this.selectedItem] || [];
        } else {
          this.filteredData = this.selectedItems.reduce((acc, value) => {
            return acc.concat(this.optionData[value] || []);
          }, []);
        }
      },
      selectedItem(newItem, oldItem) {
        if (this.tab === 'single' && newItem !== oldItem) {
          this.filteredData = this.optionData[newItem] || [];
          this.fetchWeatherData(newItem); // Fetch weather data for the newly selected city
        }
      },
    },
  };
  </script>