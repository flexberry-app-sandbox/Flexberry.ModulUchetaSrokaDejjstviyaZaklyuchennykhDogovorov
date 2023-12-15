import { Serializer as КлиентSerializer } from
  '../mixins/regenerated/serializers/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлиентSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
