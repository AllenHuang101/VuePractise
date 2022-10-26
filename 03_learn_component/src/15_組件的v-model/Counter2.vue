<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
    <button @click="changeCounter">修改counter</button>

    <!-- name绑定 -->
    <hr />
    <h2>name: {{ name }}</h2>
    <button @click="changeName">修改name的值</button>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
  },
  emits: ['update:counter', 'update:name'],
  methods: {
    changeCounter() {
      this.$emit('update:counter', 999);
    },
    changeName() {
      this.$emit('update:name', 'kobe');
    },
  },
};
</script>

<style scoped></style>
