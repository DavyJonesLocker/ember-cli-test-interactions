import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

import {
  findByLabel,
  findLabelByText
} from '../helpers/finders/form-elements';

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

test('#findByLabel finds the input by the label text', function(assert) {
  assert.expect(1);

  let label;
  let input;

  visit('/');
  andThen(function() {
    label = findLabelByText('Name');
    input = findByLabel(label);

    assert.equal('John Doe', input.val(), 'expected John Doe to be the input value');
  });
});

test('#findByLabel finds the select by the label text', function(assert) {
  assert.expect(1);

  let label;
  let select;

  visit('/');
  andThen(function() {
    label = findLabelByText('Label for second select');
    select = findByLabel(label);

    assert.equal('select_2', select.attr('name'), 'expected John Doe to be the input value');
  });
});
