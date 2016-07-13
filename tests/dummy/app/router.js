import Ember from 'ember';
import config from './config/environment';

const { Router: emberRouter } = Ember;

let Router = emberRouter.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('firstLink', { path: '/first-link-target' });
  this.route('secondLink', { path: '/second-link-target' });
});
