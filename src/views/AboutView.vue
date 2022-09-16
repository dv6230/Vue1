<template>
  <div class="about">
    <h3 class="mb-3">測試呼叫 API 與 cookie</h3>
    <div class="row col-12 d-flex justify-content-center mh m-0">
      <div class="border col-4 d-flex align-items-center justify-content-center">
        <p class=" m-0">{{ result.status }}</p>
      </div>
      <div class="border col-4 d-flex align-items-center justify-content-center">
        <p class="m-0">{{ result.message }}</p>
      </div>
    </div>
    <div class="col-12">
      <button class="col-4 btn btn-primary m-3" @click="click()">click cookie</button>
      <button class="col-4 btn btn-warning m-3" @click="clearCookie()">清除 cookie</button>
    </div>
  </div>
</template>

<script>
import * as fetchapi from '../js/FetchAPI'

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
      fetchapi.fetchPostApi('api/test/GetCookie/cookie', {}).then(r => this.result = r).catch(error => { alert('連線失敗') } )
    },
    clearCookie() {
      console.log('clear');
      document.cookie = "key=;expires=" + new Date(0).toUTCString()
    }
  }
};
</script>

<style>
.mh {
  height: 70px;
}
</style>
