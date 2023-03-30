<template>
    <h1>{{ product.name }}</h1>
</template>

<script>
import products from '../data/products.json'

export default {
    computed: {
        product(){
            return products.find(p => p.slug === this.$route.params.slug)
        }
    },
}
</script>