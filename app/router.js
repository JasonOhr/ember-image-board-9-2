import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('pins', function() {
    this.route('add-image-portal');
  });
  this.route('landing', {path: '/'});

  this.route('sessions', function() {
    this.route('create-portal');
  });

  this.route('users', function() {
    this.route('create-portal');
    this.route('show-portal');
  });
});

export default Router;
