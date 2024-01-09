<template>
  <v-app>
   

    <v-main>
      <navbar/>
       

      <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import navbar from './components/home';
export default {
  name: 'App',

  components: {
    // HelloWorld,
    navbar
  },

  data: () => ({
    //
  }),
};
</script>
