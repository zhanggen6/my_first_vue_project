import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home.vue'
import Course from '../components/Course/Course.vue'

Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter({
  //配置路由信息

  routes: [
    {path: '/', redirect: "/home"},
    {path: '/home', name: 'Home', component: Home},
    {path: '/course', name: 'Course', component: Course},
  ]
});

//千万不要忘记导出
export default router
