import {Persona} from './Persona';

export interface Institucion {
    id: string;
    tipo: ;
    nombre: string;
    descripcion: string;
    responsable: Persona;
    autoridad_superior: string;
    subordinados: string;
}