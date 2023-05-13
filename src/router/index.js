import { createRouter, createWebHistory } from 'vue-router'
// Vistas //
import LoginScreen from '../views/LoginScreen.vue'
import RegisterScreen from '../views/RegisterScreen.vue'
import HomeView from '../views/HomeView.vue'

// Componentes //
import SkeletonLoad from '../components/ScreenSkeleton.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginScreen
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterScreen
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    name: 'load',
    component: SkeletonLoad
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
