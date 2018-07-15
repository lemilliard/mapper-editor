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
  getIndexOfFile(state, file) {
    return state.files.findIndex(f => f.id === file.id);
  },
  getById(state, id) {
    return state.files[id];
  },
  getCurrentFile(state) {
    return state.files[state.active];
  },
};

const mutations = {
  SELECT(state, index) {
    state.active = index;
  },
  NEW_FILE(state) {
    const newIndex = state.files.length;
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
    state.files = state.files.filter(file => file.id !== id);
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
