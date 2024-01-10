<!-- YourComponent.vue -->

<template height="100px">
  <div id="app">
    <!-- Sidebar -->
    <div :class="{ 'sidebar-closed': isSidebarClosed }" class="sidebar">
      <!-- Your sidebar content goes here -->
      <div>
        <h1 class="heading">wowTalkies</h1>
        <h4 class="ndheading">MY INCONN</h4>
      </div>
      <div>
        <div>
          <div>
            <v-list-group :value="false" class="my-actions-group"     append-icon-color="red">
              <template v-slot:activator>
              <v-list-item-title class="custom-list-item"  style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: white;"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">Attendance</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: white;"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">Teams</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: white;"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">Reports</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: white;"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
<h4>CONFIGARATION</h4>
            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: white;"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: white;"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title style="color: white;">My Actions</v-list-item-title>
              </template>

              <v-list-item v-for="([title, icon, route], i) in MyActions" :key="i" link>
                <router-link :to="route">
                  <v-list-item-title v-text="title" style="color: white;"></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: white;"></v-icon>
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
        <button @click="toggleSidebar" >
    <v-icon color="white">mdi-menu</v-icon> <!-- Replace "mdi-menu" with your desired MDI icon -->
  </button>

        <input v-model="searchQuery" placeholder="Search" @input="performSearch" />

        <div><h5>Help</h5></div>

        <div><h5>Notification</h5></div>
      </div>

      <!-- Page content -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
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

<style scoped>
#app {
  display: flex;
}

.append-icon {
  color: white !important;
}
.v-list-item-title {
  color: white;
}
.my-actions-group{
icon-color:white;
  color: white !important;
}
/* Customize the active link style */
.router-link-active {
  text-decoration: none;
}
.ndheading{
  padding-left: 10px;
  padding-bottom:10px ;
}
.heading {
  color: orangered;
  padding-left: 10px;
  padding-top: 20px;
}
.custom-list-item {
  color: white !important;
  icon-color: white
}

.sidebar {
  width: 300px;
  background-color: #333;
  color: white;
  display: inline-block;
}
.v-list-group__header__icon--clickable {
  color: white !important;
}
.my-actions-group .v-list-group__header .v-icon {
  color: white !important;
}
 
h4{
  padding: 10px;
}
h5 {
  padding: 20px;
}
h1{
  padding-left: 10px;
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

.appbar button {
  background-color: transparent;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  outline: none;
  margin-left: 10px;
}

/* Add styling for the toggle button */
.appbar button:hover {
  text-decoration: underline;
}

.main-content {
  flex: 1;
  transition: margin-left 0.3s ease;
}

.full-width {
  margin-left: 0;
}

.sidebar router-link {
  display: block;
  margin-bottom: 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  height: 100%;
}

/* Remove underline on hover for router-link */
.sidebar router-link:hover {
  text-decoration: none;
}

.sidebar-closed {
  width: 0;
  visibility: hidden;
  overflow: hidden;
  display: none;
}

.mx-auto {
  background-color: black;
  color: black;
}
</style>

