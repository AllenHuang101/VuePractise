<template>
  <div class="app">
    <!-- 1.內容是button -->
    <show-message title="我是title">
      <button>我是按鈕元素</button>
    </show-message>
    <!-- 2.內容是超連結 -->
    <show-message title="我是title">
      <a href="#">google</a>
    </show-message>

    <!-- 3.內容是一張圖片 -->
    <show-message title="我是title">
      <img src="@/img/kobe02.png" alt="" />
    </show-message>

    <!-- 4.內容沒有傳遞 -->
    <show-message title="我是title"></show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';

export default {
  components: {
    ShowMessage,
  },
};
</script>

<style lang="scss" scoped></style>
