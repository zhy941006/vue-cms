import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../pages/home'
import member from '../pages/member'
import shopcar from '../pages/shopcar'
import search from '../pages/search'
import newList from '../pages/newList'
import newInfo from '../pages/newInfo'

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/member',
            component: member
        },
        {
            path: '/shopcar',
            component: shopcar
        },
        {
            path: '/search',
            component: search
        },
        {
            path: '/home/newList',
            component: newList
        },
        {
            path: '/home/newInfo',
            component: newInfo
        }
    ],
    linkActiveClass: 'mui-active'
})