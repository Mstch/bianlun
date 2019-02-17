import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/landing',
            name: 'landing-page',
            component: require('@/components/LandingPage/LandingPage').default
        },
        {
            path: '/',
            name: 'start',
            component: require('@/components/Start/Start').default,
            children: [
                {
                    path: '/start/theme',
                    name: 'theme',
                    component: require('@/components/Start/Theme').default
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
