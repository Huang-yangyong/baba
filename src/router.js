import Vue from 'vue'
import Router from 'vue-router'
import Shouye from './views/Shouye.vue'
import Denglu from './views/Denglu.vue'
import sy from './views/sy.vue'
import caozuorizhi from './views/caozuorizhi.vue'
import queseguanli from './views/queseguanli.vue'
import quanxianguanli from './views/quanxianguanli.vue'
import qiyeguanli from './views/qiyeguanli.vue'
import gongsiweihu from './views/gongsiweihu.vue'
import keshiweihu from './views/keshiweihu.vue'
import zhichifangshi from './views/zhichifangshi.vue'
import zhuguanbumen from './views/zhuguanbumen.vue'
import xiangmufabu from './views/index.vue'
import tongzhifabu from './views/index2.vue'
import cankaocailiao from './views/index3.vue'
import zijinleitianbao from './views/zijinleitianbao.vue'
import kejileitianbao from './views/kejileitianbao.vue'
import ronyuleitianbao from './views/ronyuleitianbao.vue'
import zijinleijindu from './views/zijinleijindu.vue'
import kejileijindu from './views/kejileijindu.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'Shouye',
            component: Shouye,
            children: [{
                    path: 'sy1',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/sy.vue')
                },
                {
                    path: 'caozuorizhi',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/caozuorizhi.vue')
                },
                {
                    path: 'queseguanli',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/queseguanli.vue')
                },
                {
                    path: 'quanxianguanli',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/quanxianguanli.vue')
                },
                {
                    path: 'qiyeguanli',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/qiyeguanli.vue')
                },
                {
                    path: 'gongsiweihu',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/gongsiweihu.vue')
                },
                {
                    path: 'keshiweihu',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/keshiweihu.vue')
                },
                {
                    path: 'zhichifangshi',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/zhichifangshi.vue')
                },
                {
                    path: 'zhuguanbumen',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/zhuguanbumen.vue')
                },
                {
                    path: 'xiangmufabu',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/index.vue')
                },
                {
                    path: 'tongzhifabu',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/index2.vue')
                },
                {
                    path: 'cankaocailiao',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/index3.vue')
                },
                {
                    path: 'zijinleitianbao',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/zijinleitianbao.vue')
                },
                {
                    path: 'kejileitianbao',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/kejileitianbao.vue')
                },
                {
                    path: 'ronyuleitianbao',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/ronyuleitianbao.vue')
                },
                {
                    path: 'zijinleijindu',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/zijinleijindu.vue')
                },
                {
                    path: 'kejileijindu',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/kejileijindu.vue')
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Shouye.vue')
        }, {
            path: '/sy',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/sy.vue')
        }
    ]
})