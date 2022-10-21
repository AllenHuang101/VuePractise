<template>
  <div class="app">
    <!-- 1.在模板中直接使用多個狀態 -->
    <h2>name: {{ $store.state.name }}</h2>
    <h2>level: {{ $store.state.level }}</h2>
    <h2>avatar: {{ $store.state.avatarURL }}</h2>

    <!-- 2.計算屬性(映射狀態: 數組寫法) -->
    <!-- <h2>name: {{ name }}</h2>
    <h2>level: {{ level }}</h2> -->

    <!-- 3.計算屬性(映射狀態: 物件寫法) -->
    <!-- <h2>name: {{ sName }}</h2>
    <h2>level: {{ sLevel }}</h2> -->

    <h2>cName: {{ cName }}</h2>
    <h2>cLevel: {{ cLevel }}</h2>

    <h2>cName: {{ c1Name }}</h2>
    <h2>cLevel: {{ c1Level }}</h2>

    <h2>cName: {{ c2Name }}</h2>
    <h2>cLevel: {{ c2Level }}</h2>
  </div>
</template>

<script>
import { computed, toRefs } from 'vue';
import { mapState } from 'vuex';
import useState from '../hooks/useState';

export default {
  computed: {
    fullname() {
      return 'xxx';
    },
    // 傳入數組
    // ...mapState(['name', 'level', 'avatarURL']),
    // 傳入物件, 可以重新命名計算屬性名稱, 可以避免跟 data 名稱衝突
    ...mapState({
      sName: (state) => state.name,
      sLevel: (state) => state.level,
    }),
  },
};
</script>

<script setup>
import { useStore, mapState } from 'vuex';

// 1.一步步完成
const { name, level } = mapState(['name', 'level']);
const store = useStore();
// 將name, level轉成響應式
const cName = computed(name.bind({ $store: store }));
const cLevel = computed(level.bind({ $store: store }));

// 2.使用自己封裝的useState hook
const { name: c1Name, level: c1Level } = useState(['name', 'level']);

// 3.直接對store.state進行解構(推薦)
// 透過toRefs將解構出來的屬性變成響應式
const { name: c2Name, level: c2Level } = toRefs(store.state);
</script>

<style scoped></style>
