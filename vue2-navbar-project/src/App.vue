<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import sidebar from './components/SideNavBar.vue'
export default {
  name: 'App',
components:{
  sidebar
},
  data: () => ({
    //
  }),
}
</script>
