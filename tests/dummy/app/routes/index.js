import Ember from 'ember';

const {
  Route,
  set
} = Ember;

export default Route.extend({
  actions: {
    buttonClicked(text)  {
      set(this.controller, 'buttonClickedText', text);
    }
  }
});
