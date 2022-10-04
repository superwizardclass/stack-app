import {createRouter, createWebHistory } from 'vue-router';

import StackTrainer from './components/StackTrainer.vue';
import StackReview from './components/StackReview.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: StackTrainer},
        {path: '/review', component: StackReview}
    ]
});

export default router;