import Ember from 'ember';

const { Route } = Ember;
const set = Ember.set;

export default Route.extend({
  actions: {
    buttonClicked(text)  {
      set(this.controller, 'buttonClickedText', text);
    }
  }
});
