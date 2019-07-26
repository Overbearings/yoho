import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/home'
import Tx from '@/components/home/hothome/Tshirt'
import Coupon from '@/components/home/hothome/coupon'
import Shou from '@/components/home/hothome/shou'
import Goods from '@/components/home/hothome/goods'

import Mycart from '@/components/mycart/mycart'
import Stroll from '@/components/stroll/stroll'
import Mine from '@/components/mine/mine'
import Custom from '@/components/mine/custom'

import Logon from '@/components/logon/logon'
import Enroll from '@/components/logon/enroll'
import Account from '@/components/logon/account'
// 逛逛
import StrollCct from '@/components/stroll/compontents/strollCct'
import StrollNew from '@/components/stroll/compontents/strollNew'
import StrollInfor from '@/components/stroll/compontents/strollInfor'
import StrollTop from '@/components/stroll/compontents/strollTop'
import StrollUp from '@/components/stroll/compontents/strollUp'
// 分类
import Sort from '@/components/sort/sort'
import Loading from '@/components/sort/compontents/loading'
import Loading1 from '@/components/sort/compontents/loading1'
import Loading2 from '@/components/sort/compontents/loading2'
import Loading3 from '@/components/sort/compontents/loading3'
import Loading4 from '@/components/sort/compontents/loading4'
import Loading5 from '@/components/sort/compontents/loading5'
import Loading6 from '@/components/sort/compontents/loading6'
import Search from '@/components/home/components/search.vue'
import Hotselling from '@/components/home/components/hotselling.vue'
Vue.use(VueRouter)

// 1.定义路由表
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/mycart',
    name: 'Mycart',
    component: Mycart
  },
  {
    path: '/stroll',
    name: 'Stroll',
    redirect: '/stroll/strollNew',
    component: Stroll,
    children: [
      {
        path: 'strollCct',
        name: 'StrollCct',
        component: StrollCct
      },
      {
        path: 'strollNew',
        name: 'StrollNew',
        component: StrollNew
      },
      {
        path: 'strollInfor',
        name: 'StrollInfor',
        component: StrollInfor
      },
      {
        path: 'strollUp',
        name: 'StrollUp',
        component: StrollUp
      },
      {
        path: 'strollTop',
        name: 'StrollTop',
        component: StrollTop
      }
    ]
  },
  {
    path: '/sort',
    name: 'Sort',
    redirect: '/sort/loading',
    component: Sort,
    children: [
      {
        path: 'loading',
        name: 'Loading',
        component: Loading
      },
      {
        path: 'loading1',
        name: 'Loading1',
        component: Loading1
      },
      {
        path: 'loading2',
        name: 'Loading2',
        component: Loading2
      },
      {
        path: 'loading3',
        name: 'Loading3',
        component: Loading3
      },
      {
        path: 'loading4',
        name: 'Loading4',
        component: Loading4
      },
      {
        path: 'loading5',
        name: 'Loading5',
        component: Loading5
      },
      {
        path: 'loading6',
        name: 'Loading6',
        component: Loading6
      }
    ]
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '*',
    redirect: Home
  },
  {
    path: '/logon',
    name: 'Logon',
    component: Logon
  },
  {
    path: '/enroll',
    name: 'Enroll',
    component: Enroll
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/tx',
    name: 'Tx',
    component: Tx
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: Coupon
  },
  {
    path: '/shou',
    name: 'Shou',
    component: Shou
  },
  {
    path: '/goods',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/custom',
    name: 'Custom',
    component: Custom
  },
  {
    path: '/hotselling',
    name: 'Hotselling',
    component: Hotselling
  }
]

// 2.导出路由
export default new VueRouter({
  routes
})
