import React from 'react'
import Delivered from './shipmentStatus/Delivered';
import Cancelled from './shipmentStatus/Cancelled';
import OnProgress from './shipmentStatus/OnProgress';

function ShipmentStatus({shipmentStatus}) {
    if((shipmentStatus === 'DELIVERED_TO_SENDER') || (shipmentStatus === 'DELIVERED')){
      return (<Delivered />)
    }else if(shipmentStatus === 'CANCELLED'){
      return (<Cancelled shipmentStatus={shipmentStatus}/>)
    }else{
      return (<OnProgress shipmentStatus={shipmentStatus}/>)
    }
}

export default ShipmentStatus;