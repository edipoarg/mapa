import { Marker } from "react-map-gl/maplibre";
import React, { useState, useEffect } from "react";

const GatilloFacil = (Gatillodata, setScreenData, setMarker, selected ) => {
    return(
             <Marker
             key={id}
             longitude={coords.longitude}
             latitude={coords.latitude}
             onMouseEnter={() => setMarker(id)}
             onMouseLeave={() => setMarker(null)}
             onClick={() =>
                setPopupData({
                    coords: {
                    lat: coords.latitude,
                    lng: coords.longitude,
                },
                fecha,
                victima,
                edad,
                direccion,
                barrio,
                fuerza,
                policias,
                caso,
                url,                
                })

             }

             
             >


             </Marker>
    )
}

export default GatilloFacil;