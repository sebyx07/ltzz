import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('homepage', {path: '/'});
  this.route('login');
  this.route('register');
  this.route('organization', {path: '/:name'}, function() {
    this.route('private-conversation', {path: '/:username'});
  });
  this.route('user-profile', {path: '/:id'});
});

export default Router;
