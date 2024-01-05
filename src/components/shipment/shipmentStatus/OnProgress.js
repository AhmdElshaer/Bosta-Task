import React from 'react';
import { useTranslation } from 'react-i18next';
import van from '../../../assets/images/delivery-van.svg';
import reversedVan from '../../../assets/images/reverse-delivery-van.svg';
import floppyDesk from '../../../assets/images/floppy-disk.png';

function OnProgress({shipmentStatus}) {
  const lang = window.localStorage.getItem('language');
  const { t } = useTranslation('shipment');
  return (
    <div className='w-full flex flex-col p-4 gap-[20px]'>
      <div className={`w-full flex text-white text-xs h-[5px] relative ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
        <p className='flex-1 bg-orange-500'>
          <span className={`absolute w-[15px] h-[15px] text-center bg-orange-500 rounded-full top-[50%] -translate-y-1/2 ${lang === 'ar' ? 'right-[-1px] md:right-[0px]' : "left-[-1px] md:left-[0px]"}`}>&#10004;</span>
        </p>
        <p className='flex-1 bg-orange-500'>
          <span className={`absolute w-[15px] h-[15px] text-center bg-orange-500 rounded-full top-[50%] -translate-y-1/2 ${lang === 'ar' ? 'right-[33%]' : "left-[33%]"}`}>&#10004;</span>
        </p>
        <p className='bg-orange-500'>
          <span className={`absolute w-[30px] h-[30px] flex justify-center items-center bg-orange-500 rounded-full top-[50%] -translate-y-1/2 ${lang === 'ar' ? 'right-[66%]' : "left-[66%]"}`}>{lang === 'ar' ? <img src={reversedVan} alt='van' className='text-white h-[22px]'/> : <img src={van} alt='van' className='text-white h-[22px]'/>}</span>
        </p>
        <p className={`flex-1 bg-slate-500`}>
          <span className={`absolute bg-white w-[30px] h-[30px] flex justify-center items-center border rounded-full top-[50%] -translate-y-1/2 ${lang === 'ar' ? 'right-[94%] md:right-[98%]' : "left-[94%] md:left-[98%]"}`}><img src={floppyDesk} alt='floppyDesk' className='text-white h-[22px]'/></span>
        </p>
      </div>
      <div className={`flex justify-between text-xs ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
        <p className='text-center'>{t('TICKET_CREATED')}</p>
        <p className='text-center'>{t('PACKAGE_RECEIVED')}</p>
        <p className='flex flex-col justify-center items-center gap-[5px]'>
          <span className='text-center'>{t('OUT_FOR_DELIVERY')}</span>
          <span className='text-orange-500 text-center'>{t(shipmentStatus)}</span>
        </p>
        <p className='text-center'>{t('DELIVERED')}</p>
      </div>
    </div>
  )
}

export default OnProgress;