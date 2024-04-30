import { Link } from 'react-router-dom';

import styles from './Denuncias.module.css';
import Temas from '../Temas';
import Icons from '../iconos/Icons';
import Reportes from '../reportes/Reportes';

const Denuncias = () => {
    return (
        <>
            <section className={styles.denuncias}>

                <section className={styles.titleContainer} >

                <Link to="/denuncia">
                    <h2 className={styles.title}>QUIERO  <br />DENUNCIAR</h2>
                    <h4 className={styles.subTitle}>Un hecho de violencia policial <br /> como víctima o testigo</h4>

                    
                    </Link>
                    <Icons icon={"denuncias"} className={styles.headerIcon} iconSize="4rem" />

                </section>

                <section className={styles.menuContainer}>

                 <section className={styles.menu}>
                 <h4 className={styles.buttonContainer}>El objetivo de este registro es visibilizar el abuso policial, para fortalecer las redes de cuidado ciudadano. Pero no implica automáticamente ninguna presentación institucional. <br /> En el caso de que quieras hacer una denuncia legal luego de llenar este formulario, podemos recomendarte cómo proceder. <br /> <br />Te pedimos información de contacto, para verificar los hechos. Por eso nos vamos a comunicar con vos, por el canal que elijas. Si querés, podés mantener el anonimato. Y solo publicaremos la fuente, en el caso de que vos nos autorices.</h4>
               </section>

                    <Link to="/reportes">
                    <section className={styles.reportesDenunciasContainer}>
                    
                        <section className={styles.imagenUltimoReporte} >
                        <Icons icon={"reportes"} className={styles.icon} iconSize="2.2rem" />
                        </section>
                        <section className={styles.reporteTitle}>
                        <h2 className={styles.title3}>Reportes</h2> <h3 className={styles.subTitle2}> <br /> de <br /> violencia <br /> policial</h3>
                        </section>

                    </section>
                    </Link>

                </section>
            </section>
            
        </>
    );
}

export default Denuncias;
