import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    // mutations: {
    //     TEST(state, status) {      //status -> payload （載荷）
    //         state.test = status;
    //     }
    // },
    actions: {
        updateTest(context, status) {
            context.commit('TEST', status)     // mutation 中定義方法
        },
        updateValue1(context,data){
            context.commit('EditValue1',data)
        }
    },
    modules: {

    },
    getters: {

    }
})