import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return true;
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('category', this.store.findAll('category'));
    this.transitionTo('home');
  }
});
