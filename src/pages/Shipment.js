import React, { useEffect, useState } from "react";
import axios from "axios";
import TrackShipment from "../components/shipment/TrackShipment";
import ShipmentDetails from "../components/shipment/ShipmentDetails";

function Shipment() {
  const [shipmentDetails, setShipmentDetails] = useState();
  // const shipmentNumber = "13737343";
  // const shipmentNumber = "67151313";
  const shipmentNumber = "7234258";
  
  const url = `https://tracking.bosta.co/shipments/track/${shipmentNumber}`;
  useEffect(() => {
    axios.get(url).then((resp)=>{
      setShipmentDetails(resp.data)
    }).catch((err)=>{
      console.log(err);
    })
  }, [url]);

  return (
  <div className="p-[20px] flex flex-col gap-[40px]">
    <TrackShipment promisedDate={shipmentDetails?.PromisedDate} provider={shipmentDetails?.provider} shipmentNumber={shipmentNumber} currentStatus={shipmentDetails?.CurrentStatus}/>
    <ShipmentDetails shipmentDetails={shipmentDetails?.TransitEvents}/>
  </div>);
}

export default Shipment;
