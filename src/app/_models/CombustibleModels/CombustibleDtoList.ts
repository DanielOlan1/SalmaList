import { Gasolinera } from '../gasolinera';
import { OperadorDtoComplete } from 'src/app/_models/OperadorModels/operadorDtoComplete';
import { Municipio } from '../UbicacionModels/municipio';
import { UnidadDtoComplete } from '../UnidadModels/unidadDtoComplete';

export interface CombustibleDtoList {
    id: number;
    registro: string | null;
    fechaInicio: string | null;
    operador: string | null;
    alias: string | null;
    unidad: string | null;
    letraPR: string | null;
    litrosDiesel: number;
    precioLitroDiesel: number;
    gasolinera: string | null;
    origenMunicipio: string | null;
    destinoMunicipio: string | null;
    origenEstado: string | null;
    destinoEstado: string | null;
    observaciones: string | null;
    elaboradoPor: string | null;
    depositado: boolean | null;
    metodo: string;
    edenred: string;

}