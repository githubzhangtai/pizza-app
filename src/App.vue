<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  components:{
    "app-header":Header
  },
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
