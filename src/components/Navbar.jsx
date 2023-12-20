import styles from "../styles/Navbar.module.css";

import { Link } from "react-router-dom";
import {
  InvestigacionesBoton,
  HerramientasBoton,
  DenunciasBoton,
  ReportesBoton,
  JefaturaBoton,
} from "./Botones";

const Navbar = () => {
    return (
      <section id="NavBar" className={styles.Navbar}>
        <Link to="/denuncias">
          <DenunciasBoton className={styles.Boton}/>
        </Link>
        <Link to="/reportes">
          <ReportesBoton />
        </Link>
        <Link to="/herramientas">
          <HerramientasBoton />
        </Link>
        <Link to="/investigaciones">
          <InvestigacionesBoton />
        </Link>
        <Link to="/jefatura">
          <JefaturaBoton />
        </Link>
      </section>
    );

};

export default Navbar;
