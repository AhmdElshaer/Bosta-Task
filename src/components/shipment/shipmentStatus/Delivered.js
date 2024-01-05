import React from 'react'
import { useTranslation } from 'react-i18next';

function Delivered() {
  const lang = window.localStorage.getItem('language');
  const { t } = useTranslation('shipment');
  return (
    <div className='w-full flex flex-col p-4 gap-[20px]'>
      <div className='flex text-white text-xs bg-green-600 h-[5px] relative'>
        <span className={`absolute w-[15px] h-[15px] text-center bg-green-600 rounded-full top-[50%] -translate-y-1/2 ${lang === 'ar' ? 'right-[0px]' : "left-[0px]"}`}>&#10004;</span>
        <span className={`absolute w-[15px] h-[15px] text-center bg-green-600 rounded-full top-[50%] -translate-y-1/2 ${lang === 'ar' ? 'right-[33%]' : "left-[33%]"}`}>&#10004;</span>
        <span className={`absolute w-[15px] h-[15px] text-center bg-green-600 rounded-full top-[50%] -translate-y-1/2 ${lang === 'ar' ? 'right-[67%]' : "left-[67%]"}`}>&#10004;</span>
        <span className={`absolute w-[15px] h-[15px] text-center bg-green-600 rounded-full top-[50%] -translate-y-1/2 ${lang === 'ar' ? 'right-[99%]' : "left-[99%]"}`}>&#10004;</span>
      </div>
      <div className={`flex justify-between text-xs ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
        <p className='px-2 text-center'>{t('TICKET_CREATED')}</p>
        <p className='px-2 text-center'>{t('PACKAGE_RECEIVED')}</p>
        <p className='px-2 text-center'>{t('OUT_FOR_DELIVERY')}</p>
        <p className='px-2 text-center'>{t('DELIVERED')}</p>
      </div>
    </div>
  )
}

export default Delivered;