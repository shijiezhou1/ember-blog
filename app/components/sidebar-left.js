import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['application_float_card_left'],
  numOfRows: "",
  didRender() {
    this.numOfRows = this.get('category').get('length');
  },
  actions: {
    redirectToLink(link) {
      console.log(link);
      this.get('router').transitionTo(`home/${link}`);
    }
  }
});
