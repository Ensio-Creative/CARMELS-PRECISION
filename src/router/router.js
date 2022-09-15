
export default [

    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/markets',
        name: 'Markets',
        component: () => import('../views/Markets.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import('../views/Services.vue')
    },
    {
        path: '/:marketName',
        name: 'MarketTitle',
        component: () => import('../views/_marketTitle.vue')
    },
]