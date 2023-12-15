import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.модуль-учета.caption'),
          title: i18n.t('forms.application.sitemap.модуль-учета.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.модуль-учета.справочник.caption'),
            title: i18n.t('forms.application.sitemap.модуль-учета.справочник.title'),
            children: [{
              link: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-l',
              caption: i18n.t('forms.application.sitemap.модуль-учета.справочник.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-l.caption'),
              title: i18n.t('forms.application.sitemap.модуль-учета.справочник.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-l',
              caption: i18n.t('forms.application.sitemap.модуль-учета.справочник.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-l.caption'),
              title: i18n.t('forms.application.sitemap.модуль-учета.справочник.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-l.title'),
              icon: 'list',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.модуль-учета.документ.caption'),
            title: i18n.t('forms.application.sitemap.модуль-учета.документ.title'),
            children: [{
              link: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-l',
              caption: i18n.t('forms.application.sitemap.модуль-учета.документ.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-l.caption'),
              title: i18n.t('forms.application.sitemap.модуль-учета.документ.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-l',
              caption: i18n.t('forms.application.sitemap.модуль-учета.документ.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-l.caption'),
              title: i18n.t('forms.application.sitemap.модуль-учета.документ.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-l.title'),
              icon: 'address card',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.модуль-учета.прочее.caption'),
            title: i18n.t('forms.application.sitemap.модуль-учета.прочее.title'),
            children: [{
              link: 'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-l',
              caption: i18n.t('forms.application.sitemap.модуль-учета.прочее.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-l.caption'),
              title: i18n.t('forms.application.sitemap.модуль-учета.прочее.i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-l.title'),
              icon: 'archive',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})