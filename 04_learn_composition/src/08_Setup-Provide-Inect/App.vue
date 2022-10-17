<template>
  <div>AppContent: {{ name }}</div>
  <button @click="name = 'kobe'">app btn</button>
  <show-info></show-info>
</template>

<script>
import { provide, ref } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo,
  },
  setup() {
    // 為了增加父子組件的響應式，可以在provide值時使用ref或reactive
    const name = ref('Allen');
    provide('name', name);
    provide('age', 30);

    return {
      name,
    };
  },
};
</script>

<style lang="scss" scoped></style>
