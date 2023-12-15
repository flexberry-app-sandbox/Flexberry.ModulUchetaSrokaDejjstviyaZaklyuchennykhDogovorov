import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДирОтдПоРабСКлLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-l';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДоговорLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-l';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovКлиентLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-l';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovРасчетОстВремLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-l';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovУслугиLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-l';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДирОтдПоРабСКлEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-e';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДоговорEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-e';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovКлиентEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-e';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovРасчетОстВремEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-e';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovУслугиEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-e';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДирОтдПоРабСКлModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДоговорModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovКлиентModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovОказаниеУслугModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovРасчетОстВремModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем';
import IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovУслугиModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДирОтдПоРабСКлModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДоговорModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovКлиентModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-оказание-услуг': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovОказаниеУслугModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovРасчетОстВремModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovУслугиModel
  },

  'application-name': 'Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov',
          title: 'Modul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorov'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'модуль-учета': {
          caption: 'Модуль учета',
          title: 'Модуль учета',
          справочник: {
            caption: 'Справочник',
            title: 'Справочник',
            'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-l': {
              caption: 'Дир отд по раб с кл',
              title: ''
            },
            'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-l': {
              caption: 'Клиент',
              title: ''
            }
          },
          документ: {
            caption: 'Документ',
            title: 'Документ',
            'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-l': {
              caption: 'Договор',
              title: ''
            },
            'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-l': {
              caption: 'Расчет ост врем',
              title: ''
            }
          },
          прочее: {
            caption: 'Прочее',
            title: 'Прочее',
            'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-l': {
              caption: 'Услуги',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-l': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДирОтдПоРабСКлLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-l': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДоговорLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-l': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovКлиентLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-l': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovРасчетОстВремLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-l': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovУслугиLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-дир-отд-по-раб-с-кл-e': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДирОтдПоРабСКлEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-договор-e': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovДоговорEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-клиент-e': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovКлиентEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-расчет-ост-врем-e': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovРасчетОстВремEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-zaklyuchennykh-dogovorov-услуги-e': IISModul_ucheta_sroka_dejjstviya_zaklyuchennykh_dogovorovУслугиEForm
  },

});

export default translations;
