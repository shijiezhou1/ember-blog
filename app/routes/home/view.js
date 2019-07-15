import Route from '@ember/routing/route';

export default Route.extend({

  model: function (params) {
    this.store.findRecord('home', params.home_id);

  },
  setupController: function (controller, model) {
    controller.set('model', model);
  }
});
