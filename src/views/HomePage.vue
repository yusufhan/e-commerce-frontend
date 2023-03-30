<template>
  <div class="w-screen h-screen">
    <router-link :to="{name: 'product', params: { slug: product.slug }}" v-for="product in products">
      {{ product.name }}
    </router-link>
  </div>
</template>

<script>
import products from '../data/products.json'

export default {
  data() {
    return {
      products
    }
  }
}
</script>