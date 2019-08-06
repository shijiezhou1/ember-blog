import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
  model() {
    return this.store.findAll('post', {reload: true});
  },
  /**
   * Create even and odd posts structure
   *
   * @param controller
   * @param model
   */
  setupController: function (controller, model) {
    // controller.set('post', model);
    var evenArr = A([]),
      oddArr = A([]);
    model.forEach((value, index) => {
      // 0 is false
      // 1 is true
      if (!(index % 2)) {
        evenArr.push(value);
      } else {
        oddArr.push(value);
      }

    });
    controller.set('evenPost', evenArr);
    controller.set('oddPost', oddArr);
  },
  // renderTemplate() {
  //   this.render('home', {
  //     into: 'application',
  //     outlet: 'onlyApp'
  //   });
  // }
});
