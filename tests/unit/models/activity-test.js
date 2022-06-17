import { module, test } from 'qunit';
import { setupTest } from 'weather-app-2/tests/helpers';

module('Unit | Model | activity', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('activity', {});
    assert.ok(model);
  });
});
