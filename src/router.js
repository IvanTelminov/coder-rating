import {createRouter, createWebHistory} from "vue-router";
import Home from "./viewe/Home.vue";
import Loginka from "./viewe/Loginka.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/loginka/',
        name: 'loginka',
        component: Loginka,
    },
]
const router = createRouter({
    routes,
    history : createWebHistory()
})
export default router