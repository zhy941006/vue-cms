// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

import resource from 'vue-resource'
Vue.use(resource)

import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入时间格式化的包
import moment from 'moment'
Vue.filter("dateFormat", function(dataStr, patter = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(patter)
})

//导入清除默认样式的包
import './components/common.css'
//导入mint-ui的css样式包
import 'mint-ui/lib/style.css'

//导入mui的css样式包和图标扩展包
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})