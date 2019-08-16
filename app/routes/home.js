import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // TODO it needs a sorting list because it cache last record
  },
  actions: {
    refreshModel() {
      this.refresh();
    }
  }
  // renderTemplate() {
  //   this.render('home', {
  //     into: 'application',
  //     outlet: 'onlyApp'
  //   });
  // }
});
