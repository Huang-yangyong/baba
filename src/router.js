import Vue from 'vue'
import Router from 'vue-router'
import Shouye from './views/Shouye.vue'
import Denglu from './views/Denglu.vue'
import sy from './views/sy.vue'
import caozuorizhi from './views/caozuorizhi.vue'
import queseguanli from './views/queseguanli.vue'
import quanxianguanli from './views/quanxianguanli.vue'
import qiyeguanli from './views/qiyeguanli.vue'

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