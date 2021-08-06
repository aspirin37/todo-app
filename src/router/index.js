import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TodoApp',
    component: () => import('@/components/todo-vuetify/TodoApp.vue'),
  },
  {
    path: '/hello',
    name: 'HelloUser',
    component: () => import('../components/second-page/HelloUser.vue'),
  },
  {
    path: '/old',
    name: 'TodoAppOld',
    component: () => import('@/components/todo-old/TodoAppOld.vue'),
  },
  {
    path: '/axioslist',
    name: 'AxiosList',
    component: () => import('@/components/axios-list/AxiosList.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
