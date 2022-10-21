<template>
  <div class="app">
    <h2>當前計數: {{ $store.state.counter }}</h2>
    <button @click="incrementAction">發起action修改counter</button>
    <button @click="increment">發起action修改counter(默認作法)</button>
    <h2>當前name: {{ $store.state.name }}</h2>
    <button @click="changeNameAction('Allen')">發起action修改name</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // counterBtnClick() {
    //   this.$store.dispatch('incrementAction');
    // },
    // nameBtnClick() {
    //   this.$store.dispatch('changeNameAction', 'Allen');
    // },
    ...mapActions(['incrementAction', 'changeNameAction']),
  },
};
</script>

<script setup>
import { useStore } from 'vuex';

// 1.在setup中使用mapActions輔助方法
const store = useStore();

const actions = mapActions(['incrementAction', 'changeNameAction']);

const newActions = {};
Object.keys(actions).forEach((key) => {
  newActions[key] = actions[key].bind({ $store: store });
});

const { incrementAction, changeNameAction } = newActions;

// 2.使用默認作法
function increment() {
  store.dispatch('incrementAction');
}
</script>

<style scoped></style>
