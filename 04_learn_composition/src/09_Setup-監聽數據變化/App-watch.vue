<template>
  <div>AppContent</div>
  <button @click="message = '您好阿, Allen'">修改message</button>
  <button @click="info.freind.name = 'Kobe'">修改info</button>
</template>

<script>
import { ref, watch, reactive } from 'vue';

export default {
  setup() {
    // 1.定義數據
    const message = ref('Hello World');
    const info = reactive({
      name: 'Allen',
      age: 30,
      freind: {
        name: 'James',
      },
    });

    // 2.監聽數據的變化
    watch(message, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    watch(info, (newValue, oldValue) => {
      console.log(newValue, oldValue);
      console.log(newValue === oldValue);
    });

    // 3.監聽reactive數據變化後，獲取普通對象
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      {
        deep: true,
      }
    );

    return {
      message,
      info,
    };
  },
};
</script>

<style lang="scss" scoped></style>
