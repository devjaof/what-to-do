import { module, test } from 'qunit';
import { setupTest } from 'weather-app-2/tests/helpers';

module('Unit | Route | activity', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:activity');
    assert.ok(route);
  });
});
