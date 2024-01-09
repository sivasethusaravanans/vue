<template>
    <v-card
      class="mx-auto overflow-hidden"
      height="100%"
      width="100%"
    >
      <!-- <v-system-bar color="black"></v-system-bar> -->
  
      <v-app-bar
        color="white"
        
        light
        class="appbar"
       >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>My files</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
      v-model="drawer"
      aria-hidden="false"
      aria-expanded="true"
      aria-autocomplete="true"
      aria-activedescendant="100%"
      draggable="true"
      permanant
class="hello"
    >
    <div class="d-flex">
      <img
        src="https://media.licdn.com/dms/image/C4D0BAQFxtsaLVTpecg/company-logo_200_200/0/1656928687020/wowtalkies_logo?e=2147483647&v=beta&t=8GryXH0CMc9P778MEVYStxvIOLdLo24YYj0aCuMe48A"
        alt="wowTalkies Logo"
        style="width: 60px;"
      />
      <h1 class="how">wowTalkies</h1>
    </div>
      <v-list>
        
        <v-list-group
          :value="true"
          prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-title>Home</v-list-item-title>
            
          </template>
  
          <v-list-group
            :value="true"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Datas</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon], i) in admins1"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
  
          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon], i) in cruds1"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <v-list-group
          :value="true"
          prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
            
          </template>
  
          <v-list-group
            :value="true"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon], i) in admins"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
  
          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon], i) in cruds"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
      </v-navigation-drawer>
  
      <v-card-text>
        The navigation drawer will appear from the left on smaller size screens.
      </v-card-text>
    </v-card>
    
  </template>
  
  <style scoped>
  .how
  {
padding: 10px
  }
  .mx-auto.overflow-hidden {
    background-color: white;
    color: black; /* Change text color to white or another contrasting color */
  }
  .v-toolbar-title{
    color: black;
  }
  .v-app-bar{
    background-color: whi;
    color: white;
  }
</style>
  <script>
  export default {
    name: "NavBar1",
    data: () => ({
      admins1: [
        ['Office', 'mdi-account-multiple-outline'],
        ['All employees', 'mdi-cog-outline'],
      ],
        admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      cruds1: [
        ['Add', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      drawer: false,
      group: null,
    }),
  
    watch: {
      group() {
        this.drawer = false;
      },
    },
  };
  </script>
  