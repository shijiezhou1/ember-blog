import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  auth: service('auth'),

  classNames: ['application_nav', 'md-whiteframe-2dp'],

  init() {
    this._super(...arguments);
  },

  actions: {
    login() {
      this.get('auth').login();
    }
  }
});
