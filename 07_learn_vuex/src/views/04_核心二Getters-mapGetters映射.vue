<template>
  <div class="app">
    <h2>doubleCounter: {{ doubleCounter }}</h2>
    <h2>friendsTotalAge: {{ totalAge }}</h2>
    <h2>message: {{ message }}</h2>

    <!-- 根據id獲取某一個朋友的訊息 -->
    <h1>朋友111訊息: {{ getFriendById(111) }}</h1>
    <h1>朋友112訊息: {{ getFriendById(112) }}</h1>
  </div>
</template>

<script>
import { computed } from 'vue';
import { mapGetters, useStore } from 'vuex';

export default {
  computed: {
    ...mapGetters(['doubleCounter', 'totalAge']),
    ...mapGetters(['getFriendById']),
  },
};
</script>

<script setup>
import { computed, toRefs } from 'vue';
import { mapGetters, useStore } from 'vuex';

const store = useStore();

// 1.使用mapGetters
// const { message: messageFn } = mapGetters(['message']);
// const message = computed(messageFn.bind({ $store: store }));

// 2.直接解構，並且包裹toRefs
// const { message } = toRefs(store.getters);

// 3.針對某一個getters屬性使用computed
const message = computed(() => store.getters.message);
</script>

<style scoped></style>
