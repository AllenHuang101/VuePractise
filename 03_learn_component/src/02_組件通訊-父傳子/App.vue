<template>
  <!-- 如果屬性是一個非prop的attribute，那麼該屬性默認會添加到子組件的根元素上 -->
  <show-info name="Allen" :age="30" :height="180" address="新北市" />
  <show-info name="James" :age="28" :height="190" />
  <show-info name="Arty" :age="35" :height="188" />
  <show-info name="Tom" :age="35" :height="188" show-message="message" />
</template>

<script>
import ShowInfo from './ShowInfo.vue';
export default {
  components: {
    ShowInfo,
  },
};
</script>

<style scoped></style>
