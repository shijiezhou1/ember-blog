import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['application_float_card_right', 'md-padding'],
  mouseIsIn: false,

  fakeIndex: computed('hello', function () {
    console.log('computed once');
    return this.get('hello') ? this.get('hello') : "empty now";
  }),

  mouseEnter(event) {
    this.set('mouseIsIn', true);
    return false;
  },

  mouseLeave(event) {
    this.set('mouseIsIn', false);
    return false;
  },

  actions: {
    changeHello() {
      this.incrementProperty('hello', 5);
    }
  }
});
