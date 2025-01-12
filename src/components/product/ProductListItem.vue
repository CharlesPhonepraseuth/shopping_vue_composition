<template>
  <div>
    <h2 class="has-text-weight-bold">
      <router-link :to="'/products/' + productItem.id">
        {{ productItem.title }} 
      </router-link>
      <span
        @click="addCartItem(productItem)"
        class="tag is-primary is-pulled-right has-text-white">
        Add to Cart
      </span>
    </h2>
    <p>{{ productItem.description }}</p>
    <span class="has-text-primary has-text-weight-bold">
      {{ productItem.price }} <i class="fa fa-eur"></i>
    </span>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

defineProps({
  productItem: Object
})

const store = useStore();

const addCartItem = (item) => {
  store.dispatch('addCartItem', item);
};
</script>

<style scoped>
.tag {
  cursor: pointer;
}
</style>