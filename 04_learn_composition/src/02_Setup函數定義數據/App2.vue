<template>
  <div>
    <form>
      帳號: <input type="text" v-model="account.username" /> 密碼:
      <input type="password" v-model="account.password" />
    </form>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
export default {
  setup() {
    // 定義響應式數據: reactive/ref
    // ref 也可以定義複雜的數據
    const info = ref({});

    // 1.reactive的應用場景
    // 1.1 條件1: reactive應用於本地的數據
    // 1.2 條件2: 多個數據之間式有關係的(聚合的數據, 組織在一起會有特定的作用)
    const account = reactive({
      username: 'Allen',
      password: '1234',
    });

    // 2.ref的應用場景: 其他的場景基本都用ref
    // 2.1 定義本地的一些簡單數據
    const message = ref('Hello World');
    const counter = ref(0);

    // 2.2 定義從網路中獲取的數據也是使用ref
    const musics = ref([]);
    onMounted(() => {
      const serverMusics = ['海闊天空', '小蘋果', '野狼'];
      musics.value = serverMusics;
    });

    return {
      account,
    };
  },
};
</script>

<style lang="scss" scoped></style>
