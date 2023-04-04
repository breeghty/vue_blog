import { createWebHistory, createRouter } from "vue-router";

import blogList from './components/List.vue';
import homeVue from './components/Home.vue';
import blogDetail from './components/Detail.vue';
import authorInfo from './components/Author.vue';
import commentDesc from './components/Comment.vue';

const routes = [
    {
        path: "/list",
        component: blogList,
    },
    {
        path:"/",
        component: homeVue,
    },
    {
        path:"/detail/:id",
        component: blogDetail,
        children: [
            {
                path: "author",
                component: authorInfo,
            },
            {
                path:"comment",
                component: commentDesc,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 