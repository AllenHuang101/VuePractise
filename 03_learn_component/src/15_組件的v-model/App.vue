<template>
  <div class="app">
    <!-- 1.input v-model 雙向綁定-->
    <input v-model="message" />
    <!-- v-model的本質 -->
    <input :value="message" @input="message = $event.target.value" />

    <!-- 2.組件的v-model: 默認modelValue-->
    <counter v-model="appCounter"></counter>
    <!-- v-model的本質 -->
    <counter :modelValue="appCounter" @update:modelValue="appCounter = $event">
    </counter>

    <!-- 3.組件的v-model: 自訂義名稱counter -->
    {{ appCounter }} - {{ name }}
    <counter2 v-model:counter="appCounter" v-model:name="name"></counter2>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import Counter2 from './Counter2.vue';

export default {
  components: {
    Counter,
    Counter2,
  },
  data() {
    return {
      message: 'Hello World',
      appCounter: 100,
      name: 'Allen',
    };
  },
};
</script>

<style scoped></style>
