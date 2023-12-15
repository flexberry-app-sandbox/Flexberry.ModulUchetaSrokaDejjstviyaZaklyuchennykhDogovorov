import { Serializer as УслугиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(УслугиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
