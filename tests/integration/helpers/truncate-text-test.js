import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | truncate-text', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    this.set('inputValue', '123456');

    await render(hbs`{{truncate-text inputValue limit=5}}`);

    // MAKE SURE HELPER TRUNCATE TEXT
    assert.equal(this.element.textContent.trim(), '12345...');
  });
});
