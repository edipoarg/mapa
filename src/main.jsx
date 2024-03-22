import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import {loader as getURLs} from './components/Loader.jsx';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";

import Investigaciones from "./components/Investigaciones/Investigaciones.jsx";
import Denuncia from "./components/denuncia/Denuncia.jsx";
import Denuncias from "./components/denuncias/Denuncias.jsx";
import Recursos from "./components/recursos/Recursos.jsx";
import Jefatura from "./components/jefatura/Jefatura.jsx";
import Reportes from "./components/reportes/Reportes.jsx";
import Nosotrxs from "./components/us/Nosotrxs.jsx";
import Menu from "./components/menu/Menu.jsx";
import GatilloFacil from "./components/gatilloFacil/GatilloFacil.jsx";
import Podcast from "./components/podcast/Podcast.jsx";
import Recurso from "./components/recurso/Recurso.jsx";
import Autorxs from "./components/Investigaciones/autorxs/Autorxs.jsx";
import Investigacion from "./components/Investigaciones/investigacion/Investigacion.jsx";
import Root from "./routes/Root.jsx";
import TodasInvestigaciones from "./components/Investigaciones/todasInvest/TodasInvestigaciones.jsx";

const loader = async () => ({
  urls: await getURLs({
    barriosCaba: "data/barriosCaba.json",
    departamentos: "data/departamentos.json",
    caba: "data/caba.json",
  }),
})


const router = createHashRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      { path:"/", element:<App/>, loader},
      { path:"/denuncias", element:< Denuncias/> },
      { path:"/recursos", element:< Recursos/> },
      { path:"/investigaciones", element:< Investigaciones/> },
      { path:"/jefatura", element:< Jefatura/> },
      { path:"/reportes", element:< Reportes/> },
      { path:"/nosotrxs", element:< Nosotrxs/> },
      { path:"/menu", element:< Menu/> },
      { path:"/podcast", element:< Podcast/> },
      { path:"/gatillo-facil", element:< GatilloFacil/> },
      { path:"/denuncia", element:< Denuncia/> },
      { path: "/recursos/:dominio", element: <Recurso/>},
      { path: "/autorxs", element: <Autorxs/>},
      { path: "/investigacion/:dominio", element: <Investigacion/>},
      { path: '/investigaciones/lista', element: <TodasInvestigaciones /> },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

