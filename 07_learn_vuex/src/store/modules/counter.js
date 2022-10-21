const counter = {
  namespaced: true,
  state: () => ({
    // 訪問: $store.state.counter.count
    count: 99,
  }),
  mutations: {
    // 訪問: $store.commit('counter/incrementCount')
    incrementCount(state) {
      state.count++;
    },
  },
  getters: {
    // 訪問: $store.getters['counter/doubleCount']
    doubleCount(state, getters, rootState) {
      console.log(state.count, rootState.rootCounter);
      return state.count + rootState.rootCounter;
    },
  },
  actions: {
    // 訪問: store.dispatch('counter/incrementCountAction');
    incrementCountAction(context) {
      context.commit('incrementCount');
    },
  },
};
export default counter;
