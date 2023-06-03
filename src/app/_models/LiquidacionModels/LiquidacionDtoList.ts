import { ValeDeGastos } from "../GastosModels/ValeDeGastos";

export interface LiquidacionDtoList {
    id: number;
    operador: string;
    fechaInicio: string | null;
    fechaFinal: string | null;
    valeDeGastos: ValeDeGastos[] | null;
    totalGastos: number;
    totalComprobados: number;
    elaboradoPor: string;
    observaciones: string;
}