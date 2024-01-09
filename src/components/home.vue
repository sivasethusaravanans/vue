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
         >
          <template v-slot:activator>
            <v-list-item-title>My Actions</v-list-item-title>
            
          </template>
          <router-link to="/home">
          <v-list-item
              v-for="([title,icon], i) in MyActions"
              :key="i"
              link
            >
            <v-list-item-title v-text="title"></v-list-item-title>
            <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
              
  
             
            </v-list-item>
          </router-link>
  
         
        </v-list-group>
        
        <v-list-group
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>Attentence</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in Attentance"
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
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>Team</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in Teams"
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
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>Teams</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in Reports2"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
         
            <v-list-group
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>Reports</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in BusinessSetup"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
         
            <v-list-group
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>Bussiness Setup</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in MaintenenceSetup"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
         
            <v-list-group
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>MAintanence Setup</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in People"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
         
            <v-list-group
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>People</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in Inventory"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
         
            <v-list-group
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>Inventory</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in Tickets"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
         
            <v-list-group
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>Tickets</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in Reports"
              :key="i"
              link
               
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
         
            <v-list-group
          :value="true"
         >
          <template v-slot:activator>
            <v-list-item-title>SLA</v-list-item-title>
            
          </template>
          <v-list-item
              v-for="([title, icon], i) in SLA"
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
         
        </v-list-group>
         
        </v-list-group>
         
        </v-list-group>
         
        </v-list-group>
         
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
.title{
  padding: 30px;
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
      MyActions: [
        ['  My work orders', 'mdi-account-multiple-outline'],
        ['  My assigned tickets', 'mdi-cog-outline'],
        ['  My pending approvals', 'mdi-account-multiple-outline'],
        ['  My store tasks', 'mdi-cog-outline'],
      ],
      Reports2: [
        ['My Reports', 'mdi-account-multiple-outline'],
        ['My Store Stocks', 'mdi-cog-outline'],
      ],
      BusinessSetup: [
        ['Zone', 'mdi-account-multiple-outline'],
        ['Site', 'mdi-cog-outline'],
        ['Asset Categories', 'mdi-account-multiple-outline'],
        ['LOcation', 'mdi-cog-outline'],
        ['Equipment', 'mdi-account-multiple-outline'],
        ['IOT Rules Settings', 'mdi-cog-outline'],
        ['Services', 'mdi-cog-outline'],
      ],
      MaintenenceSetup: [
        ['Tasks', 'mdi-account-multiple-outline'],
        ['Tasks lists', 'mdi-cog-outline'],
        ['Checks', 'mdi-account-multiple-outline'],
        ['Check Lists', 'mdi-cog-outline'],
        ['Work Order Template', 'mdi-account-multiple-outline'],
        ['Work Order Scheduler', 'mdi-cog-outline'] 
      ],
      People: [
        ['Organisation Unit', 'mdi-account-multiple-outline'],
        ['Designation', 'mdi-cog-outline'],
        ['Employee', 'mdi-account-multiple-outline'],
        ['User Roles', 'mdi-cog-outline'],
        ['Shifts', 'mdi-account-multiple-outline'],
        ['Rostering', 'mdi-cog-outline'] ,
        ['Teams', 'mdi-cog-outline'] 
      ],
      Inventory: [
        ['UDM and Store Settings', 'mdi-account-multiple-outline'],
        ['Items', 'mdi-cog-outline'],
        ['Suppliers', 'mdi-account-multiple-outline'],
      ],
      Tickets: [
        ['Ticket Categories', 'mdi-account-multiple-outline'],
        ['Category Helpdesk', 'mdi-cog-outline'],
      ],
      Reports: [
        ['Asset', 'mdi-account-multiple-outline'],
        ['Maintenence', 'mdi-cog-outline'],
        ['Ticket', 'mdi-account-multiple-outline'],
        ['Inventory', 'mdi-cog-outline'],
        ['People', 'mdi-account-multiple-outline'],
        ['PPM Planner', 'mdi-cog-outline'] ,
        ['Teams', 'mdi-cog-outline'] ,
        ['Workorder Execution', 'mdi-cog-outline']  
      ],
      SLA: [
        ['Service Level Agrement', 'mdi-account-multiple-outline'],
        ['SLA Reports', 'mdi-cog-outline'],
      ],
      Teams: [
        ['My Teams', 'mdi-account-multiple-outline'],
        ['Team Attentence', 'mdi-cog-outline'],
      ],
      Attentance: [
        ['My Attentence', 'mdi-account-multiple-outline'],
        ['My Schedule', 'mdi-cog-outline'],
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
  