import Component from '@ember/component';

export default Component.extend({
  classNames: ['application_nav', 'md-whiteframe-2dp'],
  actions: {
    HOME: function () {
      this.get('router').transitionTo('home');
    },
    SELF: function () {
      this.get('router').transitionTo('self');
    },
    TECH: function () {
      this.get('router').transitionTo('tech');
    },
    HEATED: function () {
      this.get('router').transitionTo('heated');
    },
    DESIGN: function () {
      this.get('router').transitionTo('design');
    },
    CULTURE: function () {
      this.get('router').transitionTo('culture');
    },
    MORE: function () {
      this.get('router').transitionTo('more');
    }
  }
});
