import {createRouter, createWebHistory} from "vue-router";
import Home from "./viewe/Home.vue";
import TestElementPlus from "./components/TestElementPlus.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/elplus/',
        name: 'elementPlus',
        component: TestElementPlus,
    }
]
const router = createRouter({
    routes,
    history : createWebHistory()
})
export default router