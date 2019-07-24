import Route from '@ember/routing/route';

export default Route.extend({
  model() {
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('post', this.store.findAll('post'));
    controller.set('home', this.store.findAll('home'));
  }
});
