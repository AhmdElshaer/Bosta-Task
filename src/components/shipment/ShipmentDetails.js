import React from 'react'
import { useTranslation } from 'react-i18next';
import Q from '../../assets/images/Q.png';

function ShipmentDetails({shipmentDetails}) {

  const lang = window.localStorage.getItem('language');
  const { t } = useTranslation('shipment');
  const tableHead = [t('branch'),t('date'),t('time'),t('details')];

  return (
    <div className={`flex flex-col ${lang === "ar" ? 'md:flex-row-reverse' : 'md:flex-row'} gap-[20px]`}>
      <div className={`md:w-2/3 flex flex-col gap-[20px] ${lang === 'ar' ? 'items-end' : 'items-start'}`}>
        <p>{t('shipment_details')}</p>
        <table className='w-full table-auto border border-blue-gray-100 rounded overflow-hidden shadow-xl text-xs'>
          <thead>
            <tr className='bg-gray-200 text-slate-500'>
              {lang === "ar" ? tableHead.reverse().map((item)=>(
                <th key={item} className='p-4'>{item}</th>
              )) : tableHead.map((item)=>(
                <th key={item} className={`p-4 ${item === t('details') ? 'w-1/2' : ''}`}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shipmentDetails?.map((item)=>(
              lang === 'ar' ? 
              (<tr key={item.timestamp}>
                <td className='text-right p-4'>{t(`${item.state}`)}</td>
                <td className='text-right p-4'>{new Date(item.timestamp).toLocaleTimeString()}</td>
                <td className='text-right p-4'>{new Date(item.timestamp).toLocaleDateString()}</td>
                <td className='text-right p-4'>مدينة نصر</td>
              </tr>) : 
              (<tr key={item.timestamp}>
                <td className='p-4'>مدينة نصر</td>
                <td className='p-4'>{new Date(item.timestamp).toLocaleDateString()}</td>
                <td className='p-4'>{new Date(item.timestamp).toLocaleTimeString()}</td>
                <td className='p-4'>{t(`${item.state}`)}</td>
              </tr>)
            ))}
          </tbody>
        </table>
      </div>
      <div className={`md:w-1/3 flex flex-col gap-[20px] ${lang === 'ar' ? 'text-right' : ''}`}>
        <p>{t('dropoffAddress')}</p>
        <p className={`bg-gray-200 px-4 py-6 text-xs text-slate-600 rounded ${lang === 'ar' ? 'text-right' : ''}`}>
          امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 33, Cairo
        </p>
        <div className={`p-4 text-xs border rounded flex gap-[10px] justify-center items-center ${lang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
          <img src={Q} alt='Question_mark_icon'/>
          <p className={`flex flex-col gap-[10px]`}>
            <span>{t('shipment_problems')}</span>
            <button className='bg-[#e30613] text-white py-1 rounded font-light'>{t('complain')}</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShipmentDetails