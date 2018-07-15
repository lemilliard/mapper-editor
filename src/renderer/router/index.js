import Vue from 'vue';
import Router from 'vue-router';
import Pages from '@/components/pages';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Pages.Editor,
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Pages.Editor,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
