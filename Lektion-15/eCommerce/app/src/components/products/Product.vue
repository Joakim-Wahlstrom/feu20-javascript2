<template>
<div class="col mb-4">
    <div class="card h-100 p-3">
      <img
        :src="product.image"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.short }}</p>

      </div>
        <button class="btn btn-primary" @click="addProductToCart({product, quantity})">Add to cart</button>
        <input type="number" v-model="quantity">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['product'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['addProductToCart'])
  }
}
</script>

<style>

</style>