<template>
  <div class="coming-soon">
    <div class="content">
      <h1 class="animated-text">Coming Soon!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
};
</script>

<style scoped>
.coming-soon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #e9e6ec, #dfe0e5); /* Replace with your desired gradient colors */
  animation: gradientAnimation 5s infinite alternate; /* Adjust animation duration and style as needed */
}

.content {
  text-align: center;
  color: purple; 
 
  size: 60px;
  /* Set the text color to your preference */
}

.animated-text {
  animation: moveText 2s infinite alternate; /* Adjust text animation duration and style as needed */
}

@keyframes gradientAnimation {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
}

@keyframes moveText {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px); /* Adjust the distance and direction of text movement */
  }
}
</style>
