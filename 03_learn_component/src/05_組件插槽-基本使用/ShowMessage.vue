<template>
  <h2>{{ title }}</h2>
  <div class="content">
    <slot>
      <p>我是默認插槽內容</p>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
