<template>
  <div></div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from 'vue';

export default {
  setup() {
    // 在執行setup函數的過程中，註冊生命週期函數。
    onMounted(() => {
      console.log('onMounted');
    });

    onUpdated(() => {
      console.log('onUpdate');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });
  },
};
</script>

<style lang="scss" scoped></style>
