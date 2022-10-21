import { createStore } from 'vuex';
import { CHANGE_INFO } from './mutation_types';
import homeModule from './modules/home';
import counterModule from './modules/counter';

const store = createStore({
  state: () => ({
    // counter: 100,
    rootCounter: 100,
    name: 'coderwhy',
    level: 100,
    avatarURL: 'http://xxxx',
    friends: [
      { id: 111, name: 'why', age: 20 },
      { id: 112, name: 'kobe', age: 30 },
      { id: 113, name: 'james', age: 25 },
    ],

    // // 服務器的數據
    // banner: [],
    // recommend: [],
  }),
  getters: {
    // 1.基本使用
    doubleCounter(state) {
      return state.counter * 2;
    },
    totalAge(state) {
      return state.friends.reduce((preValue, item) => {
        return preValue + item.age;
      }, 0);
    },
    // 2.在該getters屬性中，獲取其他的getters
    message(state, getters) {
      // 在該getters屬性中，獲取其他getters
      return `name:${state.name} level: ${state.level} friendTotalAge: ${getters.totalAge}`;
    },
    // 3.getters是可以返回一個函數的，調用該函數可以傳入參數
    getFriendById(state) {
      return (id) => {
        const friend = state.friends.find((item) => item.id === id);
        return friend;
      };
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    changeName(state, payload) {
      state.name = payload;
    },
    incrementLevel(state) {
      state.level++;
    },
    [CHANGE_INFO](state, payload) {
      state.level = payload.level;
      state.name = payload.name;
    },
    // changeBanners(state, banners) {
    //   state.banners = banners;
    // },
    // changeRecommends(state, recommends) {
    //   state.recommends = recommends;
    // },
  },
  actions: {
    incrementAction(context) {
      // console.log(context.commit);
      // console.log(context.getters);
      // context.log(context.state);
      context.commit('increment');
    },
    changeNameAction(context, payload) {
      // console.log(payload);
      context.commit('changeName', payload);
    },
    // fetchHomeMulidataAction(context) {
    //   // 1.返回Promise, 給 Promise設置 then
    //   fetch('http://123.207.32.32:8000/home/multidata').then((res) => {
    //     res.json().then((data) => {
    //       console.log('1', data);
    //     });
    //   });

    //   // 2.Promise 鏈式調用
    //   fetch('http://123.207.32.32:8000/home/multidata')
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log('2', data);
    //     });

    //   // 3.async/await
    //   return new Promise(async (resolve, reject) => {
    //     const res = await fetch('http://123.207.32.32:8000/home/multidata');
    //     const data = await res.json();
    //     // console.log('3', data);
    //     context.commit('changeBanners', data.data.banner.list);
    //     context.commit('changeRecommends', data.data.recommend.list);

    //     resolve(data.data);
    //   });
    // },
  },
  modules: {
    home: homeModule,
    counter: counterModule,
  },
});

export default store;
