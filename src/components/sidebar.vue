<!-- YourComponent.vue -->

<template height="100px">
  <div id="app">
    <!-- Sidebar -->
    <div :class="{ 'sidebar-closed': isSidebarClosed }" class="sidebar">
      <!-- Your sidebar content goes here -->
      <div>
        <h1 class="heading">wowTalkies</h1>
        <h5 class="ndheading">MY INCONN</h5>
      </div>
      <div>
        <div>
          <div>
            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item">My Actions</v-list-item-title>
              </template>

              <v-list-item
                v-for="([title, icon, route], i) in MyActions"
                :key="i"
                link
                sub
              >
              <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
             
              </v-list-item>
            </v-list-group>
            <v-list-item v-for="([title, icon, route], i) in MyRequests" :key="i" link>
              
              <router-link :to="route" class="router-link-active">
                <v-list-item-title
                  v-text="title"
                  style="color: black"
                ></v-list-item-title>
              </router-link>
              <v-list-item-icon>
                <v-icon v-text="icon" style="color: black"></v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >Attendance</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in Attendance" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
               
              </v-list-item>
            </v-list-group>
            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >Teams</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in Teams" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
                
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >Reports</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in Reports2" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                 
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
                
              </v-list-item>
            </v-list-group>
            <h4>CONFIGARATION</h4>
            
            <v-list-item v-for="([title, icon, route], i) in Dashboard" :key="i" link>
              
                <router-link :to="route" class="router-link-active">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
              </v-list-item>

              <v-list-item v-for="([title, icon, route], i) in LicenseSetup" :key="i" link>
             
                <router-link :to="route" class="router-link-active">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
              </v-list-item>

           

              <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >Business Setup</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in BusinessSetup" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
              
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >Maintenance Setup</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in MaintenanceSetup" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
              
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >People</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in People" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
               
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >Inventory</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in Inventory" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
            
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >Tickets</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in Tickets" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
               
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >Reports</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in Reports" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
                
              </v-list-item>
            </v-list-group>

            <v-list-group :value="false">
              <template v-slot:activator>
                <v-list-item-title class="custom-list-item" style="color: white"
                  >SLA</v-list-item-title
                >
              </template>

              <v-list-item v-for="([title, icon, route], i) in SLA" :key="i" link>
                <v-list-item-icon>
                  <v-icon v-text="icon" style="color: black"></v-icon>
                </v-list-item-icon>
                <router-link :to="route">
                  <v-list-item-title
                    v-text="title"
                    style="color: black"
                  ></v-list-item-title>
                </router-link>
            
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
        <button @click="toggleSidebar">
          <v-icon color="black">mdi-menu</v-icon>
          <!-- Replace "mdi-menu" with your desired MDI icon -->
        </button>
        <container></container>
        <container></container>
        <container></container>
        <container></container>
        <input v-model="searchQuery" placeholder="Search" style="border-radius: 8px; border-style: dotted;"   @input="performSearch" />

        <v-icon color="black">mdi-help</v-icon>
        <v-icon color="black">mdi-bell</v-icon>
        <div class="circular-avatar">
      <img src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-443446.jpg&fm=jpg" alt="User Avatar">
    </div>

        <container></container>
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
    MyRequests:[["My Requests & Approvals","mdi-account-multiple-outline","/empty"]],

    LicenseSetup:[["License Setup","mdi-account-multiple-outline","/empty"]],
