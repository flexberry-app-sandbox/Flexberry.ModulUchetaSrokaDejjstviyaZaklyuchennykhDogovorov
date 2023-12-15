import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  услуги: DS.belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем', { inverse: 'оказаниеУслуг', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказаниеУслугE', 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг', {
    дата: attr('Дата', { index: 0 }),
    услуги: belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги', 'Наименование услуги', {
      затрВремя: attr('Затраченное время', { index: 2 }),
      едВремени: attr('Единица времени', { index: 3 })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
