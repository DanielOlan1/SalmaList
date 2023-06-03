
export interface ViajeDtoEdit {
    id: number;
    operador: number;
    unidad: number;
    origen: number;
    destino: number;
    cliente: number;
    fechaAsignacion: Date | null;
    fechaCarga: Date | null;
    fechaDescarga: Date | null;
    producto: number;
    cartaPorte: string;
    factura: number | null;
    sellosTq1: string;
    sellosTq2: string;
    evidenciasLink: string;
    cartaPorteLink: string;

    carga: InformacionProducto;
    descarga: InformacionProducto;
}


export interface InformacionProducto {
    id: number;
    tanque01: Tonel;
    tanque02: Tonel;
    latitud: string;
    longitud: string;
    domicilio: string;
    temperatura: number;
}

export interface Tonel {
    id: number;
    pesoGross: number;
    pesoNeto: number;
    densidad: number;
    litros: number;
    sisa: number;

}