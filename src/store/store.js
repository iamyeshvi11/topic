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
    },
     DELETE_TOPIC(state, index) {
      state.topics.splice(index, 1); 
    }
  },
  actions: {
    addTopic(context, payload) {
      context.commit('ADD_TOPIC', payload);
    },
    deleteTopic(context, index) {
      context.commit('DELETE_TOPIC', index);
    }
  }
})