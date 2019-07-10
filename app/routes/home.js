import Route from '@ember/routing/route';

/**
 * the basic page for home
 *
 * @class home
 * @uses ember/routing/route
 * @namespace Route
 *
 */
export default Route.extend({
  model() {
    return this.store.findAll('home');
  }
});
