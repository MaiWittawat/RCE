import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/Home.vue'
import LoginView from './views/Login.vue'
import SignUpView from './views/SignUp.vue'
import NotFoundView from './views/404.vue'
import logindark from './views/logindark.vue'
import MainView from './views/Main.vue'

import ResetPasswordView from './views/ResetPasswrod.vue'

import ContributeView from './views/Contribute.vue'

// CRUD user
import ProfileView from './views/user/index.vue'
import test from './views/user/test.vue'

// CRUD problem
import CreateProblemView from './views/problem/create.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    name: "Home"
  },
  {
    path: '/login',
    component: LoginView,
    name: "Login"
  },
  {
    path: '/logindark',
    component: logindark,
    name: "LoginDark"
  },
  {
    path: '/signup',
    component: SignUpView,
    name: "SignUp"
  },
  {
    path: '/main',
    component: MainView,
    name: "Main"
  },
  {
    path: '/resetPassword',
    component: ResetPasswordView,
    name: "ResetPassword"
  },
  // user
  {
    path: '/profile',
    component: ProfileView,
    name: "UserProfile"
  },
  {
    path: '/test',
    component: test,
    name: "test"
  },
  // problem
  {
    path: '/problem/create',
    component: CreateProblemView,
    name: "CreateProblem"
  },
  {
    path: '/contribute',
    component:  ContributeView,
    name: "Contribute"
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundView,
    name: "404NotFound"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
