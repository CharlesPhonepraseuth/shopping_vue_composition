<template>
  <div id="login" class="box has-text-centered">
    <h2 class="title">Fullstack Clothing</h2>
    <button :class="[{'is-loading': loading}, 'button is-primary']" @click="login">Login</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const login = () => {
  store.dispatch('login');
  router.push({path: '/products'})
}

const loading = computed(() => store.getters.loading)
</script>

<style scoped>
  .box {
    padding: 30px;
  }
</style>
