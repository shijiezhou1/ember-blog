import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | home/view', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home/view');
    assert.ok(route);
  });
});
