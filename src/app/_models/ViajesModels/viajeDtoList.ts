export interface ViajeDtoList {
    id: number;
    operador: string;
    unidad: string;
    letraPR: string;
    modelo: string;
    origenMunicipio: string;
    destinoMunicipio: string;
    origenEstado: string;
    destinoEstado: string;
    cliente: string;
    fechaAsignacion: Date | null;
    fechaCarga: Date | null;
    fechaDescarga: Date | null;
    producto: string;
    cartaPorte: string;
    litrosCargadosTq1: number | null;
    litrosCargadosTq2: number | null;
    litrosDescargadosTq1: number | null;
    litrosDescargadosTq2: number | null;

    temperaturaCarga: number | null;
    litrosCargados20Grados: number | null;

    temperaturaDescarga: number | null;

    litrosDescargados20Grados: number | null;

    litrosCargadosBascula: number | null;
    litrosDescargadosBascula: number | null;




    cargaLatitud: string;
    cargaLongitud: string;
    descargaLatitud: string;
    descargaLongitud: string;
    elaboradoPor: string;
}