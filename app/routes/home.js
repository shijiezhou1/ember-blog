import Route from '@ember/routing/route';

/**
 * the basic page for home
 *
 * @class home
 * @uses ember/routing/route
 * @namespace Route
 * @extends ember/routing/route
 *
 */
export default Route.extend({
  model() {
    let homePost = this.get('store').find('home');
    console.log('typeof home :', typeof homePost);
    homePost.then((res)=> {
      console.dir(res)
    })
    return homePost;
    // return this.store.findRecord('home', params.home_id);
  }
});
