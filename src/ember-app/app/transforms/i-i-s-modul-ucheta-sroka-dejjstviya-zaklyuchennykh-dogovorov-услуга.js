import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УслугаEnum from '../enums/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуга';

export default FlexberryEnum.extend({
  enum: УслугаEnum,
  sourceType: 'IIS.Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov.Услуга'
});
