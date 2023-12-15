import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг', 'Unit | Serializer | i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-ед-времени',
    'transform:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-статус',
    'transform:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-тип-договора',
    'transform:i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуга',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
