<template>
<div>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1>{{ msg }}</h1>
    </div>
  </div>
  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Kubernete安装界面'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
