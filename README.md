# ember-cli-test-interactions
Ember-cli Test Interactions is a library providing some convenience test
helper functions. It allows for more expressive acceptance tests and
cuts out alot of the boiler plate functions required to find elements
before acting upon them.

For example, compare filling in an HTML `input` with and without the
library:

```javascript
// with ember-cli-test-interactions
fillInByLabel('Name', 'Jane Doe');

// without
const label = find("label:contains('Jane Doe')");
const input = find(`#${label.attr('for')}`);
fillIn(input, 'Jane Doe');
```

## Install
For ember-cli >= `0.2.3`:
```shell
ember install ember-cli-test-interactions
```

For ember-cli < `0.2.3`:
```shell
ember install:addon ember-cli-test-interactions
```

## Use
Once the addon is installed, the helper functions will be available for
import via `'../tests/helpers/interactions'`.

Import the functions you need in each of your acceptance test files:

```javascript
import { module, test } from 'qunit';
import { clickLink } from '../tests/helpers/interactions';

test('clicking name transitions to route of the user', function(assert) {
  visit('/');
  andThen(clickLink('Jane Doe'));
  andThen(() => {
    assert.equal(url, '/users/jane-doe', "expected current path to be
Jane Doe's");
  });
});
```

## Legal ##
[DockYard](http://dockyard.com/ember-consulting), Inc. &copy; 2015

[@dockyard](http://twitter.com/dockyard)
