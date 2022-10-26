<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button
          :class="{ active: currentTab === item }"
          @click="itemClick(item)"
        >
          {{ item }}
        </button>
      </template>
    </div>
    <div class="view">
      <!-- 1.第一種作法: v-if進行判斷決定要顯示哪一個組件 -->
      <template v-if="currentTab === 'home'"><home></home></template>
      <template v-if="currentTab === 'about'"><about></about></template>
      <template v-if="currentTab === 'category'"
        ><category></category
      ></template>

      <!-- 2.第二種作法: 動態組件 component -->
      <!-- is中的組件需要來自兩個地方: 1.全局註冊的組件 2.局部註冊的組件 -->
      <component
        :is="currentTab"
        name="Allen"
        :age="30"
        @homeClick="homeClick"
      ></component>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';
import Category from './views/Category.vue';
export default {
  components: {
    Home,
    About,
    Category,
  },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      // currentIndex: 0,
      currentTab: 'home',
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    homeClick(payload) {
      console.log('homeClick', payload);
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
