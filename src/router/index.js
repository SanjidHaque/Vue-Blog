import Vue from 'vue';
import VueRouter from 'vue-router';

import Posts from '../components/Posts';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Posts',
        component: Posts
    },
    {
        path: '/categories',
        name: 'Categories',
        component: () => import('../components/Categories')
    }
];

const router = new VueRouter({
    routes
});

export default router
