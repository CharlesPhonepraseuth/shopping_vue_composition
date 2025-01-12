<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{ cartItem.title }}</p>
      <div>
        <span class="cart-item--price has-text-primary has-text-weight-bold">
          {{ cartItem.price }}€ x {{ cartItem.quantity }}
        </span>
        <span>
          <i
            @click="addCartItem(cartItem)"
            class="fa fa-arrow-circle-up cart-item__modify"
          ></i>
          <i
            @click="removeCartItem(cartItem)"
            class="fa fa-arrow-circle-down cart-item__modify"
          ></i>
        </span>
      </div>
    </div>
    <div class="cart-item__image">
      <img :src="`../src/assets/${cartItem.image_tag}`" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

defineProps({
  cartItem: Object
})
const store = useStore();

const addCartItem = (item) => {
  store.dispatch('addCartItem', item)
}

const removeCartItem = (item) => {
  store.dispatch('removeCartItem', item)
}
</script>

<style scoped>
.box {
  height: 90px;
  padding: 10px;
}

.cart-item__details {
  float: left;
  width: 250px;
  padding: 10px;
}

.cart-item__image img {
  float: right;
  height: 70px;
}

.cart-item__modify {
  cursor: pointer;
  margin: 0 2px;
}
</style>
