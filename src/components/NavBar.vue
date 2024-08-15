<template>    
<div class="sticky-top nav-sticky shadow mt-1  " style="z-index: 1; background-color: #3C4960; position:sticky; top:0 ">
    <nav class="navbar navbar-expand-lg  shadow" style="height:6vh">
        <div class="container ">
           
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <RouterLink to="/" class="me-2 img-fluid"> <img class="shadow" :src=logo alt="" width="50vw"> </RouterLink>
        <div class="collapse navbar-collapse" id="navbarNav">
            <sub><span class="pi pi-map-marker" style="font-size: 1rem; color: white"></span></sub>
            <span class="text-white mx-1"><sub>Deliver to <p><b>Nigeria</b></p></sub> </span> 
            
             <div class="input-group mx-2 " style="width:35vw">
            
                    <select class="btn" value={{all}} style="z-index: 1; background-color:#E6E6E6; width:15% " v-model="productCategory" name="productCategory">
                        <option value="">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Kids Products">Kids Products</option>
                        <option value="Automobile">Automobile</option>
                        <option value="Clothing & Fashion">Clothing & Fashion</option>
                        <option value="Food & Beverages">Food & Beverages</option>
                        <option value="Health & Beauty">Health & Beauty</option>
                    </select>
            
                <input type="text" class="form-control" placeholder="Search Regis">
                <button class="btn px-2 py-2" style="borderTopRightRadius:5px; borderBottomRightRadius:5px; background-color:#FEBD69">
                    <i class="pi pi-search" style="font-size: 1.5rem"></i>
                </button>
            </div>
          <ul class="navbar-nav mx-auto ">  
            
            <li class='nav-item my-auto'> <RouterLink to="/" class="nav-link text-white"> <b>Home</b> </RouterLink>  </li>
            <li class="nav-item my-auto ">
              <span v-if="!userName.value"><button class="btn text-white">Hello,  sign-in</button></span>
              <div v-if="userName.value"><span>Welcome, {{userName.value}}</span> <button class="btn">Signout</button></div> 
            </li>
            <li class='nav-item my-auto '>   <button class="btn text-white"><b>Orders</b></button>    </li>
            <li class="nav-item my-auto"> 
              <button class="btn">
                <div class="pt-2">
                  <sub class="text-warning fs-5"><b>{{cartNo}}</b></sub> 
                  <p class="ms-1"><i class="pi pi-cart-minus" style="font-size:1.5rem; color:white">cart</i></p> 
                </div>
              </button> 
            </li>
            <li class="nav-item my-auto py-2">
              <button class="btn btn-outline-warning">
                  
                      Become a Seller
                  
              </button>
            </li>
          
          </ul>     
          
        </div>
        </div>
      </nav>
      
</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import logo from '../assets/Regis Logo 12 Transparent bg.png'
import 'primeicons/primeicons.css'
import { ref } from "vue";

const productCategory= ref(""); const all = ref("");
const cartNo=ref(0); const userName=ref("");
const sellerName=ref("");

</script>