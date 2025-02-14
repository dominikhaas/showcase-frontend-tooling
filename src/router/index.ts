import { createRouter, createWebHistory } from 'vue-router'

import ArticleListPage from '../article/ArticleListPage.vue'
import ArticleEditorPage from '../article/ArticleEditorPage.vue'
import ArticleViewPage from '../article/ArticleViewPage.vue'
import SignInPage from '../user/SignInPage.vue'
import SignUpPage from '../user/SignUpPage.vue'
import ErrorPage from '../error/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/articles',
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticleListPage,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleViewPage,
      props: true,
    },
    {
      path: '/edit-article/:id',
      name: 'editArticle',
      component: ArticleEditorPage,
      props: true,
    },
    {
      path: '/create-article',
      name: 'creditArticle',
      component: ArticleEditorPage,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage,
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage,
    },
  ],
})

export default router
