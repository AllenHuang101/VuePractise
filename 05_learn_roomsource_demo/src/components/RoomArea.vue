<template>
  <div class="room-area">
    <!-- 1.區域header -->
    <area-header
      :title="areaData.title"
      :subtitle="areaData.subtitle"
    ></area-header>

    <!-- 2.房間列表 -->
    <div class="room-list">
      <template v-for="item in areaData.list" :key="item.id">
        <room-item :item-data="item" />
      </template>
    </div>
  </div>
  
</template>

<script setup>
import AreaHeader from './AreaHeader.vue';
import RoomItem from './RoomItem.vue';

defineProps({
  areaData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 30px -8px 0;
}
</style>
