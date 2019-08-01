import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('post', { path: '/post/:post_id' });
  this.route('home');
  this.route('self');
  this.route('tech');
  this.route('heated');
  this.route('design');
  this.route('category');
});

Router.reopen({
  location: 'hash'
});

export default Router;
