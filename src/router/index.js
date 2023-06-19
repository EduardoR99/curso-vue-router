import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ArticlesByTagView from '../views/ArticlesByTagView.vue'
import ArticleCommentList from '../components/ArticleCommentList.vue'
import ArticleAuthor from '../components/ArticleAuthor.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: ['/home', '/homepage']
    },
    /*{
      path: '/home',
      redirect: {
        name: 'home'
      }
    },*/
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/articles/:id(\\d+)',
      name: 'articles',
      component: ArticleView,
      props: true,
      children: [
        {
          name: 'articles.comments',
          path: '',
          component: ArticleCommentList,
          props: true
        },
        {
          name: 'articles.author',
          path: 'author',
          component: ArticleAuthor,
          props: true
        }
      ]
    },
    {
      path: '/tags/:tags+',
      name: 'tags',
      component: ArticlesByTagView,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/:url(.+)?',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
