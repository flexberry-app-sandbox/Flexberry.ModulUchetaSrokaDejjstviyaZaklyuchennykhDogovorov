import { Serializer as ДоговорSerializer } from
  '../mixins/regenerated/serializers/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДоговорSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
