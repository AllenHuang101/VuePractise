<template>
  <div class="infos">
    <h2 address="$attrs.address">姓名: {{ name }}</h2>
    <h2>年齡: {{ age }}</h2>
    <h2>身高: {{ height }}</h2>
    <h2>{{ showMessage }}</h2>
  </div>
</template>

<script>
export default {
  // 作用: 接收父組件傳遞過來的屬性
  // 1.props數組語法
  // 缺點: 1. 不能對類型進行驗證 2. 沒有默認值
  // props: ['name', 'age', 'height'],

  inheritAttrs: false,
  // 2.props對象語法
  props: {
    name: {
      type: String,
      default: '我是默認name',
    },
    age: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      default: 2,
    },
    friend: {
      type: Object,
      // 對象或數組默認值必需編寫default的函數，函數返回默認值
      default: () => ({ name: 'james' }),
    },
    hobbies: {
      type: Array,
      default: () => ['籃球', 'rap', '唱跳'],
    },
    showMessage: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
