<!-- YourComponent.vue -->

<template height="100px">
  <div id="app">
    <!-- Sidebar -->
    <div :class="{ 'sidebar-closed': isSidebarClosed }" class="sidebar">
      <!-- Your sidebar content goes here -->
      <div>
        <h1>wowTalkies</h1>
      </div>
      <div>
        <div>
          <div>
            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-title>My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-title>Attendance</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-title>Teams</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-title>Reports</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="true">
              <template v-slot:activator>
                <v-list-item-title>My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="main-content" :class="{ 'full-width': isSidebarClosed }">
      <!-- Appbar -->
      <div class="appbar">
        <!-- Your appbar content goes here -->
        <button @click="toggleSidebar">Toggle Sidebar</button>

        <input v-model="searchQuery" placeholder="Search" @input="performSearch" />

        <div><h5>Help</h5></div>

        <div><h5>Notification</h5></div>
      </div>

      <!-- Page content -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "YourComponent",

  data: () => ({
    open: false,
    isSidebarClosed: false,

    MyActions: [
      ["  My work orders", "mdi-account-multiple-outline", "/home"],
      ["  My assigned tickets", "mdi-cog-outline", "/home"],
      ["  My pending approvals", "mdi-account-multiple-outline", "/home"],
      ["  My store tasks", "mdi-cog-outline", "/home"],
    ],
    Reports2: [
      ["My Reports", "mdi-account-multiple-outline"],
      ["My Store Stocks", "mdi-cog-outline"],
    ],
    BusinessSetup: [
      ["Zone", "mdi-account-multiple-outline"],
      ["Site", "mdi-cog-outline"],
      ["Asset Categories", "mdi-account-multiple-outline"],
      ["LOcation", "mdi-cog-outline"],
      ["Equipment", "mdi-account-multiple-outline"],
      ["IOT Rules Settings", "mdi-cog-outline"],
      ["Services", "mdi-cog-outline"],
    ],
    MaintenenceSetup: [
      ["Tasks", "mdi-account-multiple-outline"],
      ["Tasks lists", "mdi-cog-outline"],
      ["Checks", "mdi-account-multiple-outline"],
      ["Check Lists", "mdi-cog-outline"],
      ["Work Order Template", "mdi-account-multiple-outline"],
      ["Work Order Scheduler", "mdi-cog-outline"],
    ],
    People: [
      ["Organisation Unit", "mdi-account-multiple-outline"],
      ["Designation", "mdi-cog-outline"],
      ["Employee", "mdi-account-multiple-outline"],
      ["User Roles", "mdi-cog-outline"],
      ["Shifts", "mdi-account-multiple-outline"],
      ["Rostering", "mdi-cog-outline"],
      ["Teams", "mdi-cog-outline"],
    ],
    Inventory: [
      ["UDM and Store Settings", "mdi-account-multiple-outline"],
      ["Items", "mdi-cog-outline"],
      ["Suppliers", "mdi-account-multiple-outline"],
    ],
    Tickets: [
      ["Ticket Categories", "mdi-account-multiple-outline"],
      ["Category Helpdesk", "mdi-cog-outline"],
    ],
    Reports: [
      ["Asset", "mdi-account-multiple-outline"],
      ["Maintenence", "mdi-cog-outline"],
      ["Ticket", "mdi-account-multiple-outline"],
      ["Inventory", "mdi-cog-outline"],
      ["People", "mdi-account-multiple-outline"],
      ["PPM Planner", "mdi-cog-outline"],
      ["Teams", "mdi-cog-outline"],
      ["Workorder Execution", "mdi-cog-outline"],
    ],
    SLA: [
      ["Service Level Agrement", "mdi-account-multiple-outline"],
      ["SLA Reports", "mdi-cog-outline"],
    ],
    Teams: [
      ["My Teams", "mdi-account-multiple-outline"],
      ["Team Attentence", "mdi-cog-outline"],
    ],
    Attentance: [
      ["My Attentence", "mdi-account-multiple-outline"],
      ["My Schedule", "mdi-cog-outline"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
    cruds1: [
      ["Add", "mdi-plus-outline"],
      ["Read", "mdi-file-outline"],
      ["Update", "mdi-update"],
      ["Delete", "mdi-delete"],
    ],
    drawer: false,
    group: null,
  }),
  methods: {
    toggleSidebar() {
      this.isSidebarClosed = !this.isSidebarClosed;
    },

    performSearch() {
      // Implement search logic based on searchQuery
    },
    showHelp() {
      // Implement logic to display help information
    },
    showNotifications() {
      // Implement logic to display notifications
    },
    showUserProfile() {
      // Implement logic to display user profile
    },
  },
};
</script>

<style>
#app {
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #333;
  color: white;
  display: inline-block; /* Display links in a single line */
  /* transition: width 0.3s ease, visibility 0.3s ease;  */
  /* Add transition for visibility */
}
.custom-card {
  background-color: black;
  /* Add any other styles you want for the custom card */
}
h5 {
  padding: 20px;
}
.black-text {
  color: black !important;
}

.black-background {
  background-color: black !important;
}
.sidebar router-link {
  display: block; /* Display links as block-level elements (one below the other) */
  margin-bottom: 10px; /* Add bottom margin to space out the links */
  color: white;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
}

.sidebar router-link:hover {
  text-decoration: underline; /* Underline the link on hover */
}
.sidebar-closed {
  width: 0;
  visibility: hidden;
  overflow: hidden;
  display: none; /* Hide the sidebar completely */
}

.main-content {
  flex: 1;
  transition: margin-left 0.3s ease; /* Add a transition effect for a smoother animation */
}

.full-width {
  margin-left: 0;
}

.appbar {
  background-color: #555;
  color: white;

  justify-content: space-between;
  display: flex;
  align-items: center;
}

.appbar h1 {
  margin: 0;
  flex: 1;
}

/* Add styling for the toggle button */
.appbar button {
  background-color: black;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  outline: none;
  margin-left: 10px;
}
.mx-auto {
  background-color: black;
  color: black;
}
</style>
