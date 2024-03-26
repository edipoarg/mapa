import { VscTools } from 'react-icons/vsc';
import { BiBookReader, BiWorld, BiVideoRecording  } from 'react-icons/bi';
import { TbAlertTriangle, TbZoomExclamation, TbShoppingBagX, TbHandStop  } from 'react-icons/tb';
import { HiOutlineMusicalNote, HiOutlinePhoto } from 'react-icons/hi2';
import { BsMegaphone, BsDiagram3 } from 'react-icons/bs';
import { GiGunshot, GiNotebook } from 'react-icons/gi';
import { IoAppsOutline } from 'react-icons/io5';
import { SiMaildotru } from 'react-icons/si';
import {GrDocumentExcel} from 'react-icons/gr';
import {FaPersonMilitaryToPerson} from 'react-icons/fa6'
import {SlPencil} from 'react-icons/sl';
import { FaMapMarker } from "react-icons/fa";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";


const iconComponents = {
  mapa: <TbZoomExclamation />,
  denuncias: <BsMegaphone />,
  recursos: <VscTools />,
  investigaciones: <BiBookReader />,
  reportes: <TbAlertTriangle />,
  podcast: <HiOutlineMusicalNote />,
  jefatura: <BsDiagram3 />,
  contacto: <SiMaildotru />,
  gatillo: <GiGunshot />,
  menu: <IoAppsOutline />,


  /*recursos*/
  intitucionales: <GrDocumentExcel/>,
  genero: <TbHandStop />,
  anteDetencion: <FaPersonMilitaryToPerson/>,
  guia: <GiNotebook />  ,
  ambulantes: <TbShoppingBagX/>,
  migrantes: <BiWorld/>,
  filmar: <BiVideoRecording/>,

  /* investigaciones */
  autorx: <SlPencil/>, 
  ilus: <HiOutlinePhoto/>,

  /*Markers*/
  dependencia: <FaMapMarker/>,
  casosGatillo: <VscDebugBreakpointUnsupported/>,
  casosViolencia: <TbAlertTriangle />,


};

const Icons = ({ icon, className = "", iconSize = "2rem" }) => {
  const iconComponent = iconComponents[icon] || null;

  return <div className={className} style={{ fontSize: iconSize }}>{iconComponent}</div>;
};

export default Icons;
