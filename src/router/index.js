import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/subjects',
    name: 'Subjects',
    component: () => import(/* webpackChunkName: "subjects" */ '../views/Subjects.vue')
  },
  {
    path: '/grades',
    name: 'Grades',
    component: () => import(/* webpackChunkName: "grades" */ '../views/Grades.vue')
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import(/* webpackChunkName: "studentsLayout" */ '../views/Students/Layout'),
    children: [
      {
        path: '',
        name: 'Students',
        component: () => import(/* webpackChunkName: "showStudent" */ '../views/Students')
      },
      {
        path: ':id',
        name: 'Student',
        component: () => import(/* webpackChunkName: "showStudent" */ '../views/Students/Show'),
        children: [
          {
            path: ':id/parents',
            name: 'Parents',
            component: () => import(/* webpackChunkName: "parents" */ '../views/Students/Parents')
          }
        ]
      },
      {
        path: 'create',
        name: 'StudentCreate',
        component: () => import(/* webpackChunkName: "studentCreate" */ '../views/Students/Create')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
