<template>
<!-- Image-Scroll -->
   <div class="scroll-container">
    <div class="scroll-content">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v6._SY608_CB573698005_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_laptop._SY232_CB558654384_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/51Zo7mGSCuL._AC_SY400_.jpg" alt="">
      <!-- Duplicate images for seamless looping -->
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v3._SY608_CB573698005_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v6._SY608_CB573698005_.jpg" alt="">
      <img class="scroll-img" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_laptop._SY232_CB558654384_.jpg" alt="">
      <img class="scroll-img" src="https://m.media-amazon.com/images/I/51Zo7mGSCuL._AC_SY400_.jpg" alt="">
    </div>
  </div>    
</template>

<script setup>

</script>

<style scoped>
    .scroll-container {
        overflow: hidden;
        width: 100vw;
        white-space: nowrap;
        }

        .scroll-content {
        display: inline-flex;
        animation: scroll 30s linear infinite;
        }

        .scroll-img {
        width: 100vw;
        height: auto;
        }

        @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>

