<template>
  <div id="app">
    <Header />
    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    UserList,
    Header
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
