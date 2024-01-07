<template>
  <div id="app">
    <router-link to="/"></router-link>
    
    
      <!-- <nav class="navbar">
       <img src="https://i.pinimg.com/474x/85/3f/ae/853fae4f4eaae89f00b9113350b691e5.jpg" alt="Logo" class="logo-image"> 
    <router-link to="/">Datas</router-link> 
     <router-link to="/charts">Charts</router-link> 
       <router-link to="/specifications">Specifications</router-link> 
        <router-link to="/gallery">Gallery</router-link> 
      <router-link to="/contact">Contact</router-link> 
    </nav> -->
     
    <router-view></router-view>
    <PieChart />
  </div>
</template>

<script>
import PieChart from './components/Chart1.vue'; // Correct import statement

export default {
  name: "App",
  components:{
    PieChart
  }
   
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

.logo-image {
  border-radius: 20px;
  width: 100px;
  height: 50px;
}

.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #f2f2f2;
  padding: 10px;
}

.navbar a {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar a:hover {
  background-color: #ddd;
}
</style>
