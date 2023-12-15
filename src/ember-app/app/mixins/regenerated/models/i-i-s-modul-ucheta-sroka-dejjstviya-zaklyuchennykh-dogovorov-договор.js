import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  длительность: DS.attr('decimal'),
  едВремени: DS.attr('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-ед-времени'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-статус'),
  стоимость: DS.attr('number'),
  тип: DS.attr('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-тип-договора'),
  дирОтдПоРабСКл: DS.belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  длительность: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  едВремени: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор.validations.едВремени.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дирОтдПоРабСКл: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор.validations.дирОтдПоРабСКл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 }),
    длительность: attr('Длительность', { index: 5 }),
    едВремени: attr('Единица времени', { index: 6 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл', 'Фамилия директора', {
      имя: attr('Имя директора', { index: 8 }),
      отчество: attr('Отчество директора', { index: 9 })
    }, { index: 7, displayMemberPath: 'фамилия' }),
    клиент: belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент', 'Фамилия клиента', {
      имя: attr('Имя клиента', { index: 11 }),
      отчество: attr('Отчество клиента', { index: 12 })
    }, { index: 10, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 }),
    длительность: attr('Длительность', { index: 5 }),
    едВремени: attr('Единица времени', { index: 6 }),
    дирОтдПоРабСКл: belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл', 'Фамилия директора', {
      фамилия: attr('Фамилия директора', { index: 7 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент', 'Фамилия клиента', {
      фамилия: attr('Фамилия клиента', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
