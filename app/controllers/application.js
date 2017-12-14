import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  stats: storageFor('stats'),

  actions: {
    countUp() {
      this.incrementProperty('stats.counter');
    },
    doubleCounter() {
      const val = +this.get('stats.counter');
      this.set('stats.counter', val * 2);
    },
    resetCounter() {
      this.get('stats').clear();
    }
  },
});
