import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: 100,
        test: 'content'
    },
    mutations: {
        TEST(state, status) {      //status -> payload （載荷）
            state.test = status;
        }
    },
    actions: {
        updateTest(context, status) {
            context.commit('TEST', status)     // mutation 中定義方法
        }
    },
    modules: {

    },
    getters: {

    }
})