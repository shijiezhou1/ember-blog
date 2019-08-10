import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['application_float_card_right', 'md-padding', 'md-whiteframe-1dp'],
  mouseIsIn: false,

  // fakeIndex: computed('hello', function () {
  //   console.log('computed once');
  //   return this.get('hello') ? this.get('hello') : "empty now";
  // }),

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
    },
    scrollTopPos(id) {
      const elmnt = document.getElementsByClassName("directionStyle")[id]
      const currentIdName = elmnt.childNodes[0].getAttribute('data-attr');
      const targetElement = document.getElementById(currentIdName);
      // SUBTRACT MARGIN-TOP
      scrollTo(document.body, targetElement.offsetTop, 200);
    }
  }
});
