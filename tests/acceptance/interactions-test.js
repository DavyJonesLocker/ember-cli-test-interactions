import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

import {
  assertHasMessage
} from '../helpers/test-assertions';

import {
  checkByLabel,
  clickButton,
  clickLink,
  clickRadioByLabel,
  fillInByLabel,
  selectByLabel
} from '../helpers/interactions';

let app;
const { run } = Ember;

module('Acceptance: Interactions', {
  beforeEach() {
    app = startApp();
    visit('/');
  },

  afterEach() {
    run(app, 'destroy');
  }
});

test('#checkByLabel finds a checkbox and checks it', (assert) => {
  andThen(checkByLabel('This is the second checkbox'));
  andThen(() => {
    let checkedInput = find('#checkbox2:checked');

    assert.equal('second_checkbox', checkedInput.val(), `expected the second checkbox to be checked but found ${checkedInput.val()}`);
  });
});

test('#clickButton finds a button element by its text and clicks it', function(assert) {
  assert.expect(1);

  andThen(clickButton('First Target Button'));
  andThen(assertHasMessage(assert, 'First target button clicked'));
});

test('#clickButton finds an input of type button by its text and clicks it', function(assert) {
  assert.expect(1);

  andThen(clickButton('Second Target Button'));
  andThen(assertHasMessage(assert, 'Second target button clicked'));
});

test('#clickLink finds a link by its text and clicks it', function(assert) {
  assert.expect(1);

  andThen(clickLink('First link'));
  andThen(() => {
    let url =  currentURL();
    assert.equal(url, '/first-link-target');
  });
});

test('#clickRadioByLabel adds checked attribute to corresponding input', (assert) => {
  andThen(clickRadioByLabel('Label for first radio'));
  andThen(() => {
    let checkedInput = find('input:checked');
    assert.equal('radio_1', checkedInput.val(), 'expected radio 1 to be checked');
  });
  andThen(clickRadioByLabel('Label for second radio'));
  andThen(() => {
    let checkedInput = find('input:checked');
    assert.equal('radio_2', checkedInput.val(), 'expected radio 2 to be checked');
  });
});

test('#fillInByLabel enters text into an input corresponding to a label', function(assert) {
  let targetInput = 'form input.node-2';
  let targetValue = 'Jane Doe';

  assert.expect(2);

  andThen(() => {
    let val = find(targetInput).val();
    assert.notEqual(val, targetValue, 'did not expect the input to contain the target value yet');
  });

  andThen(fillInByLabel('Name', targetValue));
  andThen(() => {
    let val = find(targetInput).val();
    assert.equal(val, targetValue, 'expected the input to contain the target value');
  });
});

test('#selectByLabel selects a dropdown option by label and option', (assert) => {
  andThen(selectByLabel('Label for first select', 'Value 2'));
  andThen(() => {
    let selectedOption = find('option:selected');
    assert.equal('value2', selectedOption.val(), 'expected option 2 to be selected');
  });
});
