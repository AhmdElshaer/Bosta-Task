import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerEn from './header/en.json';
import headerAr from './header/ar.json';
import shipmentEn from './shipment/en.json';
import shipmentAr from './shipment/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        header: headerEn,
        shipment: shipmentEn
      },
      ar:{
        header: headerAr,
        shipment: shipmentAr
      }
    },
    fallbackLng: 'en',
    lng: localStorage.getItem('language')
    ? localStorage.getItem('language')
    : 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;