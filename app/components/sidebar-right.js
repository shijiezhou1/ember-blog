import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['application_float_card_right'],
  mouseIsIn: false,
  hello: '',

  // TODO make the component listens to the ember-data
  didInsertElement() {
    this._super(...arguments);
  },

  fakeIndex: computed('hello', function () {
    console.log('compute works!');
    return 'nothing now';
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
      this.set('hello', 'change hello now');
      console.log(this.hello);
    }
  }
});
