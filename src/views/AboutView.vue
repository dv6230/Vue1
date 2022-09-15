<template>
  <div class="about">
    <div class="row col-12 d-flex justify-content-center mh">
      <div class="border col-4 d-flex align-items-center justify-content-center">
        <p class=" m-0">{{ result.status }}</p>
      </div>
      <div class="border col-4 d-flex align-items-center justify-content-center">
        <p class="m-0">{{ result.message }}</p>
      </div>
    </div>
    <button class="col-4 btn btn-primary m-3" @click="click()">click cookie</button>
  </div>
</template>

<script>
import * as fetchapi from '../js/FetchAPI'
import CryptoJS from 'crypto-js'

export default {
  name: 'AboutView',
  data() {
    return {
      result: {
        status: '',
        message: ''
      },
    }
  },
  created() {

  },
  methods: {
    click() {
      fetchapi.fetchPostApi('api/test/GetCookie/cookie', {}).then(r => this.result = r)
    },
    updateContent() {

    }
  }
};
</script>

<style>
.mh {
  height: 70px;
}
</style>
