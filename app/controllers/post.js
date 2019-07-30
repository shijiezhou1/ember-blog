import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    backHome() {
      this.transitionToRoute('home');
    }
  }
});
