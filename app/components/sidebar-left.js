import Component from '@ember/component';

export default Component.extend({
  classNames: ['application_float_card_left', 'md-whiteframe-1dp'],
  numOfRows: "",
  didRender() {
    this.numOfRows = this.get('category').get('length');
  },
  actions: {
    redirectToLink(link) {
      this.get('router').transitionTo(`home/${link}`);
    }
  }
});
