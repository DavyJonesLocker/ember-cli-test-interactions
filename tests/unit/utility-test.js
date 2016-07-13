import {
  module,
  test
} from 'qunit';

import {
  removeWhiteSpace,
  elementsToTextArray
} from '../helpers/utility';

module('Unit: Utility');

test('#removeWhiteSpace removes extra spaces', function(assert) {
  assert.expect(1);

  let result = removeWhiteSpace('  hello   world   ');
  assert.equal(result, ' hello world ');
});

test('#elementsToTextArray converts node list to text array', (assert) => {
  assert.expect(1);
  let nodes = $('<p>John</p><p>Wade</p><p>Nacy</p>');
  let textContents = elementsToTextArray(nodes);

  assert.deepEqual(textContents, ['John', 'Wade', 'Nacy']);
});
