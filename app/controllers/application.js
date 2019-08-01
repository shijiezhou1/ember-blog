import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    onRoute(routeName) {
      this.transitionToRoute(routeName);
    }
  }
});
