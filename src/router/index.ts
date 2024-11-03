import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import Contact from '@/views/ContactUsView.vue'
import BlogPost from '@/views/BlogPostView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicyView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AuthorView from '@/views/AuthorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/blog',
      name:'blog',
      component:  BlogView
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact
    },
    {
      path:'/blog/blogpost',
      name:'blogpost',
      component: BlogPost
    },
    {
      path:'/privacypolicy',
      name:'privacypolicy',
      component: PrivacyPolicy
    },
    {
      path:'/category',
      name:'category',
      component: CategoryView
    },
    {
      path:'/author',
      name:'author',
      component:AuthorView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
