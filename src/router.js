import { createWebHistory, createRouter } from "vue-router";

import blogList from './components/List.vue';

const routes = [
    {
        path: "/list",
        component: blogList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 