import Route from '@ember/routing/route';

export default Route.extend({
  model() {
  },
  setupController(controller, model) {
    this._super(...arguments);
    // TODO thinking of way to wrap up the post under the post route instead on the application. The applicaiton is only for the general rendering stuff
    controller.set('post', this.store.findAll('post'));
    controller.set('category', this.store.findAll('category'));
  }
});
