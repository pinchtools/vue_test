// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

export const eventBusComm = new Vue({
  methods: {
    showServer(server) {
      this.$emit('server:show', server);
    },
    updateServer(server) {
      this.$emit('server:update', server);
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
