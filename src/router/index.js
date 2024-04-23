// Composables
import { createRouter, createWebHistory } from 'vue-router'
import TheError from "@/views/error/TheError";
import Page404 from "@/views/error/Page404";
import Page403 from "@/views/error/Page403";
import page500 from "@/views/error/Page500";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Basket.vue'),
      },
      {
        path: '/success',
        name: 'Success',
        component: () => import(/* webpackChunkName: "home" */ '@/views/success.vue'),
      },
    ],
  },
  {
    path: "/error",
    redirect: "/error/404",
    name: "Error",
    component: TheError,
    children: [
      {
        path: "404",
        name: "Page404",
        component: Page404
      },
      {
        path: "500",
        name: "Page500",
        component: page500
      },
      {
        path: "403",
        name: "Page403",
        component: Page403
      }
    ]
  },
  { path: "/:pathMatch(.*)", redirect: "/error/404" },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
