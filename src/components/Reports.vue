<template>
  <v-container
    style="
      background-color: rgb(225, 225, 212);
      padding: 20px;
      justify-content: space-around;
    "
  >
    <v-v-column>
      <h1>Asset</h1>
      <v-container></v-container>
      <h5>
        Report based on the asset, will provide information represented about what
        happened.
      </h5>

      <template>
        <v-row>
          <v-col cols="12" sm="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" type="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="4">
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in dialog"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" type="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col class="d-flex" cols="12" sm="4">
            <v-select :items="items" label="Solo field" solo></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex" cols="12" sm="4">
            <v-select :items="items" label="Solo field" solo></v-select>
          </v-col>
          <v-col class="d-flex" cols="12" sm="4">
            <v-select :items="items" label="Solo field" solo></v-select>
          </v-col>
          <v-col class="d-flex" cols="12" sm="4">
            <v-select :items="items" label="Solo field" solo></v-select>
          </v-col>
        </v-row>
      </template>
    </v-v-column>
    <v-v-row>
        <v-row>
        <button
          @click="
            {
            }
          "
        >
          <v-icon color="black">mdi-menu</v-icon>

          <!-- Replace "mdi-menu" with your desired MDI icon -->
        </button>
        <h5>Download</h5>
      </v-row>
      <v-row>
        <button
          @click="
            {
            }
          "
        >
          <v-icon color="black">mdi-menu</v-icon>

          <!-- Replace "mdi-menu" with your desired MDI icon -->
        </button>
        <h5>Download</h5>
      </v-row>
      <v-row>
        <button
          @click="
            {
            }
          "
        >
          <v-icon color="black">mdi-menu</v-icon>

          <!-- Replace "mdi-menu" with your desired MDI icon -->
        </button>
        <h5>Download</h5>
      </v-row>
     
    </v-v-row>

    <v-container
      style="background-color: white; padding: 20px; justify-content: space-around"
      ><h3>Kindly select from date and to date, To get the report</h3></v-container
    >
  </v-container>
</template>
<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
  }),
};
</script>
