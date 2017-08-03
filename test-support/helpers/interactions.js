import Ember from 'ember';
import {
  findByLabel,
  findLabelByText
} from '../helpers/finders/form-elements';

const { isEmpty } = Ember;

export function checkByLabel(labelText) {
  return () => {
    const labelForInput = findLabelByText(labelText);

    click(labelForInput);
  }
}

export function clickButton(text) {
  return () => {
    let button = find(`button:contains('${text}')`);

    if (isEmpty(button)) {
      button = findWithAssert(`input[type="button"][value='${text}']`);
    }

    click(button);
  };
}

export function clickLink(linkText) {
  return () => {
    click(`a:contains('${linkText}')`);
  };
}

export function clickRadioByLabel(label) {
  return () => {
    const labelForInput = findLabelByText(label);
    const input = findByLabel(labelForInput);

    click(input);
  }
}

export function fillInByLabel(label, value) {
  return () => {
    const labelForInput = findLabelByText(label);
    const inputOrTextarea = findByLabel(labelForInput);

    fillIn(inputOrTextarea, value);
    return find(inputOrTextarea).focusout();
  };
}

export  function selectByLabel(label, optionText) {
  return () => {
    const selectId = findWithAssert(`label:contains('${label}')`).attr('for');
    const option = findWithAssert(`#${selectId} option:contains('${optionText}')`);

    fillIn(`#${selectId}`, option.attr('value'))
    .then(() => find(`#${selectId}`).trigger('focusout'));
  }
}
