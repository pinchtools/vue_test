<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers" @click="showDetails(server)">
                Server #{{ server.id }} status {{server.status}}
            </li>
        </ul>
    </div>
</template>

<script>
  import { eventBusComm } from "../../main";

  export default {
    data() {
      return {
        selectedServer: null,
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Warning'},
          {id: 4, status: 'Normal'},
        ]
      };
    },
    created() {
      eventBusComm.$on('server:update', (server) => {
        this.selectedServer = server;
      })
    },
    methods: {
      showDetails(server) {
        this.selectedServer = server;
        eventBusComm.showServer(server);
      }
    }
  };
</script>

<style>

</style>
