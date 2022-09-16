export default {
    TEST: function (state, data) {      //status -> payload （載荷）
        state.test = data;
    },
    EditValue1 : function(state,data){
        state.value1 = data
    }
}