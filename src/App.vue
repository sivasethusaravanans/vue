<template theme="white">
  <v-app>
    <!-- <NavBar1 />
    <MainContent /> -->
    <sidebar />
  </v-app>
</template>

<script>
// import NavBar1 from "@/components/home.vue";
// import MainContent from "@/components/MainContent.vue";
import sidebar from "@/components/sidebar.vue";
export default {
  components: {
    // NavBar1,
    sidebar,
    // MainContent,
  },
};
</script>
