import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/menu'
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('@/views/FlexMenu.vue')
    },
    {
        path: '/flow',
        name: 'flow',
        component: () => import('@/views/CardFlow.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router