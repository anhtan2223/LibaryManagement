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
      path: '/admin/account',
      name: 'AccountFromAdmin',
      component: () => import('../views/Admin/AdminAccount.vue') ,
      props : true ,
    },
    {
      path: '/admin/account/:id',
      name: 'AccountEditAdmin',
      component: () => import('../views/Admin/AdminAccountEdit.vue') ,
      props : true ,
    },
    {
      path: '/admin/book',
      name: 'BookFromAdmin',
      component: () => import('../views/Admin/AdminBook.vue') ,
      props : true ,
    },
    {
      path: '/admin/book/:id',
      name: 'BookEditAdmin',
      component: () => import('../views/Admin/AdminBookEdit.vue') ,
      props : true ,
    },
    {
      path: '/admin/category',
      name: 'AdminCategory',
      component: () => import('../views/Admin/AdminCategory.vue') ,
      props : true ,
    },
    {
      path: '/admin/category/:id',
      name: 'CategoryEditAdmin',
      component: () => import('../views/Admin/AdminCategoryEdit.vue') ,
      props : true ,
    },
    {
      path: '/admin/author',
      name: 'AdminAuthor',
      component: () => import('../views/Admin/AdminAuthor.vue') ,
      props : true ,
    },
    {
      path: '/admin/author/:id',
      name: 'AuthorEditAdmin',
      component: () => import('../views/Admin/AdminAuthorEdit.vue') ,
      props : true ,
    },
    {
      path: '/admin/publisher',
      name: 'AdminPublisher',
      component: () => import('../views/Admin/AdminPublishing.vue') ,
      props : true ,
    },
    {
      path: '/admin/publisher/:id',
      name: 'PublisherEditAdmin',
      component: () => import('../views/Admin/AdminPublishingEdit.vue') ,
      props : true ,
    },
    {
      path: '/employee',
      name: 'EmployeeHome',
      component: () => import('../views/Employee/Home.Employee.vue') ,
      props : true ,
    },
    {
      path: '/employee/info',
      name: 'EmployeeInfo',
      component: () => import('../views/Employee/Info.Employee.vue') ,
      props : true ,
    },
    {
      path: '/employee/card',
      name: 'EmployeeCard',
      component: () => import('../views/Employee/Card.Employee.vue') ,
      props : true ,
    },
    {
      path: '/employee/search',
      name: 'EmployeeSearch',
      component: () => import('../views/Employee/Book.Employee.vue') ,
      props : true ,
    },
    {
      path: '/employee/password',
      name: 'EmployeeChangePassword',
      component: () => import('../views/Employee/Pass.Employee.vue') ,
      props : true ,
    } ,

    {
      path: '/reader',
      name: 'Reader',
      component: () => import('../views/Reader/Home.Reader.vue') ,
      props : true ,
    },
    {
      path: '/reader/info',
      name: 'userinfo',
      component: () => import('../views/Reader/Info.Reader.vue') ,
      props : true ,
    },
    {
      path: '/reader/password',
      name: 'ReaderChangePassword',
      component: () => import('../views/Reader/Pass.Reader.vue') ,
      props : true ,
    } ,
    {
      path: '/reader/borrowhistory',
      name: 'ReaderBorrowHistory',
      component: () => import('../views/Reader/BorrowHistory.Reader.vue') ,
      props : true ,
    },
    {
      path: '/reader/borrowdetail',
      name: 'ReaderBorrowDetail',
      component: () => import('../views/Reader/BorrowDetail.Reader.vue') ,
      props : true ,
    },
  ]
})

export default router
