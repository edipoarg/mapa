import {Cargos} from './Cargos.js';
import {Grados} from './Grados.js';
import {Dependencias} from './Dependencias.js'


export interface Efectivo {
    id: string;
    lps: string;
    nombre: string;
    fecha_nacimiento?: string;
    causas?: string;
    observaciones: string;
    imagen?: [string];
}
