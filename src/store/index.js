import { createStore } from 'vuex'

export default createStore({
  state: {
    pageNumber: 1,
    pageSize: 10,
    loading: false,
    data: { coins: []},
    lastUpdate: Date.now()
  },
  mutations: {
    updatePageNumber(state, val) {
      state.pageNumber += Number(val);
    },
    updatePageSize(state, val) {
      state.pageSize = Number(val);
      state.pageNumber = 1;
    },
    setData(state, data) {
      state.data = { ...data };
    },
    toggleLoading(state) {
      state.loading = !state.loading
    },
    setlastUpdate(state) {
      state.lastUpdate = Date.now()
    }
  },
  actions: {
    async setData({ commit }) {
      commit('toggleLoading');
      const { pageNumber, pageSize} = this.state;
      const limit = pageSize;
      const offset = (pageNumber - 1) * pageSize; 
      const res = await fetch(`https://api.coinranking.com/v1/public/coins/?limit=${limit}&offset=${offset}`, {
        method: 'GET'
      });
      const data = await res.json();
      commit('setData', data.data);
      commit('toggleLoading');
      commit('setlastUpdate');
    },
    updatePageSize({ commit, dispatch }, val) {
      commit('updatePageSize', val);
      dispatch('setData');
    },
    async updatePageNumber({ commit, dispatch }, val) {
      commit('updatePageNumber', val);
      dispatch('setData');
    }
  },
  modules: {
  }
})
