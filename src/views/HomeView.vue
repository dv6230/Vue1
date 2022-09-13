<template>
  <div class="home">
    <div class="w-100">
      content : {{ message }}
    </div>
    <div class="w-100">
      vuex : {{ vuexContent }}
    </div>
    <div class="d-flex justify-content-center mt-3">
      <div class="col-6">
        <input class="form-control" type="text" v-model="editContent">
        <button class="btn btn-success mt-3" @click="click()">送出</button>
      </div>
    </div>
  </div>
</template>

<script>
import * as fetchapi from '../js/FetchAPI'

export default {
  name: 'HomeView',
  data() {
    return {
      message: '',
      vuexContent: '',
      editContent: ''
    }
  },
  created() {
    this.vuexContent = this.$store.state.test
    fetchapi.fetchPostApi('api/test/GetApi', {})
      .then(result => {
        this.message = result.data
      })
  },
  methods: {
    click() {
      this.$store.dispatch('updateTest', this.editContent)
      this.updateContent()
    },
    updateContent() {
      this.vuexContent = this.$store.state.test
    }
  }
};
</script>
