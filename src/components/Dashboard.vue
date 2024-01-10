<template>
    <v-app>
      <v-container>
        <v-tabs v-model="tab" bg-color="#fffde7">
          <v-tab value="single">Single site</v-tab>
          <v-tab value="multi">Multi site</v-tab>
        </v-tabs>
        <v-row v-if="tab === 'single'">
          <v-col>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{  }">
                <v-text-field
                  v-model="selectedItem"
                  label="Select Item"
                  readonly
                  @click="menu = !menu"
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
              <v-card-title>{{ dataItem }}</v-card-title>
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
            { id: 0, text: 'Option 1', value: 'option1' },
            { id: 1, text: 'Option 2', value: 'option2' },
            { id: 2, text: 'Option 3', value: 'option3' },
          ],
          optionData: {
            option1: ['Data for Option 1'],
            option2: ['Data for Option 2'],
            option3: ['Data for Option 3'],
          },
          filteredData: [],
        }
      },
      mounted() {
        this.tab = 'single' // Set a default tab
        this.selectedItem = this.items[0].text
        this.filteredData = this.optionData[this.items[0].value] || []
      },
      methods: {
        selectItem(item) {
          this.selectedItem = item.text
          this.menu = false // Close the dropdown after selection
          this.filteredData = this.optionData[item.value] || []
        },
        applySelection() {
          this.selectedItem = this.selectedItems
            .map(value => this.items.find(item => item.value === value).text)
            .join(', ')
          this.menu = false // Close the dropdown after selection
          this.filteredData = this.selectedItems.flatMap(
            value => this.optionData[value] || []
          )
        },
      },
      watch: {
        tab() {
          this.selectedItems = [] // Reset selected items when tab changes
          this.selectedItem = null // Reset selected item
          this.filteredData = [] // Clear filtered data
        },
      },
    }
  </script>