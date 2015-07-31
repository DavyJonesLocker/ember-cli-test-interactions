export function assertHasMessage(assert, expectedText) {
  return function() {
    const messageCenter = findWithAssert('div#message-center');

    let text = messageCenter.text().trim();

    assert.equal(text, expectedText);
  };
}
