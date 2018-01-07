<template>
  <div id="app">
    <linkageMenu/>
  </div>
</template>

<script>
import linkageMenu from './components/linkageMenu'

export default {
  name: 'app',
  components: {
    linkageMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
