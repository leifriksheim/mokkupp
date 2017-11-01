import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';

import DashBoard from './pages/dashboard.vue';
import Home from './pages/home.vue';
import ContentType from './pages/contentType.vue';
import EmptyState from './pages/emptyState.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dashboard',
      component: DashBoard,
      children: [
        {
          path: '',
          name: 'emptyState',
          component: EmptyState
        },
        {
          path: ':contentType',
          name: 'contentType',
          component: ContentType
        }
      ]
    },
  ]
})
