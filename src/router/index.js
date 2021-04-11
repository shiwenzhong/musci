import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('views/home/Home')
import HomePerson from '../views/personalized/HomePerson'
import MusicDetail from '../views/musicDetail/MusicDetail'
import MusicList from '../views/musicDetail/musicChild/MusicList'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/home',
        redirect:'/home/homePerson'
      },
      {
        path:'homePerson',
        name:'HomePerson',
        component:HomePerson
      },
      {
        path:'musicDetail/:id',
        name:'MusicDetail',
        component:MusicDetail,
        // children:[
        //   {
        //     path:'musicDetail/:id',
        //     redirect:'/home/musicDetail/musicList'
        //   },
        //   {
        //     path:'musicDetail/musicList',
        //     name:'MusicList',
        //     component:MusicList
        //   }
        // ]
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
