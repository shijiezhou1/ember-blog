import Route from '@ember/routing/route';

export default Route.extend({
  model() {
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('post', this.store.findAll('post'));
    controller.set('category', this.store.findAll('category'));
  }
});