Dashboard:[["Dashboard","mdi-account-multiple-outline","/home"]],
    MyActions: [
      ["  My work orders", "mdi-account-multiple-outline", "/empty"],
      ["  My assigned tickets", "mdi-cog-outline", "/empty"],
      ["  My pending approvals", "mdi-account-multiple-outline", "/empty"],
      ["  My store tasks", "mdi-cog-outline", "/empty"],
    ],
    Reports2: [
      ["My Reports", "mdi-account-multiple-outline", "/empty"],
      ["My Store Stocks", "mdi-cog-outline", "/empty"],
    ],
    BusinessSetup: [
      ["Zone", "mdi-account-multiple-outline", "/empty"],
      ["Site", "mdi-cog-outline", "/empty"],
      ["Asset Categories", "mdi-account-multiple-outline", "/empty"],
      ["Location", "mdi-cog-outline", "/empty"],
      ["Equipment", "mdi-account-multiple-outline", "/empty"],
      ["IOT Rules Settings", "mdi-cog-outline", "/empty"],
      ["Services", "mdi-cog-outline", "/empty"],
    ],
    MaintenanceSetup: [
      ["Tasks", "mdi-account-multiple-outline", "/empty"],
      ["Tasks lists", "mdi-cog-outline", "/empty"],
      ["Checks", "mdi-account-multiple-outline", "/empty"],
      ["Check Lists", "mdi-cog-outline", "/empty"],
      ["Work Order Template", "mdi-account-multiple-outline", "/empty"],
      ["Work Order Scheduler", "mdi-cog-outline", "/empty"],
    ],
    People: [
      ["Organisation Unit", "mdi-account-multiple-outline", "/empty"],
      ["Designation", "mdi-cog-outline", "/empty"],
      ["Employee", "mdi-account-multiple-outline", "/empty"],
      ["User Roles", "mdi-cog-outline","/empty"],
      ["Shifts", "mdi-account-multiple-outline", "/empty"],
      ["Rostering", "mdi-cog-outline", "/empty"],
      ["Teams", "mdi-cog-outline", "/empty"],
    ],
    Inventory: [
      ["UDM and Store Settings", "mdi-account-multiple-outline", "/empty"],
      ["Items", "mdi-cog-outline", "/empty"],
      ["Suppliers", "mdi-account-multiple-outline", "/empty"],
    ],
    Tickets: [
      ["Ticket Categories", "mdi-account-multiple-outline", "/empty"],
      ["Category Helpdesk", "mdi-cog-outline", "/empty"],
    ],
    Reports: [
      ["Asset", "mdi-account-multiple-outline", "/reports"],
      ["Maintenence", "mdi-cog-outline", "/empty"],
      ["Ticket", "mdi-account-multiple-outline", "/empty"],
      ["Inventory", "mdi-cog-outline", "/empty"],
      ["People", "mdi-account-multiple-outline", "/empty"],
      ["PPM Planner", "mdi-cog-outline", "/empty"],
      ["Teams", "mdi-cog-outline", "/empty"],
      ["Workorder Execution", "mdi-cog-outline", "/empty"],
    ],
    SLA: [
      ["Service Level Agrement", "mdi-account-multiple-outline", "/empty"],
      ["SLA Reports", "mdi-cog-outline", "/empty"],
    ],
    Teams: [
      ["My Teams", "mdi-account-multiple-outline", "/empty"],
      ["Team Attentence", "mdi-cog-outline", "/empty"],
    ],
    Attendance: [
      ["My Attentence", "mdi-account-multiple-outline", "/empty"],
      ["My Schedule", "mdi-cog-outline", "/empty"],
    ],
    cruds: [
      ["Create", "mdi-plus-outline", "/empty"],
      ["Read", "mdi-file-outline", "/empty"],
      ["Update", "mdi-update", "/empty"],
      ["Delete", "mdi-delete", "/empty"],
    ],
    cruds1: [
      ["Add", "mdi-plus-outline", "/empty"],
      ["Read", "mdi-file-outline", "/empty"],
      ["Update", "mdi-update", "/empty"],
      ["Delete", "mdi-delete", "/empty"],
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
.my-actions-group {
  icon-color: white;
  color: white !important;
}
/* Customize the active link style */
.router-link-active {
  text-decoration: none;

}
 
.ndheading {
  padding-top: 0px;
  padding-left: 10px;
  padding-bottom: 10px;
}
.circular-avatar {
  width: 50px; /* Adjust the size of the circular avatar */
  height: 50px; /* Adjust the size of the circular avatar */
  border-radius: 50%; /* Make it circular */
  overflow: hidden; /* Hide overflowing content */
   /* Add some margin if needed */
}

.circular-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire circular space */
}
.heading {
  color: purple;
  padding-bottom: 0px;
  padding-left: 8px;
  padding-top: 20px;
}
.custom-list-item {
  color: black !important;
  icon-color: white;
}


.sidebar {
  width: 280px;

  background-color: rgb(240, 237, 237);
  display: inline-block;
}
.router-link.active {
  text-decoration: none;
  color: brown;
}
.v-list-group__header__icon--clickable {
  color: white !important;
}
.my-actions-group .v-list-group__header .v-icon {
  color: white !important;
}

h4 {
  padding: 10px;
}
 
h1 {
  padding-left: 10px;
}
.appbar {
  height: 50px;
  background: rgb(240, 237, 237);
  color: black;
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
