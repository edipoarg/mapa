import Navbar from "../Navbar";


const Menu = () => {

    return(
        <>

<section style={menu}>
    <section>
    <Link to="/caba" style={botonDenuncias}>
            mapa
    </Link>
    <Link to="/denuncia">
            denunciá
    </Link>
    <Link to="/recursos">
            reportes
    </Link>
    <Link to="/investigaciones">
            investigaciones
    </Link>
    <Link to="/reportes">
            reportes
    </Link>
    <Link to="/podcast">
            podcast
    </Link>
    <Link to="/jefatura">
            jefatura
    </Link>
    <Link to="/contacto">
            contacto
    </Link>
    <Link to="/gatillo-facil">
            gatillo facil
    </Link>

    </section>

</section>

        </>
    );
}

export default Menu