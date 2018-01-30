import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const First = {template: '<div>this first page</div>'};
const Second = {template: '<div>this second page</div>'};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: Second
    }
  ]
});
