<template>
  <div>
    <h2>ShowInfo: {{ info }}</h2>
    <!-- 代碼沒有錯誤，但違背規範(單向數據流) -->
    <button @click="info.name = 'kobe'">ShowInfo按鈕</button>
    <!-- 正確的作法: 符合單項數據流 -->
    <button @click="showInfobtnClick">ShowInfo按鈕</button>

    <hr />

    <h2>ShowInfo: {{ roInfo }}</h2>
    <!-- 修改無效 -->
    <!-- <button @click="roInfo.name = 'kobe'">ShowInfo按鈕</button> -->
    <!-- 正確的作法 -->
    <button @click="roInfoBtnClick">roInfo按鈕</button>
  </div>
</template>

<script>
export default {
  props: {
    // reactive 數據
    info: {
      types: Object,
      default: () => ({}),
    },

    // readonly數據
    roInfo: {
      types: Object,
      default: () => ({}),
    },
  },
  emits: ['changeInfoName', 'changeRoInfoName'],
  setup(props, context) {
    const showInfobtnClick = () => {
      context.emit('changeInfoName', 'kobe');
    };

    const roInfoBtnClick = () => {
      context.emit('changeRoInfoName', 'james');
    };
    return {
      showInfobtnClick,
      roInfoBtnClick,
    };
  },
};
</script>

<style lang="scss" scoped></style>
