import Ember from 'ember';

export function findInputByLabel(label) {
  return findWithAssert(`#${label.attr('for')}`);
}

export function findLabelByText(text) {
  let label = findWithAssert(`label:contains('${text}')`);

  if (label.length > 1) {
    label = $(label.toArray().findProperty('innerText', text));
  }
  return label;
}
