import { Jurisdiccion } from "./Jurisdiccion";
import { Efectivo } from "./Efectivo";
import { AutoridadSuperior, tipoAutoridadSuperior } from "./AutoridadSuperior";
import { Areas } from "./TiposDependencia";
import { DepartamentosComisarias } from "./jerarquias/DepartamentosComisarias";
import { Direcciones } from "./jerarquias/Direcciones";
import { Divisiones } from "./jerarquias/Divisiones";
import { Jefaturas } from "./jerarquias/Jefaturas";
import { Superintendencias } from "./jerarquias/Superintendencias";

export enum AutoridadDependenciaElegida {
    area = 'Areas',
    departamentosComisarias = 'DepartamentosComisarias',
    direcciones = 'Direcciones',
    divisiones = 'Divisiones',
    jefaturas = 'Jefaturas',
    superintendencias = 'Superintendencias',
  }
  
  export interface DependenciaElegida {
    nivel: NivelDependencia;
    autoridad_superior:
  }
  
  export interface Dependencia {
    id: string;
    nivel: NivelDependencia;
    nombre: TiposDependencia['nivel'];
    autoridad_superior: DependenciaElegida['TiposDependencia'];
    jurisdiccion: Jurisdiccion;
    contacto: string;
    nombre_anterior?: string;
    descripcion: string;
    geo_posicion: string;
  }