import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const VueRouterPush = Router.prototype.push 
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',redirect: '/home',
      component: () => import('../page/Home.vue'),
      },
    {
      path: '/home',
      name: 'home',
      component: () => import('../page/Home'),
      meta:{
        title:'主页',
        isActive:'home'
      }
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../page/Service'),
      meta:{
        title:'',
        isActive:'service'
      }
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('../page/Culture'),
      meta:{
        title:'',
        isActive:'culture'
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../page/Mine'),
      meta:{
        title:'',
        isActive:'mine'
      }
    },
    {
      path: '/journalism',
      name: 'journalism',
      component: () => import('../page/Journalism'),
      meta:{
        title:'',
        isActive:'home'
      }
    },
    {
      path: '/journalismDetail',
      name: 'journalismDetail',
      component: () => import('../page/JournalismDetail'),
      meta:{
        title:'',
        isActive:'home'
      }
    },
    {
      path: '/maintain',
      name: 'maintain',
      component: () => import('../page/Maintain'),
      meta:{
        title:'',
        isActive:'service'
      }
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('../page/Video'),
      meta:{
        title:'',
        isActive:'mine'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../page/Search'),
      meta:{
        title:'',
        isActive:'search'
      }
    },
    {
      path: '/videoList',
      name: 'videoList',
      component: () => import('../page/VideoList'),
      meta:{
        title:'',
        isActive:'mine'
      },
    },
    {
      path: '/serviceList',
      name: 'serviceList',
      component: () => import('../page/ServiceList'),
      meta:{
        title:'',
        isActive:'service'
      }
    },
    {
      path: '/honorList',
      name: 'honorList',
      component: () => import('../page/HonorList'),
      meta:{
        title:'',
        isActive:'home'
      }
    },
  ]
})
