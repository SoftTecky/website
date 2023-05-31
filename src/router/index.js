import { createRouter, createWebHistory } from 'vue-router'
// Vistas //
import LoginScreen from '../views/LoginScreen.vue'
import RegisterScreen from '../views/RegisterScreen.vue'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import Evaluation from '../views/EvaluationView.vue'

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
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/evaluation',
    name: 'evaluation',
    component: Evaluation
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
