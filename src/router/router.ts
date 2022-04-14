import { createRouter, createWebHistory, RouteLocation } from 'vue-router';
import AgentPage from '../pages/AgentPage.vue';
import AgentsPage from '../pages/AgentsPage.vue';

export const routes = [
  { path: '/', redirect: '/agents' },
  { path: '/agents', component: AgentsPage },
  {
    path: '/agents/:uuid',
    component: AgentPage,
    props: (route: RouteLocation) => ({ uuid: route.params.uuid }),
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});
