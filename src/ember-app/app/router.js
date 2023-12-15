import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-e/new' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-e/new' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-e/new' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-e/new' });
});

export default Router;
