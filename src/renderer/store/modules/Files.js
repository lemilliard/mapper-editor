/*
Fichier type:
{
  "name": "(folder name)",
  "path": "",
  "content": [
    {
      "type": "",
      "words": [
        {
          "value": "",
          "matches": []
        }
        ...
      ]
    }
    ...
  ]
}
 */

const state = {
  files: [],
  active: 0,
  editingName: false,
};

const getters = {
  getMaxId(state) {
    if (state.files.length > 0) {
      return Math.max(...state.files.map(f => f.id));
    }
    return -1;
  },
  getIndexById(state, id) {
    return state.files.findIndex(f => f.id === id);
  },
  getById(state, id) {
    return state.files.filter(file => file.id === parseInt(id, 10))[0];
  },
  getCurrentFile(state) {
    return getters.getById(state, state.active);
  },
};

const mutations = {
  SELECT(state, id) {
    if (id === -1) {
      state.active = 0;
    } else {
      state.active = id;
    }
  },
  NEW_FILE(state) {
    const newIndex = getters.getMaxId(state) + 1;
    state.files.push(
      {
        id: newIndex,
        name: `New file ${newIndex + 1}`,
        path: null,
        content: [
          {
            type: '',
            words: [
              {
                value: '',
                matches: [],
              },
            ],
          },
        ],
      },
    );
  },
  CLOSE_FILE(state, id) {
    if (id !== undefined) {
      state.files = state.files.filter(file => file.id !== id);
    } else if (state.files.length > 0) {
      mutations.CLOSE_FILE(state, getters.getCurrentFile(state).id);
    }
    if (state.files.length === 0) {
      mutations.NEW_FILE(state);
    }
    mutations.SELECT(state, getters.getMaxId(state));
  },
  ADD_DICTIONNARY(state, type) {
    console.log(type);
  },
  REMOVE_DICTIONNARY(state, type) {
    console.log(type);
  },
  ADD_WORD(state, type, word) {
    console.log(type, word);
  },
  REMOVE_WORD(state, type, word) {
    console.log(type, word);
  },
  ADD_MATCH(state, type, word, match) {
    console.log(type, word, match);
  },
  REMOVE_MATCH(state, type, word, match) {
    console.log(type, word, match);
  },
  SWITCH_EDITING_NAME(state) {
    state.editingName = !state.editingName;
  },
};

const actions = {
  select({ commit }, index) {
    commit('SELECT', index);
  },
  newFile({ commit }) {
    commit('NEW_FILE');
  },
  closeFile({ commit }, index) {
    commit('CLOSE_FILE', index);
  },
  switchEditingName({ commit }) {
    commit('SWITCH_EDITING_NAME');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
