import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: 100
    },
    mutations: {
        UPDATE_TOKEN(state, value) {
            state.numbers = value
        }
    },
    actions: {
        set_token(context, number) {
            context.commit("UPDATE_TOKEN", number)
        }
    },
    modules: {
    },
    getters: {
        GetToken: state => {
            return state.token
        },
    }
})