<template>
  <div>
    <section class="row">
      <div class="small-6 columns">
        <h1 class="text-center">YOU</h1>
        <div class="healthbar">
          <div class="healthbar text-center filled" :style="{width: you_health}">
            {{you_health}}
          </div>
        </div>
      </div>
      <div class="small-6 columns">
        <h1 class="text-center">MONSTER</h1>
        <div class="healthbar">
          <div class="healthbar text-center filled"  :style="{width: monster_health}">
            {{monster_health}}
          </div>
        </div>
      </div>
    </section>
    <section class="row controls">
      <div class="small-12 columns">
        <button id="start-game" @click="start()">START NEW GAME</button>
      </div>
    </section>
    <section class="row controls">
      <div class="small-12 columns">
        <button id="attack" @click="attack('you')">ATTACK</button>
        <button id="special-attack" @click="specialAttack('you')">SPECIAL ATTACK</button>
        <button id="heal" @click="heal('you')">HEAL</button>
        <button id="give-up" @click="giveUp()">GIVE UP</button>
      </div>
    </section>
    <section class="row log">
      <div class="small-12 columns">
        <ul>
          <li class='turn' v-for="log in logs" :class="log.player + '-turn'">
            {{log.message}}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'TheMonsterSlayer',
    data() {
      return {
        you_health: '100%',
        monster_health: '100%',
        logs: [],
        currentPlayer: '',
      };
    },
    methods: {
      start() {
        this.you_health = this.monster_health = '100%';
        this.logs = [];
      },
      attack(by) {
        this.currentPlayer = by;
        var player = this.target(by);
        var score = this.randomFromInterval(10, 20);
        this[player + '_health'] = (parseInt(this[player + '_health']) - score) + '%';
        this.logs.push({player: by, message: by + ' hits ' + player + ' by ' + score});
      },
      specialAttack(by) {
        this.currentPlayer = by;
        var player = this.target(by);
        var score = this.randomFromInterval(20, 40)
        this[player + '_health'] = (parseInt(this[player + '_health']) - score) + '%';
        this.logs.push({player: by, message: by + ' hits ' + player + ' by ' + score});
      },
      heal(by) {
        this.currentPlayer = by;
        var health = parseInt(this[by + '_health']);
        if (health == 100) {
          this.logs.push({player: by, message: by + ' heals by 0'});
          return;
        }
        var score = this.randomFromInterval(5, 20);
        this[by + '_health'] = (health +  score) + '%';
        this.logs.push({player: by, message: by + ' heals by ' + score});
      },
      giveUp() {
        this.start();
      },
      target(by) {
        return (by == 'you') ? 'monster' : 'you';
      },
      randomFromInterval(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
      }
    },
    watch: {
      currentPlayer() {
        if (this.currentPlayer == 'you') {
          var actions = [this.attack, this.specialAttack, this.heal];
          var action = actions[this.randomFromInterval(0, actions.length - 1)];
          action('monster');
        }
      },
    }
  };
</script>

<style scoped>
  @import '../assets/css/foundation.min.css';

  .text-center {
    text-align: center;
  }

  .healthbar {
    width: 100%;
    height: 40px;
    background-color: #eee;
    margin: auto;
    transition: width 500ms;
  }
  .healthbar.filled {
    background-color: green;
    margin: 0;
    color: white;
  }


  .controls, .log {
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 3px 6px #ccc;
  }

  .turn {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
  }

  .log ul {
    list-style: none;
    font-weight: bold;
    text-transform: uppercase;
  }

  .log ul li {
    margin: 5px;
  }

  .log ul .you-turn {
    color: blue;
    background-color: #e4e8ff;
  }

  .log ul .monster-turn {
    color: red;
    background-color: #ffc0c1;
  }

  button {
    font-size: 20px;
    background-color: #eee;
    padding: 12px;
    box-shadow: 0 1px 1px black;
    margin: 10px;
  }

  #start-game {
    background-color: #aaffb0;
  }

  #start-game:hover {
    background-color: #76ff7e;
  }

  #attack {
    background-color: #ff7367;
  }

  #attack:hover {
    background-color: #ff3f43;
  }

  #special-attack {
    background-color: #ffaf4f;
  }

  #special-attack:hover {
    background-color: #ff9a2b;
  }

  #heal {
    background-color: #aaffb0;
  }

  #heal:hover {
    background-color: #76ff7e;
  }

  #give-up {
    background-color: #ffffff;
  }

  #give-up:hover {
    background-color: #c7c7c7;
  }
</style>
