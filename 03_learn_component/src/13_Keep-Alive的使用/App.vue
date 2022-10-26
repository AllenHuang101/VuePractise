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
      <!-- include: 組件的名稱來自於組件定義時的name屬性 -->
      <keep-alive include="home,about">
        <component :is="currentTab"></component>
      </keep-alive>
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
