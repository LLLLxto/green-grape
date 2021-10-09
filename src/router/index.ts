import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Accounting from '@/views/Accounting.vue';
import Bill from '@/views/Bill.vue';
import Charts from '@/views/Charts.vue';
import NotFound from '@/views/NotFound.vue';
import Labels from '@/views/Labels.vue';
import CreateLabel from '@/views/CreateLabel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/accounting'
  },
  {
    path: '/accounting',
    component: Accounting
  },
  {
    path: '/bill',
    component: Bill
  },
  {
    path: '/charts',
    component: Charts
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/labels/create',
    component: CreateLabel
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
