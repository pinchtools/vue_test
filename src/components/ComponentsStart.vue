<template>
  <div class="container">
    <server-header/>
    <hr>
    <div class="row">
      <server-list/>
      <server-show/>
    </div>
    <hr>
    <server-footer/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Header from './server/serverHeader';
  import Footer from './server/serverFooter';
  import ServerList from './server/serverList';
  import ServerShow from './server/serverShow';


  Vue.component('server-header', Header);
  Vue.component('server-footer', Footer);
  Vue.component('server-list', ServerList);
  Vue.component('server-show', ServerShow);

  export default {
    name: 'ComponentsStart',
  };
</script>

<style>
  @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
</style>
