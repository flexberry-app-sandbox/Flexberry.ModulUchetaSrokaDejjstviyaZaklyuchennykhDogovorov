import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги', 'Unit | Model | i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
