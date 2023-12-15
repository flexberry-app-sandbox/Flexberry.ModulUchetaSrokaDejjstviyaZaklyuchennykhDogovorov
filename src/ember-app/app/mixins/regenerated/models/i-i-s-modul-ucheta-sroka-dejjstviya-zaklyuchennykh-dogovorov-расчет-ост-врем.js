import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  доступно: DS.attr('decimal'),
  использовано: DS.attr('decimal'),
  договор: DS.belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор', { inverse: null, async: false }),
  оказаниеУслуг: DS.hasMany('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доступно: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеУслуг: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем.validations.оказаниеУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОстВремE', 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем', {
    дата: attr('Дата', { index: 0 }),
    договор: belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор', 'Номер договора', {
      статус: attr('Статус', { index: 2 }),
      длительность: attr('Длительность', { index: 3 }),
      едВремени: attr('Единица времени', { index: 4 })
    }, { index: 1, displayMemberPath: 'номер' }),
    использовано: attr('Использовано', { index: 5 }),
    доступно: attr('Доступно', { index: 6 }),
    оказаниеУслуг: hasMany('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг', 'Оказание услуг', {
      дата: attr('Дата', { index: 0 }),
      услуги: belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги', 'Наименование услуги', {
        затрВремя: attr('Затраченное время', { index: 2 }),
        едВремени: attr('Единица времени', { index: 3 })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('РасчетОстВремL', 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем', {
    дата: attr('Дата', { index: 0 }),
    договор: belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор', 'Номер договора', {
      статус: attr('Статус', { index: 2 }),
      длительность: attr('Длительность', { index: 3 }),
      едВремени: attr('Единица времени', { index: 4 })
    }, { index: 1, displayMemberPath: 'номер' }),
    использовано: attr('Использовано', { index: 5 }),
    доступно: attr('Доступно', { index: 6 })
  });
};
