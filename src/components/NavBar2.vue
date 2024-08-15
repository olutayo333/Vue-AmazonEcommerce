<template>    
<div class="sticky-top nav-sticky shadow mb-1  " style="z-index: 2; background-color: #232F3E; position:sticky; top:1 ">
    <nav class="navbar navbar-expand-lg  shadow" style="height:5vh">
        <button class="btn " data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <i class="pi pi-bars" style="font-size:1.5rem; color:white"><small>All</small></i>
        </button> 
        
        <button class="btn text-white">Today's Deals</button>
        <button class="btn text-white">Customer Service</button>
        <button class="btn text-white">Registry</button>
        <button class="btn text-white">Gift Cards</button>
        <button class="btn text-white">Sell</button>
    </nav>
      
</div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <!-- <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> -->
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
        <div class="" style="width:90vh; overflow:auto">
            <ul style="list-style-type:none; ">
                <li><b class="fs-5">Digital Content & Devices</b></li>
                <li><button class="btn ">Amazon Music <i class="pi pi-angle-right"></i></button></li>
                <li><button class="btn"> Kindle E-readers & Books <i class="pi pi-angle-right"></i> </button></li>
                <li><button class="btn"> Regis Appstore <i class="pi pi-angle-right"></i></button></li>
            </ul><hr>
            <ul style='list-style-type:none;' >
                <li><b class="fs-5">Shop by Department</b></li>
                <li>
                    <button data-bs-toggle="offcanvas" data-bs-target="#electronicsoffcanvas" aria-controls="electronicsoffcanvas" class="btn ">
                    Electronics<i class="pi pi-angle-right"></i>
                    </button>
                </li>
                <li><button class="btn"> Computers<i class="pi pi-angle-right"></i></button></li>
                <li><button class="btn"> Smart Home <i class="pi pi-angle-right"></i></button></li>
                <li><button class="btn"> Arts & Crafts <i class="pi pi-angle-right"></i></button></li>
                <li><button class="btn"> See All <i class="pi pi-angle-down"></i></button></li>
            </ul><hr>
            <ul style='list-style-type:none;' >
                <li><b class="fs-5">Programes & Features</b></li>
                <li><button class="btn ">Gift Cards <i class="pi pi-angle-right"></i></button></li>
                <li><button class="btn"> Shop by Internet <i class="pi pi-angle-right"></i></button></li>
                <li><button class="btn"> Amazon Live <i class="pi pi-angle-right"></i></button></li>
                <li><button class="btn"> International Shopping <i class="pi pi-angle-right"></i></button></li>
                <li><button class="btn"> See All <i class="pi pi-angle-down"></i></button></li>
            </ul><hr>
            <ul style='list-style-type:none;' >
                <li><b class="fs-5">Health & Settings</b></li>
                <li><button class="btn ">Your Account</button></li>
                <li><button class="btn"> English</button></li>
                <li><button class="btn"> United State</button></li>
                <li><button class="btn"> Customer Service </button></li>
                <li><button class="btn"> Sign in</button></li>
            </ul><hr>

        </div>
    <div class="dropdown mt-3">
      
      <!-- <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul> -->
    </div>
  </div>
</div>

    <!-- Electronics Offcanvas -->
<div class="offcanvas offcanvas-start" tabindex="-1" id="electronicsoffcanvas" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      
  </div>
  <div class="offcanvas-body">
        <div class="" style="width:90vh; overflow:auto">
            <button class="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i style="font-size:1.5rem" class="pi pi-angle-left"></i>Main Menu
            </button>  
            <p class="fs-5">Electronics</p>
                <li><button class="btn"> Accessories & Supplies</button></li>
                <li><button class="btn"> Camera & Photo </button></li>
                <li><button class="btn"> Car & Vehicle Electronics</button></li>
                <li><button class="btn"> Cell Phones & Accessories </button></li>
                <li><button class="btn"> Computers & Accessories </button></li>
                <li><button class="btn"> GPS & Navigation </button></li>
                <li><button class="btn"> Headphones </button></li>
                <li><button class="btn"> Home Audio </button></li>
                <li><button class="btn"> Office Electronics </button></li>
                <li><button class="btn"> Portable Audio & Video </button></li>
                <li><button class="btn"> Security & Surveillance </button></li>
                <li><button class="btn"> Service Plans </button></li>
                <li><button class="btn"> Television & Video </button></li>
                <li><button class="btn"> Video Game Consoles & Accessories </button></li>
                <li><button class="btn"> Video Projectors </button></li>
                <li><button class="btn"> Wearable Technology </button></li>
                <li><button class="btn"> E-book Readers & Accessories </button></li>

        </div>
   
  </div>
</div>
</template>

<script setup>
    import { ref } from "vue";
    import 'primeicons/primeicons.css'

    const status= ref(false);

    const toggle = ()=>{
        if(status){
            status.value=true
        }
        else{
            status.value=false
        }
    }
</script>