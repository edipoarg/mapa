
//PROGRAM IMPORTS
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

//COMPONENTS IMPORTS
import LogoMapa from "./LogoMapa";
import Navbar from "./Navbar";
import Screen from "./Screen";
import styles from "../styles/Mapa.module.css";


//STYLES IMPORTS
import mystyle from "../components/mystyle.json";


//GEOJSON IMPORTS
import { departamentos, caba, barriosCaba } from "../data/index";
import { DepsSource, CabaSource, BarriosCabaSource } from "../components/Sources";

//MARKERS INPORTS

import { violenciasFetch } from "../services/violenciasFetch";
import {CabaMarker} from "./Markers";

/////////////////////////////////

//MAPA CONST

//Estilos del mapa
const Mapstyle = {
  country: {
    fillColor: "#bacbff",
    fillOpacity: 0.6,
    color: "#9b1920",
    weight: 0.2,
  },
};

//////REGIONES//////
const Mapa = () => {
  const { setSelectedRegion } = useRegionContext();
  const { region } = useParams();

  // Usamos useEffect para actualizar la región solo si la ruta ha cambiado
  useEffect(() => {
    setSelectedRegion(region);
  }, [region, setSelectedRegion]);

  // COORDENADAS Y ZOOM POR REGION
  const regionCoordinates = {
    caba: {
      longitude: -56.417100,
      latitude: -36.731799,
      zoom: 10.5,
      maxBounds: [
        [-58.65981, -34.71960], // Límite inferior izquierdo de CABA
        [-58.28348, -34.50316], // Límite superior derecho de CABA
      ],
    },
    laplata: {
      longitude: -57.954444,
      latitude: -35.05,
      zoom: 9.2,
      maxBounds: [
        [-58.41105, -35.28147], // Límite inferior izquierdo de La Plata
        [-57.52902, -34.69485], // Límite superior derecho de La Plata
      ],
    },
  };

  //PROPIEDADES DEL MAPA
  const mapProps = {
    initialViewState: regionCoordinates[region] || {
      longitude: -53.263653887413344,
      latitude: -32.769424846630283,
      zoom: 4,
      minZoom: 1,
      maxZoom: 15,
      maxZoom: regionCoordinates[region]?.zoom || 15,
      maxBounds: regionCoordinates[region]?.maxBounds || undefined,
    },
    style: {
      width: "100vw",
      height: "90vh",
    },
    mapStyle: mystyle,
  };


  //SCREEN INFO
  
  const [screenInfo, setScreenInfo] = useState(null);


  //HOVER
  const [hoveredMarkerId, setHoveredMarkerId] = useState(null);

  



  // VIOLENCIAS


  useEffect(() => {
    const apiCall = async () => {
      try {
        const data = await violenciasFetch();
        if (data) {
          setViolenciasData(data);
        
        }
      } catch (error) {
        console.log(error);
      }
    };

    apiCall();
  }, []);

  const [violenciasData, setViolenciasData] = useState(null);
  const [filteredDataViolencias, setFilteredDataViolencias] = useState([]);


  const handleTipoViolenciaFilters = () => {
    const filteredViolenciasByType = violenciasData.filter(event => tipoViolenciaFilters[event.tipoViolencia]);
    setFilteredDataViolencias(filteredViolenciasByType);
  };
  
  const [tipoViolenciaFilters, setTipoViolenciaFilters] = useState({
    t1: true,
    t2: true,
    t3: true,

  });

  






  ///////////////////////////////////

  return (
    <>
      <section id="MapaDev" className={styles.MapaDev}>
        <h2>{region}</h2>
        <Screen />

        <MapGL id="mapa" mapLib={maplibregl} {...mapProps}>
       



       {violenciasData && (<CabaMarker
     violenciasData={violenciasData}
     setScreenInfo={setScreenInfo}
     setMarker= {setHoveredMarkerId}
     selected={hoveredMarkerId}
     tipoViolenciaFilters={tipoViolenciaFilters}
     handleTipoFilter={handleTipoViolenciaFilters}
     
     />)}
     
       
          

          <NavigationControl position="top-right" />
          <DepsSource data={departamentos} style={Mapstyle} />
          <BarriosCabaSource data={barriosCaba} style={Mapstyle} />
          <CabaSource data={caba} style={Mapstyle} />
        </MapGL>

        <Navbar />
        <LogoMapa />
      </section>
    </>
  );
};

export default Mapa;
