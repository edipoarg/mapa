// Markers.jsx

import React from "react";
import { Marker } from "react-map-gl/maplibre";
import styles from "../styles/Markers.module.css";

const Markers = ({ data, setPopupInfo, setMarker }) => {
  console.log("Markers Data:", data);

  return (
    <>
      {data.map((event) => {
        const [id, title, date, source, coordsString, time, location, district, tipoId, force, description, link] = event;
        const [longitude, latitude] = coordsString.split(",").map(parseFloat);

        return (
          <Marker
            key={id}
            longitude={longitude}
            latitude={latitude}
            offsetTop={-20}
            offsetLeft={-10}
          >
            <div
              className={styles.marker}
              onMouseEnter={() => setMarker(id)}
              onMouseLeave={() => setMarker(null)}
              onClick={() =>
                setPopupInfo({
                  coords: { latitude, longitude },
                  title,
                  tipo: tipoId,
                  date,
                  source,
                })
              }
            ></div>
          </Marker>
        );
      })}
    </>
  );
};

export default Markers;
