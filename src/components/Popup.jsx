import React from 'react';
import '../styles/Popup.module.css';

const Popup = ({ coords, title, tipo, date, source }) => {
  return (
    <div className="popup">
      <h3>{title}</h3>
      <p>{`Tipo: ${tipo}`}</p>
      <p>{`Fecha: ${date}`}</p>
      <p>{`Fuente: ${source}`}</p>
      {/* Add any additional information you want to display */}
    </div>
  );
};

export default Popup;
