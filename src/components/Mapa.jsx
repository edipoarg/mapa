// PROGRAM IMPORTS
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {Map} from "@edipoarg/components"

// STYLES IMPORTS
import mystyle from "./mystyle.json";

/*import { Link as ScrollLink } from "react-scroll";*/

// COMPONENTS IMPORTS
import LogoMapa from "./LogoMapa";
import Screen from "./Screen";
import styles from "../styles/Mapa.module.css";

// GEOJSON IMPORTS

// MARKERS IMPORTS
import {cases} from "../data/casos.json";
import defaultLayers from "../data/layers.json";
import defaultViewState from "../data/view.json";

// Popup IMPORTS
import Popup from "./Popup";

//Filtros Import
import Filtros from "./filtros/Filtros"; // Cambia la ruta a tu formulario


const Mapa = () => {
  const {urls} = useLoaderData();

  // PROPERTIES OF THE MAP
  const defaultMapProps = {
    initialViewState: defaultViewState,
    style: {
      width: "100vw",
      height: "90vh",
    },
    mapStyle: mystyle,
  };

  //FILTERS

  const handleTipoFilter = () => {
    const filteredDataByType = cases.filter(
      (event) => tipoFilters[event.tipoId],
    );
    setFilteredData(filteredDataByType);
  };

  const [tipoFilters, setTipoFilters] = useState({
    Dependencias: true,
    Casos: true,
    GatilloFacil: true,
  });
  const [filteredData, setFilteredData] = useState(cases);

  //visibilidad Filtro
  const [filtrosVisible, setFiltrosVisible] = useState(true);
  const toggleFiltrosVisibility = () => {
    setFiltrosVisible(!filtrosVisible);
  };
  const [isCloseButtonClicked, setIsCloseButtonClicked] = useState(false);
  const handleClickCloseButton = () => {
    // Toggle the state when the button is clicked
    setIsCloseButtonClicked(!isCloseButtonClicked);

    // Add any additional logic you want when the button is clicked
  };


  //SEleccion
  const [setSelectedFeatureId] = useState(null);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);

  // SCREEN INFO
  const [popupInfo, setPopupInfo] = useState(null);
  const [layers, setLayers] = useState(defaultLayers);
  const [mapProps, setMapProps] = useState(defaultMapProps);

  const updateLayers = () => {
    layers[0].data = urls.departamentos;
    layers[1].data = urls.admin1;
    layers[2].data = urls.admin2;
  };
  useEffect(updateLayers , [layers]);
  updateLayers();

  // HOVER
  const handleHover = (event) => {
    setSelectedFeatureId(event.features?.[0]?.id || null);
  };
  const handleLeave = () => setSelectedFeatureId(null);


  // VIOLENCIAS
  useEffect(() => {
    const newData = cases;


    const filteredDataByType = newData.filter(
      (event) => tipoFilters[event.tipoId],
    );

    setFilteredData(filteredDataByType);
    }, [cases, tipoFilters]);




  return (
    <>
      <section id="MapaDev" className={styles.MapaDev}>
        {filtrosVisible && (
        <Filtros
          caseCount={filteredData.length}
          handleTipoFilter={handleTipoFilter}
          tipoFilters={tipoFilters}
          setTipoFilters={setTipoFilters}
        />
      )}
       <div className={styles.botonFiltrosMain}>
        {/* FIXME: Why is this not a button? */}
        {/* Render different button content based on the state */}
        <a
          aria-label="Hide"
          onClick={() => {
            handleClickCloseButton();
            toggleFiltrosVisibility();
          }}
          href="#"
          className={`${styles.closeButton} ${styles["simple-button"]} ${isCloseButtonClicked ? styles["transformed-button"] : ""}`}
        >
          {isCloseButtonClicked ? (
            <div>
              <h5 className={styles.botonFiltrosMap}>FILTROS</h5>
            </div>
          ) : (
            <>X</>
          )}
        </a>
      </div>
        <Screen />
        <Map mapConfig={mapProps} sources={layers} pointsOfInterest={cases}/>
        <LogoMapa />
      </section>
      {popupInfo && <Popup {...popupInfo} />}

    </>
  );
};

export default Mapa;
