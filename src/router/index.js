import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotificationsView from "@/views/NotificationsView.vue";
import ContactsView from "@/views/ContactsView.vue";
import EvaluationsView from "@/views/EvaluationsView.vue";
import NetworkView from "@/views/NetworkView.vue";
import ProfileView from "@/views/ProfileView.vue";
import {useAuthStore} from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/evaluations/:id',
      name: 'Evaluations',
      component: () => import('../views/EvaluationsView.vue')
    },
    {
      path: '/network',
      name: 'Network',
      component: () => import('../views/NetworkView.vue')
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: () => import('../views/NotificationsView.vue')
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: () => import('../views/ProfileView.vue')
    },
  ]
})

router.beforeEach(async (to, from, next) => {
    const publicPages = ['/login', '/register']
    const authRequired = !publicPages.includes(to.path)
    const auth = useAuthStore()
    const loggedIn = auth.canAccess

    if (authRequired && !loggedIn) {
        return next('/login')
    }

    return next()
})

export default router
