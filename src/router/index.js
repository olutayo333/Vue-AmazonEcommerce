import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/TheHome.vue';
import Electronics from '@/components/categories/ElecTronics.vue'
const routes=[
    {path:'/', component:Home},
    {path:"/electronics", component:Electronics},
    {path:"/:catchAll(.*)", component:Home}, 
    
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})