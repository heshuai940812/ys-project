import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WangEdior from '@/views/content/wangEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/wangeditor',
      name: 'wangeditor',
      component: WangEdior
    }
  ]
})
