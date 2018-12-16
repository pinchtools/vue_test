<template>
  <div>
    <p>{{title}}</p>
    <input type="text" v-on:input="changeTitle"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
