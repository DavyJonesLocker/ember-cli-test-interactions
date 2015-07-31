import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('firstLink', { path: '/first-link-target' });
  this.route('secondLink', { path: '/second-link-target' });
});
