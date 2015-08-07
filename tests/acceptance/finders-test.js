import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

import {
  findInputByLabel,
  findLabelByText
} from '../helpers/finders';

let app;
const { run } = Ember;

module('Integration: Finders', {
  beforeEach() {
    app = startApp();
  },

  afterEach() {
    run(app, 'destroy');
  }
});

test('#findLabelByText finds the label by the label text', function(assert) {
  assert.expect(1);

  let label;

  visit('/');
  andThen(function() {
    label = findLabelByText('Email');

    assert.equal('Email', label.text(), 'expected John Doe to be the input value');
  });
});

test('#findInputByLabel finds the input by the label text', function(assert) {
  assert.expect(1);

  let label;
  let input;

  visit('/');
  andThen(function() {
    label = findLabelByText('Name');
    input = findInputByLabel(label);

    assert.equal('John Doe', input.val(), 'expected John Doe to be the input value');
  });
});
