import Ember from 'ember';

/**
 * Finds the associated element with an id matching the value of the label's for attribute.
 *
 * Elements that can be associated with a label element:
 * button, input, keygen, meter, output, progress, select, textarea
 * http://www.w3.org/html/wg/drafts/html/master/semantics.html#category-label
 */

export function findByLabel(label) {
  return findWithAssert(`#${label.attr('for')}`);
}

export function findLabelByText(text) {
  let label = findWithAssert(`label:contains('${text}')`);

  if (label.length > 1) {
    label = $(label.toArray().findProperty('innerText', text));
  }

  return label;
}
