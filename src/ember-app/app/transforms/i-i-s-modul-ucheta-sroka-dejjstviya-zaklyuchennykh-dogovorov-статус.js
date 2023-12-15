import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусEnum from '../enums/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-статус';

export default FlexberryEnum.extend({
  enum: СтатусEnum,
  sourceType: 'IIS.Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov.Статус'
});
