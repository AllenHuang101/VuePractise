<template>
  <div class="app">
    <h2 ref="title" class="title" :style="{ color: titleColor }">
      {{ message }}
    </h2>
    <button ref="btn" @click="changeTitle">修改title</button>

    <banner ref="banner" />
  </div>
</template>

<script>
import Banner from './Banner.vue';
export default {
  components: {
    Banner,
  },
  data() {
    return {
      message: 'Hello World',
      titleColor: 'red',
    };
  },
  methods: {
    changeTitle() {
      // 1.不要主動去獲取DOM，並且修改DOM內容。
      this.message = '您好阿~~~';
      this.titleColor = 'blue';

      // 2. 獲取h2/button元素
      console.log(this.$refs.title, this.$refs.btn);

      // 3.1 獲取banner組件: 組件實例
      console.log(this.$refs.banner);
      // 調用子組件的方法
      this.$refs.banner.bannerClick();

      // 3.2 獲取banner組建中的元素
      console.log(this.$refs.banner.$el);

      // 4.parent & root
      console.log(this.$parent); // 獲取父組件
      console.log(this.$root); // 獲取根組件
    },
  },
};
</script>

<style lang="scss" scoped></style>
