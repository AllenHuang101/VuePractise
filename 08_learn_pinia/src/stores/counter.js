// 定義關於counter的store
import { defineStore } from 'pinia';
import useUser from './user';

const useCounter = defineStore('counter', {
  state: () => ({
    count: 99,
    friends: [
      { id: 111, name: 'why' },
      { id: 112, name: 'kobe' },
      { id: 113, name: 'james' },
    ],
  }),
  getters: {
    // 1.基本使用
    doubleCount(state) {
      return state.count * 2;
    },

    // 2.一個getter引入另外一個getter
    doubleCountAddOne() {
      // this 是 store 實例
      return this.doubleCount + 1;
    },
    // 3.getters返回一個函數
    getFriendById(state) {
      return function (id) {
        return state.friends.find((x) => x.id === id);
      };
    },

    // 4.getters中用到別的store中的數據
    showMessage(state) {
      // 1.獲取user信息
      const userStore = useUser();

      return `name: ${userStore.name}-count: ${state.count}`;
    },
  },
  actions: {
    increment(state) {
      this.count++;
    },
    incrementNum(num) {
      this.count += num;
    },
    randomCounter() {},
  },
});

export default useCounter;
