import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Charge from '@/views/Charge.vue';
import Bill from '@/views/Bill.vue';
import Charts from '@/views/Charts.vue';
import NotFound from '@/views/NotFound.vue';
import Labels from '@/views/Labels.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/charge'
  },
  {
    path: '/charge',
    component: Charge
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
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
