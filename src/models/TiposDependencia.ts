import { Institucion } from "./Institucion";

export interface Jefaturas {
    id: string;
    jefatura: string;
    autoridad_superior: Institucion;
    
}

export interface Superintendencias {
    id: string;
    superintendencia: string;
    autoridad_superior: Jefaturas;
}

export interface Direcciones {
    id: string;
    jefatura: string;
    autoridad_superior: Superintendencias;
}

  export interface DepartamentosComisarias {
    id: string;
    area: string;
    autoridad_superior: Direcciones;
}   

  export interface Divisiones {
    id: string;
    jefatura: string;
    autoridad_superior: DepartamentosComisarias;
}

export interface Area {
    id: string;
    area: string;
    autoridad_superior: Institucion | DepartamentosComisarias | Direcciones | Jefaturas | Superintendencias;
  }
  


