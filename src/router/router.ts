import { createRouter, createWebHistory } from 'vue-router';
import AgentsPage from '../pages/AgentsPage.vue';

export const routes = [
  { path: '/', redirect: '/agents' },
  { path: '/agents', component: AgentsPage },
];

export const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
