import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

import {
  findInputByLabel,
  findLabelByText,
  findInputByName,
  findByAutoId
} from '../helpers/finders';

let app;
const { run } = Ember;

module('Integration: Finders', {
  beforeEach() {
    app = startApp();
    visit('/');
  },

  afterEach() {
    run(app, 'destroy');
  }
});

test('#findLabelByText finds the label by the label text', function(assert) {
  assert.expect(1);

  let label;

  andThen(function() {
    label = findLabelByText('Email');

    assert.equal('Email', label.text(), 'expected John Doe to be the input value');
  });
});

test('#findInputByLabel finds the input by the label text', function(assert) {
  assert.expect(1);

  let label;
  let input;

  andThen(function() {
    label = findLabelByText('Name');
    input = findInputByLabel(label);

    assert.equal('John Doe', input.val(), 'expected John Doe to be the input value');
  });
});

test('#findByAutoId find a button with autoId', (assert) => {
  assert.expect(1);

  let button = findByAutoId('first-target-btn');
  assert.equal(button.length, 1);
});

test('#findInputByName find input by name', (assert) => {
  assert.expect(1);

  let input = findInputByName('node-2-input');
  assert.equal(input.val(), 'John Doe');
});
