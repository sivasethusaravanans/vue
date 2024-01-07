<!-- src/components/Gallery.vue -->
<template>
    <div>
       
      <h1>All Models</h1>
      <div class="image-row" v-for="row in galleryChunks" :key="row[0].id">
        <div v-for="image in row" :key="image.id" class="image-container">
          <div class="content-container">
            <img :src="image.url" alt="Car Image" class="gallery-image">
            <h3>Specification {{ image.id }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .image-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
   /* background-color: blue; /* Change the background color here */
  }
  .content-container h3 {
  color: white; /* Change the color as needed */
}
  .image-container {
    width: calc(33.33% - 20px); /* Adjust width and margin as needed */
    margin-right: 10px;
    background-color: blue; /* Change the background color here */
    padding: 10px; /* Add padding for better visibility */
  }
  
  .content-container {
    text-align: center;
   }
  
  .gallery-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    /* Preserve aspect ratio */
  }
  .specification-text {
   color: white !important; /* Set the text color here */
}
  </style>
  
  <script>
  export default {
    data() {
      return {
        gallery: [
          { id: 1, url: "https://images3.alphacoders.com/131/1314801.jpg" },
          { id: 2, url: "https://i.pinimg.com/474x/50/13/0c/50130cb5143312ebb4dbee46b8a708f6.jpg" },
          { id: 3, url: "https://i.pinimg.com/474x/0b/21/03/0b21039a8275a5e1c85b77e6bef0e0e2.jpg" },
          { id: 4, url: "https://i.pinimg.com/474x/da/18/4c/da184c40a0e5b9739b64a38300ffa19f.jpg" },
          { id: 5, url: "https://i.pinimg.com/474x/54/36/f5/5436f56c8d2dbfd201ce0b45c048bc1e.jpg" },
          { id: 6, url: "https://i.pinimg.com/474x/10/03/35/10033557af4c0a60a5e8b0442897829c.jpg" },
          { id: 7, url: "https://i.pinimg.com/474x/df/ed/6c/dfed6c3489164046f18c9bfd37dfafd9.jpg" },
          // Add more images as needed
        ],
      };
    },
    computed: {
      // Split the images into chunks of 3 for each row
      galleryChunks() {
        const chunkSize = 3;
        return Array.from({ length: Math.ceil(this.gallery.length / chunkSize) }, (v, i) =>
          this.gallery.slice(i * chunkSize, i * chunkSize + chunkSize)
        );
      },
    },
  };
  </script>
  