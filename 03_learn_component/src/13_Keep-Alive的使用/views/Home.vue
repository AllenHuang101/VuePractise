<template>
  <div>
    <h2>Home組件</h2>
    <h2>當前計數: {{ counter }}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      counter: 0,
    };
  },
  created() {
    console.log('home created');
  },
  unmounted() {
    console.log('home unmounted');
  },

  // 對於keep-alive組件，監聽有沒有進行切換
  activated() {
    console.log('home activated');
  },

  deactivated() {
    console.log('home deactivated');
  },
};
</script>

<style scoped></style>
