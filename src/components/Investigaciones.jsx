import Navbar from "./Navbar";
import styles from "../styles/investigaciones.module.css";

const Investigaciones = () => {

    return(
        <>

        <Navbar/>
            <section id="NovedadesInvestigaciones">
                <section id='Menu'></section>
             <section id="NotaPrincipal">

                 <img src="" alt="" className={styles.FotoNotaPrincipal} />
                 <h2 className={styles.TituloNotaPrincipal}>
                    Titulo Nota Principal</h2>
             </section>
             <section id="UltimoReporte">
                <img src="" alt="" className={styles.FotoUltimoReporte} />
                <h2 className={styles.TituloUltimoReporte}>
                    Titulo Ultimo Reporte</h2>
             </section>
             <section id="InvestigacionPrevia">
                 <img src="" alt="" className={styles.FotoInvestigacionPrevia} />
                 <h2 className={styles.TituloInvestigacionPrevia}>
                    Titulo Investigación previa</h2>
             </section>
            </section>

            





        </>
    );
}

export default Investigaciones