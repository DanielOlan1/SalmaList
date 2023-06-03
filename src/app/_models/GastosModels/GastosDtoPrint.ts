export interface GastosDtoPrint {
    id: number;
    registro: string | null;
    fechaInicio: string | null;
    operador: string;
    unidad: string;
    letraPR: string;
    modelo: string;
    marca: string;
    total: number;
    origenMunicipio: string;
    destinoMunicipio: string;
    origenEstado: string;
    destinoEstado: string;
    observaciones: string;
    elaboradoPor: string;
    depositado: boolean;
    liquidado: boolean | null;
    metodo: string;
    banco: string;
    numeroDeCuenta: string;
}