<template>
  <h2>About計數: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import useCounter from '../hooks/useCounter';
import useTitle from '../hooks/useTitle';
export default {
  setup() {
    // 切換標題
    useTitle('關於');

    return {
      ...useCounter(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
