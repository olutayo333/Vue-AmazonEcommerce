<template>
<div style="position:relative; " >
    <div id="page-content-wrapper" class="position:absolute;">
      <div class="container-fluid" style="width:100%; height:100%; top:0; left:0">
        <!-- Carousel -->
        <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" class="d-block w-100 img-fluid" alt="First slide">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" class="d-block w-100 img-fluid" alt="Second slide">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" class="d-block w-100 img-fluid" alt="Third slide">
            </div>
          </div>
        </div>
    </div>    
    </div>

    <div class="" style="position:absolute; height:100%; width:100%; top:0; left:0; z-index:10; margin-top:20vh">
    
    <div class="row  mx-auto ps-5" style="">
            <div class="col-lg-3 py-1 mx-1 shadow bg-white">
                <p class="fs-4" style="color:#3C4960"> <b>Electronics</b> </p>
                    <div class="col-lg-5 " >
                        
                        <!-- 
                        v-for="each in myArray" :key="each.email"
                        <div  class="card shadow mx-auto text-left " style="" >
                            <p><button class="btn"><img class="mx-auto d-flex" width="100%"   :src=each.productImage alt=""></button></p>
                            <div class="card-body">
                                <p class="fs-5"> <b>#{{each.productPrice}}</b></p>
                                <p> {{each.productName}}</p>
                                <p>
                                    <button @click="editProduct(each)" class="btn btn-small btn-warning me-1">Edit</button> 
                                    <button @click="deleteProduct(each)" class="btn btn-small btn-danger ms-1">Delete</button>
                                </p>   
                            </div>
                        </div> -->
                    </div>
                <RouterLink to="/" class="text-warning"> <b>See more</b> </RouterLink>
            </div>
            <div class="col-lg-3 mx-1 py-1 shadow bg-white">
                <p class="fs-4" style="color:#3C4960"> <b>Kids Product</b> </p>
                <RouterLink to="/" class="text-warning"> <b>See more</b> </RouterLink>
            </div>
            <div class="col-lg-3 mx-1 py-1 shadow bg-white">
                <p class="fs-4" style="color:#3C4960"> <b>Clothing & Fashion</b> </p>
                <RouterLink to="/" class="text-warning"> <b>See more</b> </RouterLink>
            </div>
            
    </div>
         
        <div class="ps-5 row my-4 mx-auto" style="">
            <div class="col-lg-3 ms-1 py-1 shadow bg-white">
                <p class="fs-4" style="color:#3C4960"> <b>Automobile</b> </p>
                <RouterLink to="/" class="text-warning"> <b>See more</b> </RouterLink>
            </div>
            <div class="col-lg-3 py-1 mx-1 shadow bg-white">
                <p class="fs-4" style="color:#3C4960"> <b>Food & Beverages</b> </p>
                <RouterLink to="/" class="text-warning"> <b>See more</b> </RouterLink>
            </div>
            <div class="col-lg-3 py-1 mx-1 shadow bg-white">
                <p class="fs-4" style="color:#3C4960"> <b>Health & Beauty</b> </p>
                <RouterLink to="/" class="text-warning"> <b>See more</b> </RouterLink>
            </div>
        </div>
</div>

    
</div>
    
</template>

<script setup>

import { onMounted, ref } from "vue"; import axios from 'axios';
    
    
    const productsURL= "https://nodejs-lernyappeccommerceserver.onrender.com/user/allproducts";
    let productArray=ref([]); let electronicsArray=ref([]);  let kidsProductArray=ref([]);
    let automobileArray=ref([]); let clothingFashionArray=ref([]); let foodBevaragesArray=ref([]);
    let healthBeautyArray=ref([]);
    
    onMounted(()=>{  
        axios.get(productsURL, { headers: {"Content-Type": "application/json", "Accept": "application/json" }})
            .then((response)=>{
                console.log(response);
                if (response.data.status){
                    productArray= response.data.result
                    electronicsArray = productArray.filter((u)=>((u.productCategory).toLowerCase()).match("electronics"))
                    kidsProductArray = productArray.filter((u)=>((u.productCategory).toLowerCase()).match('kids product'))
                    automobileArray = productArray.filter((u)=>((u.productCategory).toLowerCase()).match("automobile"))
                    clothingFashionArray = productArray.filter((u)=>((u.productCategory).toLowerCase()).match("clothing & fashion"))
                    foodBevaragesArray = productArray.filter((u)=>((u.productCategory).toLowerCase()).match("food & beverages"))
                    healthBeautyArray = productArray.filter((u)=>((u.productCategory).toLowerCase()).match("health & beauty"))
                }
                else{
                    alert("Could not load products");
                }
            })
    })


</script>
