<template>
  <div>
    <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{firstname}} ({{age}})</p>
    <!-- 2) Output your age, multiplied by 3 -->
    <p>{{multiplyAge(3)}}</p>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p>{{random()}}</p>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
      <img style="width:100px;height:100px" v-bind:src="googleImg">
    </div>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
      <input type="text" v-bind:value="firstname">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercice1',
  data() {
    return {
      firstname: 'Vincent',
      age: 35,
      googleImg: 'https://i.stack.imgur.com/JGFQ2.jpg?s=48&g=1'
    };
  },
  methods: {
    multiplyAge: function(by) {
      return this.age * by;
    },
    random: function() {
      return Math.random();
    }
  }
};
</script>
