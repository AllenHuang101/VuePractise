export default {
  state: () => ({
    // 服務器的數據
    banner: [],
    recommend: [],
  }),
  mutations: {
    changeBanners(state, banners) {
      state.banners = banners;
    },
    changeRecommends(state, recommends) {
      state.recommends = recommends;
    },
  },
  actions: {
    fetchHomeMulidataAction(context) {
      // 1.返回Promise, 給 Promise設置 then
      fetch('http://123.207.32.32:8000/home/multidata').then((res) => {
        res.json().then((data) => {
          console.log('1', data);
        });
      });

      // 2.Promise 鏈式調用
      fetch('http://123.207.32.32:8000/home/multidata')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('2', data);
        });

      // 3.async/await
      return new Promise(async (resolve, reject) => {
        const res = await fetch('http://123.207.32.32:8000/home/multidata');
        const data = await res.json();
        // console.log('3', data);
        context.commit('changeBanners', data.data.banner.list);
        context.commit('changeRecommends', data.data.recommend.list);

        resolve(data.data);
      });
    },
  },
};
