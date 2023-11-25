import { createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/choice1',
            component: () => import('../views/choice1.vue')
        },
        {
            path: '/choice2',
            component: () => import('../views/choice2.vue')
        },
        {
            path: '/choice3',
            component: () => import('../views/choice3.vue')
        }
    ]
})

export default router