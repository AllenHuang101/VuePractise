<template>
  <h2>Home計數: {{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>

  <button @click="popularClick">首頁-流行</button>
  <button @click="hotClick">首頁-熱門</button>
  <button @click="songClick">首頁-歌單</button>
</template>

<script>
import useCounter from '../hooks/useCounter';
import useTitle from '../hooks/useTitle';

export default {
  setup() {
    // 1.counter 邏輯
    const { counter, increment, decrement } = useCounter();

    // 2.修改標題
    const title = useTitle('首頁');

    function popularClick() {
      title.value = '首頁-流行';
    }

    function hotClick() {
      title.value = '首頁-熱門';
    }

    function songClick() {
      title.value = '首頁-歌單';
    }
    return {
      counter,
      increment,
      decrement,
      popularClick,
      hotClick,
      songClick,
    };
  },
};
</script>

<style lang="scss" scoped></style>
