import Vue from 'vue'
import Router from 'vue-router' // 引进

import Login from './components/Login'
import Regist from './components/Regist'

Vue.use(Router) // 注册

// 创建路由对象
const router = new Router({
//    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        { path: '/login', component: Login },
        { path: '/regist', component: Regist },
        { path: '/xxx', name: 'xxx',  component: Regist },
        { path: '/regist', component: Regist, alias: '/zhuce' }
    ]
})

// 配置路由对象
router.beforeEach((to, from, next) => {
    console.log(`路由是由 ${from.path} 调转到 ${to.path} 页面`);
    if (to.path == '/zhuce') {
        alert("您没有权力去注册，请返回");
    } else {
        next();
    }
});


export default router;
