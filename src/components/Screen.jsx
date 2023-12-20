import { BotonTelefono, BotonMas } from "./Botones";
import styles from "../styles/Screen.module.css";

  // Define la información específica de cada región según sea necesario
  const regionInfo = {

      Comisaria: "Comisaría CABA",
      ExComisaria: "Ex Nombre CABA",
      Direccion: "Dirección CABA",
      Comisario: "Comisario CABA",
      Cargo: "Cargo autoridad CABA",
    }  
  

  const regionData = regionInfo || {};

const Screen = () => { 

  return (
    <>
    <section className={styles.Screen}>
      <section className={styles.ComisariaScreen} id="ComisariaScreen">
        <section className={styles.ComisariaData} id="ComisariaData">
          <h4>{regionData.ExComisaria}</h4>
          <h2>{regionData.Comisaria}</h2>
          <h5>{regionData.Direccion}</h5>
        </section>
        <BotonTelefono />
      </section>
      <section className={styles.AutoridadesScreen} id="AutoridadesScreen">
        <section className="AutoridadesData" id="AutoridadesData">
          <h4>{regionData.Cargo}</h4>
          <h3>{regionData.Comisario}</h3>
        </section>
        <BotonMas />
      </section>
      </section>
    </>
  );
};
export default Screen;
