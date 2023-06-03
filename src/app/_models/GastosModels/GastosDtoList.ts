export interface GastosDtoList {
    id: number;
    registro: string | null;
    fechaInicio: string | null;
    fechaFinal: string | null;
    operador: string;
    alias: string;
    unidad: string;
    letraPR: string;
    origenMunicipio: string;
    destinoMunicipio: string;
    origenEstado: string;
    destinoEstado: string;
    total: number;
    elaboradoPor: string;
    observaciones: string;
    liquidado: boolean;
    liquidacionId: number | null;
    depositado: boolean;
    metodo: string;
    banco: string;
    numeroDeCuenta: string;


}