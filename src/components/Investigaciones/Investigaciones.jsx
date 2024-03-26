import styles from "./Investigaciones.module.css";
import Temas from '../Temas';
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";

const tituloNotaPrincipal = "La bonaerense en la mira: de una internación psiquiátrica a un doble femicidio";
    const bajadaNotaPrincipal = "Bajada de la ultima nota que se haya hecho donde el texto puede durar solamente esta cantidad máxima de caracteres";
    const fechaUltimoReporte = "xx/xx/xxxx";
    const fotoNotaPrincipal = "../src/components/investigaciones/investigacion/Crisis_salud_Mental_Mapa3.jpg";
    const fechaNotaPrincipal = "08/05/2024";
    const autorxsNotaPrincipal = "Sofi y Pampa";
    const ilusNotaPrincipal = "Panchopepe";


const Investigaciones = () => {

    return(
        <>

        <section className={styles.investContainer}>

        <Link to="/investigacion/bonaerense-mira">

            <section className={styles.investNovedades}>
             
             <section style= {Temas.invest2Tema} className={styles.notaPrincipal}>
                 <img src={fotoNotaPrincipal} alt="" className={styles.fotoNotaPrincipal} />
                 <section className={styles.infoNotaPrincipal}>
                    <h2 className={styles.tituloNotaPrincipal}>
                    {tituloNotaPrincipal}</h2>
                    
                    <section className={styles.infoBasica}>
                     
                       <section className={styles.autorxsContainer}>
                        <div className={styles.autorxContainer}>
                        <Icons className={styles.icon} icon="autorx"/>
                    <h5>{autorxsNotaPrincipal}</h5>
                        </div>
                        <div className={styles.ilusContainer}>
                        <Icons className={styles.icon} icon="ilus"/>
                    <h5>{ilusNotaPrincipal}</h5>
                        </div>
                        </section>
                  
                    <h6 className={styles.fechaContainer}>{fechaNotaPrincipal}</h6>
                  
                    </section>

                    <h5 className={styles.bajadaContainer}>{bajadaNotaPrincipal}</h5>

                 </section>
             </section>
            </section>
            </Link>

            <section className={styles.investCol2}>

            <section style= {Temas.reportesTema} className={styles.ultimoReporteContainer}>
                <img src="" alt="" className={styles.fotoUltimoReporte} />
              <section className={styles.datosReporte}>
                <h4 className={styles.fechaUltimoReporte}>{fechaUltimoReporte}</h4>
                <h2 className={styles.tituloUltimoReporte}>
                    Ultimo Reporte</h2>
                    <h4 className={styles.subtituloUltimoReporte}>de violencia policial</h4>
                    </section>
            </section>
              
                <section className={styles.investMore}>
                
                <Link to="/podcast" style={Temas.investTema} className={styles.podcastContainer}>
             <section style= {Temas.investTema} className={styles.podcast}>
                <h2 className={styles.tituloPodcast}>
                    Podcast</h2>
                <div>
                    <h5>ir</h5>
                </div>
             </section>  
             </Link>


             <Link to="/autorxs" style={Temas.investTema} className={styles.autorxsSectionContainer}>
             <section style= {Temas.investTema} className={styles.autorxsSection}>
                <h2 className={styles.tituloAutorxsSection}>
                    Autorxs</h2>
                <div>
                </div>
             </section>
             </Link>

             </section>
             
             <Link to="/investigaciones/lista" className={styles.todasLinkContainer}>
             <section style= {Temas.investTema} className={styles.todasLink}>
                <h5 className={styles.flecha}>flecha</h5>
             </section>
             </Link>
            </section>
        

            </section>





        </>
    );
}

export default Investigaciones