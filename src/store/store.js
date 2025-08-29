import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topics: []
  },
  mutations: {
    ADD_TOPIC(state, payload) {
      state.topics.push(payload);
    }
  },
  actions: {
    addTopic(context, payload) {
      context.commit('ADD_TOPIC', payload);
    }
  }
})