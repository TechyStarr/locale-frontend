import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PlacesView from '../views/PlacesView.vue'
import DeveloperView from '../views/DeveloperView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/developer',
    name: 'developer',
    component: DeveloperView
  },
  {
    path: '/places',
    name: 'places',
    component: PlacesView
  },
  {
    path: '/places/:id',
    name: 'place'
    // component: () => import(/* webpackChunkName: "place" */ '../views/PlaceView.vue')
  },
  {
    path: '/contact',
    name: 'contact'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
