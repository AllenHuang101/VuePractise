import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
// import Home from '../views/Home.vue';
// import About from '../views/About.vue';

// const Home = () => import(/*webpackChunkName: 'home'*/ '../views/Home.vue');
// const About = () => import(/*webpackChunkName: 'about'*/ '../views/About.vue');

// 創建一個路由: 映射關係
const router = createRouter({
  // 指定採用history模式: hash
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      name: 'home',
      path: '/home',
      // webpackChunkName 指定chunk file name
      component: () => import(/*webpackChunkName: 'home'*/ '../views/Home.vue'),
      meta: {
        name: 'why',
        age: 18,
      },
      children: [
        {
          path: '',
          redirect: '/home/recommend',
        },
        {
          path: 'recommend', // /home/product
          component: () => import('../views/HomeRecommend.vue'),
        },
        {
          path: 'ranking', // /home/ranking
          component: () => import('../views/HomeRanking.vue'),
        },
      ],
    },
    {
      name: 'about',
      path: '/about',
      component: () =>
        import(/*webpackChunkName: 'about'*/ '../views/About.vue'),
    },
    {
      path: '/user/:id',
      component: () =>
        import(/*webpackChunkName: 'about'*/ '../views/User.vue'),
    },
    {
      path: '/order',
      component: () => import('../views/Order.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

// 需求: 進入到訂單葉面時，判斷用戶是否登錄
// 1. 用戶沒登入，跳轉到login頁面進行登錄。
// 2. 用戶已登入，直接進入到訂單頁面。
// 路由導航守衛
// 任何路由跳轉之前都會回調beforeEach傳入的函數
router.beforeEach((to, from) => {
  const token = localStorage.getItem('token');

  if (!token && to.path === '/order') {
    return '/login';
  }
});
export default router;
