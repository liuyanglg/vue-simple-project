import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import First from '@/components/First.vue'
import Second from '@/components/Second.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      name: 'first',
      component: First
    },    {
      path: '/second',
      name: 'second',
      component: Second
    }
  ]
})
