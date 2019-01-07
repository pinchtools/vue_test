<template>
    <div class="col-xs-12 col-sm-6" v-if="server">
      <h1>{{server.name}}</h1>
      <p>Status: {{server.status}}</p>
      <button @click="changeStatus()">Change status</button>
      <p>Server Details are currently not updated</p>
    </div>

</template>

<script>
  import { eventBusComm } from "../../main";

  export default {
    data() {
      return {
        server: null
      }
    },
    methods: {
      changeStatus() {
        this.server.status = 'Critical';
        eventBusComm.updateServer(server);
      }
    },
    created() {
      eventBusComm.$on('server:show', (server) => {
        this.server = server;
      })
    }
  }
</script>

<style>

</style>
