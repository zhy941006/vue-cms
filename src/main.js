// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

//导入resource解决发送请求问题
import resource from 'vue-resource'
Vue.use(resource)

//按需引入模块
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 引入清除默认样式css
import './components/common.css'
// 引入mint-ui的样式
import 'mint-ui/lib/style.css'

// 引入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//引入时间格式化
import moment from 'moment'
Vue.filter('dataFonat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

// 托管http请求前缀
Vue.http.options.root = 'http://vue.lovegf.cn:8899/';
// 解决post请求,参数转换为json格式
Vue.http.options.emulateJSON = true;
//引入懒加载模块
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

//引入查看缩略图的模块
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})