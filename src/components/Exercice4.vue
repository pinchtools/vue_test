<template>
  <div>
    <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
    <div>
      <button @click="startEffect">Start Effect</button>
      <div id="effect" :class="intervalClass"></div>
    </div>
    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <div :class="['red_border', 'blue_background', 'square_50']">I got no class :(</div>
    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
    <div>
      <input type="text" v-model="myClass">
      <div :class="myClass"></div>
    </div>
    <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
    <div>
      <input type="text" v-model="myClass">
      <input type="text" v-model="myClassBool">
      <div :class="[myClass, {my_class_bool: myClassBool == 'true' }]"></div>
    </div>
    <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
    <div>
      <input type="text" v-model="myBgStyle">
      <div :style="myStyle"></div>
    </div>
    <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
    <div>
      <button v-on:click="startProgress">Start Progress</button>
      <div class="progress_bar" :style="{width: progress + 'px'}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Exercice4',
    data() {
      return {
        isHighlight: true,
        myClass: 'my_class_1',
        myClassBool: 'false',
        myBgStyle: 'red',
        progress: 0,
      };
    },
    computed: {
      intervalClass() {
        return {
          highlight: this.isHighlight,
          shrink: !this.isHighlight,
        };
      },
      myStyle() {
        return {
          backgroundColor: this.myBgStyle,
          width: '100px',
          height: '100px',
        }
      }
    },
    watch: {
      progress() {
        console.log('progress')
        if (this.progress == 100) {
          this.progress = 0;
        }
      }
    },
    methods: {
      startEffect() {
        this.isHighlight = !this.isHighlight;
        setInterval(function() {
          this.isHighlight = !this.isHighlight;
        }.bind(this), 2000);
      },
      startProgress() {
        setInterval(function() {
          this.progress += 10;
        }.bind(this), 2000);
      }
    },
  };
</script>

<style scoped>
  #effect {
    width: 100px;
    height: 100px;
    border: 1px solid black;
  }

  .highlight {
    background-color: red;
    width: 200px !important;
  }

  .shrink {
    background-color: gray;
    width: 50px !important;
  }

  .red_border {
    border: 1px solid red;
  }

  .blue_background {
    background-color: lightblue;
  }

  .square_50 {
    width: 50px;
    height: 50px;
  }

  .my_class_1 {
    width: 50px;
    height: 75px;
    background-color: brown;
  }

  .my_class_2 {
    width: 75px;
    height: 50px;
    background-color: seagreen;
  }

  .my_class_bool {
    width: 40px;
    height: 100px;
    background-color: aquamarine;
  }

  .progress_bar {
    width: 0;
    height: 20px;
    background-color: dodgerblue;
  }
</style>
