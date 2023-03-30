import HomePage from '../views/HomePage.vue'
import BasketPage from '../views/BasketPage.vue'
import SingleProductPage from '../views/SingleProductPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import products from '../data/products.json'

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/basket",
        name: "basket",
        component: BasketPage,
    },
    {
        path: "/product/:slug",
        name: "product",
        component: SingleProductPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _, next) => {
    if (to.name === 'product'){
        if(!products.find(p => p.slug === to.params.slug)){
            return next({
                name: 'home'
            })
        }
    }

    return next()
})

export default router