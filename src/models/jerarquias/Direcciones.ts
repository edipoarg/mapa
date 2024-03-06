import { Superintendencias } from "./Superintendencias";

export interface Direcciones {
    id: string;
    jefatura: string;
    autoridad_superior: Superintendencias;
}