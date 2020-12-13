<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link :to="{name: 'landingPage'}">Home</router-link>
      <router-link :to="{name: 'form'}">Form</router-link>
    </div>
    <book-list></book-list>
    <router-view></router-view>
  </div>
</template>

<script>
import BookList from './components/BookList';

export default {
  name: 'app',
  components: {
    BookList,
  },
};
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
