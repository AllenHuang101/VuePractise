<template>
  <div>
    <h2>message: {{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <hr />
    <h2>帳號: {{ account.username }}</h2>
    <h2>密碼: {{ account.password }}</h2>
    <button @click="changeAccount">修改account</button>
    <hr />
    <!-- 默認情況下在template中使用ref時，vue會自動對其進行解包(取出其中value) -->
    <h2>當前計數: {{ counter }}</h2>
    <button @click="increment">修改counter</button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    // 1.定義普通的數據: 可以正常被使用
    // 缺點: 數據不是響應式
    const message = 'Hello World';
    const changeMessage = () => {
      message = '您好阿~~~';
      console.log(message);
    };

    // 2.定義響應式數據
    // 2.1 reactive函數: 定義複雜類型的數據(對象, 數組)
    const account = reactive({
      username: 'Allen',
      password: '123456',
    });
    const changeAccount = () => {
      account.username = 'Kobe';
    };

    // 2.2 ref函數: 定義簡單類型的數據(也可以定義複雜類型的數據)
    // counter定義響應式數據
    const counter = ref(0);
    const increment = () => {
      counter.value++;
    };

    return {
      message,
      changeMessage,
      account,
      changeAccount,
      counter,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
