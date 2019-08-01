import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | self', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:self');
    assert.ok(route);
  });
});
