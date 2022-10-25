<template>
  <div class="app">
    <!-- 1.tab-control -->
    <tab-control
      :titles="['衣服', '鞋子', '褲子']"
      @tab-item-click="tabItemClick"
    />

    <!-- 2.展示內容 -->
    <h1>{{ pageContents[currentIndex] }}</h1>
    <!-- 1.tab-control: button -->
    <tab-control
      :titles="['衣服', '鞋子', '褲子']"
      @tab-item-click="tabItemClick"
    >
      <template v-slot:default="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>

    <!-- 2.tab-control: a元素 -->
    <tab-control
      :titles="['衣服', '鞋子', '褲子']"
      @tab-item-click="tabItemClick"
    >
      <template v-slot:default="props">
        <a href="#">{{ props.item }}</a>
      </template>
    </tab-control>

    <!-- 3.獨佔默認插槽的簡寫-->
    <tab-control
      :titles="['衣服', '鞋子', '褲子']"
      @tab-item-click="tabItemClick"
    >
      <template v-slot="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>

    <!-- 4.如果只有一個默認插槽，那麼template可以省略-->
    <tab-control
      :titles="['衣服', '鞋子', '褲子']"
      @tab-item-click="tabItemClick"
      v-slot="props"
    >
      <button>{{ props.item }}</button>
    </tab-control>
  </div>
</template>

<script>
import TabControl from './TabControl.vue';

export default {
  components: {
    TabControl,
  },
  data() {
    return {
      pageContents: ['衣服列表', '鞋子列表', '裤子列表'],
      currentIndex: 0,
    };
  },
  methods: {
    tabItemClick(index) {
      console.log('app:', index);
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped></style>
