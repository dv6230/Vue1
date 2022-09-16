<template>
  <div class="home">
    <h3 class="mb-3">測試 asp net core AES 解密 與 JS 加密</h3>
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
    <div class="d-flex justify-content-center mt-3">
      <div class="col-6">
        {{ encode }} <br> {{ decode }}
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
      editContent: '',
      encode: '',
      decode: ''
    }
  },
  created() {
    this.vuexContent = this.$store.state.test
    fetchapi.fetchPostApi('api/test/GetApi', {})
      .then(result => {
        this.message = result.data
      })/*.catch(error => { alert(error) } )*/
  },
  methods: {
    click() {
      this.$store.dispatch('updateTest', this.editContent)
      this.updateContent()
    },
    updateContent() {
      this.vuexContent = this.$store.state.test

      // const CryptoJS = require('crypto-js')
      // const secretKey = 'ThisIsMyKey'
      // const ciphertext = CryptoJS.AES.encrypt(this.vuexContent, secretKey).toString()
      // this.encode = ciphertext
      // const originalText = CryptoJS.AES.decrypt(ciphertext, secretKey).toString(CryptoJS.enc.Utf8)
      // this.decode = originalText

      fetchapi.loginAPI(this.vuexContent).then(result => this.decode = result)

    }
  }
};
</script>
