import Route from '@ember/routing/route';

/**
 * the basic page for home
 * @class home
 * @uses ember/routing/route
 * @namespace Route
 * @extends ember/routing/route
 *
 */
export default Route.extend({
  model() {
    // return this.store.findAll('home');
  },
  setupController: function (controller, model) {
    // controller.set('model', model);
  },
  // renderTemplate() {
  //   this.render('home', {
  //     into: 'application',
  //     outlet: 'onlyApp'
  //   });
  // }
});
