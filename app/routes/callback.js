import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({

  auth: inject.service('auth'),

  beforeModel() {
    this.get('auth').setAccessToken();
    this.get('auth').setIdToken();
    this.transitionTo('/');
  },
});
