import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state () {
    return {
      basketItems: [],
    }
  },
  mutations: {
    addProduct (state, payload) {
      state.basketItems.push(payload.product)
    }
  },
  plugins: [createPersistedState({
    key: 'app-data',
  })],
})

export default store