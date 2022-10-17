<template>
  <h2>App: {{ info }}</h2>
  <show-info
    :info="info"
    :roInfo="roInfo"
    @changeInfoName="changeInfoName"
    @changeRoInfoName="changeRoInfoName"
  ></show-info>
</template>

<script>
import { reactive, readonly } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo,
  },
  setup() {
    // 本地定義多個數據, 都需要傳遞給子組件
    // name/age/height
    const info = reactive({
      name: 'why',
      age: 18,
      height: 1.88,
    });

    const changeInfoName = (payload) => {
      console.log(payload);
      info.name = payload;
    };

    const roInfo = readonly(info);
    const changeRoInfoName = (payload) => {
      info.name = payload;
    };

    return {
      info,
      roInfo,
      changeInfoName,
      changeRoInfoName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
