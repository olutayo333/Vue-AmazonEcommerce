<template>
    <NavBar/>
    <NavBar2/>
    <!-- <div class="col-lg-4 my-1 col-lg-2 col-md-3" v-for="each in myArray" :key="each.email" >
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
        </div>          
    </div> -->
    <p class="fs-4">Welcome to Electronics Page</p>
</template>

<script setup>
    import NavBar from '../NavBar.vue' 
   import NavBar2 from '../NavBar2.vue'
</script>