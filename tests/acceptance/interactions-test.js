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
  clickByLabel,
  clickButton,
  clickLink,
  clickRadioByLabel,
  fillInByLabel,
  selectByLabel,
  clickByAutoId,
  fillInByAutoId,
  fillInByName,
  chooseFromDropdown
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

test('#clickByLabel finds a checkbox and checks it', (assert) => {
  andThen(clickByLabel('This is the second checkbox'));
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
  assert.expect(2);

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
  assert.expect(2);

  let targetInput = 'form input.node-2';
  let targetValue = 'Jane Doe';

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
  assert.expect(1);

  andThen(selectByLabel('Label for first select', 'Value 2'));
  andThen(() => {
    let selectedOption = find('option:selected');
    assert.equal('value2', selectedOption.val(), 'expected option 2 to be selected');
  });
});


test('#clickByAutoId finds a button by autoId and clicks it', (assert) => {
  assert.expect(1);

  clickByAutoId('first-target-btn');
  andThen(assertHasMessage(assert, 'First target button clicked'));
});

test('#fillInByAutoId fills in input by autoId', (assert) => {
  assert.expect(2);

  let targetInput = 'form input.node-2';
  let targetValue = 'Jane Doe';

  andThen(() => {
    let val = find(targetInput).val();
    assert.notEqual(val, targetValue, 'did not expect the input to contain the target value yet');
  });

  fillInByAutoId('node-2-input', targetValue);

  andThen(() => {
    let val = find(targetInput).val();
    assert.equal(val, targetValue, 'expected the input to contain the target value');
  });
});

test('#fillInByName fills input by name', (assert) => {
  assert.expect(2);

  let targetInput = 'form input.node-2';
  let targetValue = 'Jane Doe';

  andThen(() => {
    let val = find(targetInput).val();
    assert.notEqual(val, targetValue, 'did not expect the input to contain the target value yet');
  });

  fillInByName('node-2-input', targetValue);

  andThen(() => {
    let val = find(targetInput).val();
    assert.equal(val, targetValue, 'expect the input to have the target value');
  });
});

test('#chooseFromDropdown selects a dropdown option by option text', (assert) => {
  assert.expect(2);

  let selectedOption = find('option:selected');
  assert.equal(selectedOption.val(), 'value1', 'expected selector to have the default value');

  chooseFromDropdown('Value 2');

  andThen(() => {
    selectedOption = find('option:selected');
    assert.equal(selectedOption.val(), 'value2', 'expected option 2 to be selected');
  });
});
