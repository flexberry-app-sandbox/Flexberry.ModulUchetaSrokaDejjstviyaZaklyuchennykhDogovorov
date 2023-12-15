import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-l', 'Unit | Controller | i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-l', {
  // Specify the other units that are required for this test.
  needs: [
    'controller:advlimit-dialog',
    'controller:colsconfig-dialog',
    'controller:filters-dialog',
    'service:objectlistview-events',
    'service:user-settings',
    'service:app-state',
    'service:adv-limit',
  ],
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
