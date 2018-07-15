const state = {
  leftPanel: true,
};

const mutations = {
  SET_LEFT_PANEL(state, newValue) {
    state.leftPanel = newValue;
  },
};

const actions = {
  switchLeftPanel({ commit }) {
    commit('SET_LEFT_PANEL', !state.leftPanel);
  },
  setLeftPanel({ commit }, newValue) {
    commit('SET_LEFT_PANEL', newValue);
  },
};

export default {
  state,
  mutations,
  actions,
};
