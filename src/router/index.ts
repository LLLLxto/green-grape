import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '@/views/Home.vue';
import Charge from '@/views/Charge.vue';
import Bill from '@/views/Bill.vue';
import Charts from '@/views/Charts.vue';

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
];

const router = new VueRouter({
  routes
});

export default router;
