import { reactive } from 'vue';
import axios from 'axios';

const state = reactive({
  token: null,
  loading: false,
})

const mutations = {
  SET_TOKEN (state, payload) {
    state.token = payload;
  },
  LOADING_PENDING (state) {
    state.loading = true;
  },
  LOADING_SUCCESS (state) {
    state.loading = false;
  }
}

const actions = {
  login({ commit }) {
    commit('LOADING_PENDING');
    axios.post('/api/login').then((response) => {
      const { token } = response.data;
      localStorage.setItem('token', token);
      commit('SET_TOKEN', token);
      commit('LOADING_SUCCESS')
    });
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      localStorage.removeItem('token');
      commit('SET_TOKEN', null);
      resolve();
    });
  },
}

const getters = {
  token: state => state.token,
  loading: state => state.loading,
}

const loginModule = {
  state,
  mutations,
  actions,
  getters
}

export default loginModule;
