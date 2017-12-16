import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  stats: storageFor('stats'),
  likes: storageFor('likes'),

  actions: {
    countUp() {
      this.incrementProperty('stats.counter');
    },
    doubleCounter() {
      const val = +this.get('stats.counter');
      this.set('stats.counter', val * 2);
    },
    resetCounter() {
      this.get('stats').reset();
    },
    clearCounter() {
      this.get('stats').clear();
    },
    addItem() {
      this.get('likes').addObject('' + new Date().getTime());
    },
    clearItems() {
      this.get('likes').clear();
    }
  },
});
