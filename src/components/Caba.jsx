// PROGRAM IMPORTS
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// COMPONENTS IMPORTS
import LogoMapa from "./LogoMapa";
import Screen from "./Screen";
import styles from "../styles/Mapa.module.css";

// STYLES IMPORTS
import mystyle from "../components/mystyle.json";

// GEOJSON IMPORTS
import { departamentos, caba, barriosCaba } from "../data/index";
import { DepsSource, CabaSource, BarriosCabaSource } from "../components/Sources";

// MARKERS IMPORTS
import { violenciasFetch } from "../services/violenciasFetch";
import  Markers  from "./Markers";

// Popup IMPORTS

import Popup from "./Popup";

const Caba = () => {
  // PROPERTIES OF THE MAP
  const mapProps = {
    initialViewState: {
      longitude: -57.954444,
      latitude: -35.05,
      zoom: 1.5,
      minZoom: 1,
      maxZoom: 18,
      maxBounds: [
        [-58.41105, -35.28147], // Lower-left limit
        [-57.52902, -34.69485], // Upper-right limit
      ],
    },
    style: {
      width: "100vw",
      height: "90vh",
    },
    mapStyle: mystyle,
  };

  // SCREEN INFO
  const [popupInfo, setPopupInfo] = useState(null);

  // HOVER
  const [hoveredMarkerId, setHoveredMarkerId] = useState(null);

  //MARKERS
  const [violenciasData, setViolenciasData] = useState([]);


  // VIOLENCIAS
  useEffect(() => {
    const apiCall = async () => {
      try {
        const data = await violenciasFetch();
        console.log("Violencias Data:", data); // Add this line to log the data
        if (data) {
          setViolenciasData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    apiCall();
  }, []);



  return (
    <>
      <section id="MapaDev" className={styles.MapaDev}>
        <Screen />
        <MapGL id="mapa" mapLib={maplibregl} {...mapProps}>
          {violenciasData && (
            <Markers
              data={violenciasData}
              setPopupInfo={setPopupInfo}
              setMarker={setHoveredMarkerId}
              selected={hoveredMarkerId}
            />
          )}
          <NavigationControl position="top-right" />
          <DepsSource data={departamentos} />
          <BarriosCabaSource data={barriosCaba} />
          <CabaSource data={caba} />
        </MapGL>
        <LogoMapa />
      </section>
    </>
  );
};

export default Caba;
