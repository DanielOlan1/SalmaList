import { estadoMexicano } from "../UbicacionModels/EstadoMexicano";

export interface OperadorDtoComplete {
    estadoMexicano: any;
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    alias: string;
    nombrePemex:string;
    unidadPr: string;
    domicilio: string;
    colonia: string;
    municipio: string;
    estadoId: number;
    codigoPostal: string | null;
    telefonoEmergencia: number | null;
    celular: number | null;
    rfc: string;
    curp: string;
    afilacionIMSS: string | null;
    sueldoDiario: number | null;
    fechaNacimiento: Date;
    activo: boolean | null;
    numeroOperador: number;
    edenred: string;
    banco: number | null;
    numeroDeCuenta: string;
    licencia: number;
    vencimientoLicencia: number;
    tipoLicencia: number | null;
    grupoSanguineo: number | null;
    diabetico: boolean;
    hipertenso: boolean;
    casado: boolean;
    casoAccidenteAvisarA: string;
    tipo: string;

}
//Modelo para Details del Operador
//Modify_this