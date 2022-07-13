import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VistaMascotas from '../views/VistaMascotas'
import VistaUsuarios from '../views/VistaUsuarios'
import VistaLogin from '../views/VistaLogin'
import VistaRegistro from '../views/VistaRegistro'
import VistaAñadirMascotas from '../views/VistaAñadirMascotas'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form-añadir-mascotas',
    name: 'form-añadir-mascotas',
    component: VistaAñadirMascotas
  },
  {
    path: '/form-mascotas',
    name: 'form-mascotas',
    component: VistaMascotas
  },
  {
    path: '/form-usuarios',
    name: 'form-usuarios',
    component: VistaUsuarios
  },
  {
    path: '/form-login',
    name: 'form-login',
    component: VistaLogin
  },
  {
    path: '/form-registro',
    name: 'form-registro',
    component: VistaRegistro
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
