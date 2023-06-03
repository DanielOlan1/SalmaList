import { estadoMexicano } from "../UbicacionModels/EstadoMexicano";

//Modelo para consulta de OperadoresList
export interface OperadorDtoShort {

    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    alias?: string;
    unidadPr?: string;
    municipio: string;
    estado: estadoMexicano;
    celular: number;
    fechaNacimiento?: Date;
    activo: boolean;

}
//Modify_this