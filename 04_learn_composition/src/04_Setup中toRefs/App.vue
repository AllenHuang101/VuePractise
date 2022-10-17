<template>
  <div>
    <h2>info: {{ name }} - {{ age }} - {{ height }}</h2>
    <button @click="age++">修改age</button>
    <button @click="height = 1.89">修改height</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from '@vue/reactivity';
export default {
  setup() {
    const info = reactive({
      name: 'Allen',
      age: 28,
      height: 1.88,
    });

    // reactive解構後會變成普通的值，會失去響應式
    // 要保持響應式可以使用 toRef/toRefs
    const { name, age } = toRefs(info);
    // 單獨解構height可以使用 toRef
    const height = toRef(info, 'height');
    return {
      // info,
      name,
      age,
      height,
    };
  },
};
</script>

<style lang="scss" scoped></style>
