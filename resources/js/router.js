import HomeComponent from "./components/HomeComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

// Divide project routes on two main parts (user/admin)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeComponent,
        },
        // {
        //     path: '/about',
        //     component: HomeComponent,
        // },
    ]
})

export default router
