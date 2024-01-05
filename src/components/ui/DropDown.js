import { useTranslation } from "react-i18next";
import React, { useRef, useState } from 'react';
import bars from '../../assets/images/bars.svg';
import search from '../../assets/images/search.svg';

function DropDown() {
  const { t } = useTranslation('header');
  const [open, setOpen] = useState(false);
  const [track, setTrack] = useState(false);
  const shipmentNumber = useRef('');
  const lang = window.localStorage.getItem('language');

  const LangHandler = () => {
    if(lang === 'en'){
      window.localStorage.setItem('language', 'ar');
    }else if(lang === 'ar'){
      window.localStorage.setItem('language', 'en');
    }else{
      window.localStorage.setItem('language', 'ar');
    }
    window.location.reload();
  };

  const toggleHandler = () => {
    setOpen(old => !old);
  }
  const trackShipmentHandler = () => {
    setTrack(old=>!old)
  }

  const setShipmentNumber = () => {
    console.log(typeof(shipmentNumber.current.value));
  }
  return (
    <div className=''>
      <div className={`gap-[30px] flex ${lang === 'en' ? 'flex-row-reverse' : ''}`}>
        <button onClick={toggleHandler} className='md:hidden'>
          <img src={bars} alt='bars_icon' className='h-[34px]'/>
        </button>
        <div className={`md:hidden flex md:flex-col relative ${track ? 'text-red-500' : ''}`}>
            <button onClick={trackShipmentHandler}>{t("track_shipment")}</button>
            <div className={`absolute border-2 rounded bg-white z-30 top-[140%] left-[0px] p-6 ${lang === 'ar' ? 'text-end' : ''}`} hidden={!track}>
              <div className="flex flex-col gap-[10px] text-xs text-slate-500">
                <p>{t('track_shipment')}</p>
                <p className="relative h-[50px] border-2 rounded-lg overflow-hidden w-[250px]">
                  <input ref={shipmentNumber} type="text" className="h-full w-full text-end px-2"/>
                  <button onClick={setShipmentNumber} className="absolute top-[50%] left-[0px] h-full -translate-y-[50%] bg-red-500 p-2"><img src={search} alt="search icon" className="h-[30px]"/></button>
                </p>
              </div>
            </div>
          </div>
      </div>
      <div className={`md:hidden w-screen h-screen bg-white absolute top-[100%] left-[0px] ${lang === 'ar' ? 'text-end' : ''} z-30 ${open ? 'block' : 'hidden'}`}>
        <div className='flex flex-col gap-[20px] px-[30px] text-slate-600'>
        <p className="border-b-2 border-dashed pb-4">{t("home")}</p>
        <p className="border-b-2 border-dashed pb-4">{t("prices")}</p>
        <p className="border-b-2 border-dashed pb-4">{t("call_sales")}</p>
        <p className="border-b-2 border-dashed pb-4">{t("sign_in")}</p>
        <button onClick={LangHandler} className={`border-b-2 border-dashed pb-4 text-[#e30613] ${lang === 'ar' ? 'text-end' : 'text-start'}`}>{t("lang")}</button>
        </div>
      </div>
    </div>
  )
}

export default DropDown