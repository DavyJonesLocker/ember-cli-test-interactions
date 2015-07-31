import Ember from 'ember';
import {
  findInputByLabel,
  findLabelByText
} from '../helpers/finders';

const { isEmpty } = Ember;

export function clickButton(text) {
  return function() {
    let button = find(`button:contains('${text}')`);

    if (isEmpty(button)) {
      button = findWithAssert(`input[type="button"][value='${text}']`);
    }

    click(button);
  };
}

export function clickLink(linkText) {
  return function() {
    click(`a:contains('${linkText}')`);
  };
}

export function fillInByLabel(label, value) {
  return function() {
    const labelForInput = findLabelByText(label);
    const input = findInputByLabel(labelForInput);

    fillIn(input, value);
    return find(input).focusout();
  };
}
