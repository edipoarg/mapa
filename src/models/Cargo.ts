import {Efectivo} from './Efectivo.js';
import {Cargos} from './Cargos.js';
import {Grados} from './Grados.js';
import { Dependencia } from './Dependencias.js';

export interface Cargo {
    id: string;
    Efectivo: Efectivo['nombre'];
    lp: Efectivo['lps'];
    grado: Grados;
    cargo: Cargos;
    dependencia: Dependencias;
    responsabilidades: string;
}