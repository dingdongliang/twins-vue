import Vue from 'vue'
/* 引用vuejs文件 */
import Router from 'vue-router'
/* 引用vue路由模块，并赋值给变量Router */

Vue.use(Router)

export default new Router({
  routes: [/* 进行路由配置，规定“/”引入到Hello组件 */
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../pages/home'], resolve),
      meta: {
        title: 'home'
      }
    }
  ]
})
