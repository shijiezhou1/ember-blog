import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('home', { path: '/home' }, function () {
    this.route('view', { path: ':home_id' });
  });
  this.route('tech');
  this.route('design');
  this.route('culture');
});

export default Router;
