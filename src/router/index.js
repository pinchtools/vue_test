import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Exercice1 from '@/components/Exercice1';
import Exercice2 from '../components/Exercice2';
import Exercice3 from '../components/Exercice3';
import Exercice4 from '../components/Exercice4';
import Exercice5 from '../components/Exercice5';
import TheMonsterSlayer from '../components/TheMonsterSlayer';
import ComponentsStart from '../components/ComponentsStart';
import ComponentsComm from '../components/ComponentsComm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/exercice1',
      name: 'Exercice1',
      component: Exercice1,
    },
    {
      path: '/exercice2',
      name: 'Exercice2',
      component: Exercice2,
    },
    {
      path: '/exercice3',
      name: 'Exercice3',
      component: Exercice3,
    },
    {
      path: '/exercice4',
      name: 'Exercice4',
      component: Exercice4,
    },
    {
      path: '/exercice5',
      name: 'Exercice5',
      component: Exercice5,
    },
    {
      path: '/themonsterslayer',
      name: 'TheMonsterSlayer',
      component: TheMonsterSlayer,
    },
    {
      path: '/components_start',
      name: 'ComponentsStart',
      component: ComponentsStart,
    },
    {
      path: '/components_comm',
      name: 'ComponentsComm',
      component: ComponentsComm,
    },

  ],
});
