import { Jefaturas } from "./Jefaturas";

export interface Superintendencias {
    id: string;
    superintendencia: string;
    autoridad_superior: Jefaturas;
}