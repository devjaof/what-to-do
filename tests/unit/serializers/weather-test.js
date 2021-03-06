import { module, test } from 'qunit';
import { setupTest } from 'weather-app-2/tests/helpers';

module('Unit | Serializer | weather', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('weather');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('weather', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
