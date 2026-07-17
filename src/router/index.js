import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('@/views/RankingView.vue'),
  },
  {
    path: '/avaliacoes',
    name: 'Avaliacoes',
    component: () => import('@/views/AvaliacoesView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;