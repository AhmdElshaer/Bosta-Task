import React from 'react';
import { useTranslation } from 'react-i18next';
import ShipmentStatus from './ShipmentStatus';

function TrackShipment({currentStatus, shipmentNumber, provider, promisedDate}) {
  const { t } = useTranslation('shipment');
  const lang = window.localStorage.getItem('language');

  return (
    <div className='w-full flex flex-col border rounded'>
      <div className='flex flex-col py-4 border-b w-full text-xs gap-[10px] px-2'>
        <div className={`flex justify-between  ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <p className='flex-1 text-slate-500 text-center'>{t('shipment_number')}{shipmentNumber}</p>
          <p className='flex-1 text-slate-500 text-center'>{t('last_update')}</p>
          <p className='flex-1 text-slate-500 text-center'>{t('provider')}</p>
          <p className='flex-1 text-slate-500 text-center'>{t('promisedDate')}</p>
        </div>
        <div className={`flex justify-between  ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <p className={`flex-1 text-center ${(currentStatus?.state === 'DELIVERED_TO_SENDER') ? 'text-green-600' : (currentStatus?.state === 'DELIVERED') ? 'text-green-600' : (currentStatus?.state === 'CANCELLED') ? 'text-red-600' : 'text-orange-600'} `}>{t(`${currentStatus?.state}`)}</p>
          <p className='flex-1 text-center'>{new Date(currentStatus?.timestamp).toLocaleString()}</p>
          <p className='flex-1 text-center'>{provider}</p>
          <p className='flex-1 text-center'>{new Date(promisedDate).toLocaleString()}</p>
        </div>
      </div>
      <ShipmentStatus shipmentStatus={currentStatus?.state} />
    </div>
  )
}

export default TrackShipment