import Controller from '@ember/controller';

export default Controller.extend({

  setup() {
    // console.log(model)
  },
  actions: {
    HOME: function () {
      this.transitionToRoute('home');
    },
    SELF: function () {
      this.transitionToRoute( 'self' );
    },
    TECH: function () {
      this.transitionToRoute( 'tech' );
    },
    HEATED: function () {
      this.transitionToRoute( 'heated' );
    },
    DESIGN: function () {
      this.transitionToRoute( 'design' );
    },
    CULTURE: function () {
      this.transitionToRoute( 'culture' );
    },
    MORE: function () {
      this.transitionToRoute( 'more' );
    }
  }
});
