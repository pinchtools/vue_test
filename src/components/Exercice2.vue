<template>
  <div>
    <!-- 1) Show an alert when the Button gets clicked -->
    <div>
      <button v-on:click="showAlert">Show Alert</button>
    </div>
    <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
    <div>
      <input v-on:keydown="getTextValue" type="text">
      <p>{{ value }}</p>
    </div>
    <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
    <div>
      <input v-on:keydown.enter="getTextValue" type="text">
      <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Exercice2',
    data() {
      return {
        value: ''
      };
    },
    methods: {
      showAlert: function() {
        alert('Hello');
      },
      getTextValue: function(event) {
        this.value = event.target.value;
      }
    }
  };
</script>
