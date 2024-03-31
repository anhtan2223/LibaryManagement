import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/test',
      name: 'TestRoom' ,
      component : () => import('../components/Test.vue') ,
      props : true ,
    } ,
    {
      path : '/:pathMatch(.*)*',
      name: 'NotFound' ,
      component : () => import('../views/NotFound.vue') ,
      props : true ,
    } ,
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue') ,
      props : true ,
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue') ,
      props : true ,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: () => import('../views/SignInView.vue') ,
      props : true ,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/Admin/AdminDashboard.vue') ,
      props : true ,
    },
    {
      path: '/employee',
      name: 'Employee',
      component: () => import('../views/Employee/Home.Employee.vue') ,
      props : true ,
    },
    {
      path: '/reader',
      name: 'Reader',
      component: () => import('../views/Reader/Home.Reader.vue') ,
      props : true ,
    },
    {
      path: '/admincategory',
      name: 'AdminCategory',
      component: () => import('../views/Admin/AdminCategory.vue') ,
      props : true ,
    },
    {
      path: '/adminauthor',
      name: 'AdminAuthor',
      component: () => import('../views/Admin/AdminAuthor.vue') ,
      props : true ,
    }
    ,
    {
      path: '/adminpublishing',
      name: 'AdminPublishing',
      component: () => import('../views/Admin/AdminPublishing.vue') ,
      props : true ,
    }
  ]
})

export default router
