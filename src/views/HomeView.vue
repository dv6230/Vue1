<template>
  <div class="home">
    content : {{ message }}
  </div>
</template>

<script>
import * as fetchapi from '../js/FetchAPI'

export default {
  name: 'HomeView',
  data() {
    return {
      message: ''
    }
  },
  created() {
    let param = { lor: 123, gtjl: 54 }
    fetchapi.fetchPostApi('api/test/GetApi', param)
      .then(result => {
        this.message = result.data
      })
  }
};
</script>
