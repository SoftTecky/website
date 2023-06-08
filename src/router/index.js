import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotificationsView from "@/views/NotificationsView.vue";
import ContactsView from "@/views/ContactsView.vue";
import EvaluationsView from "@/views/EvaluationsView.vue";
import NetworkView from "@/views/NetworkView.vue";
import ProfileView from "@/views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'onLogin',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/evaluations',
      name: 'evaluations',
      component: () => import('../views/EvaluationsView.vue')
    },
    {
      path: '/network',
      name: 'network',
      component: () => import('../views/NetworkView.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/NotificationsView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
  ]
})

export default router
