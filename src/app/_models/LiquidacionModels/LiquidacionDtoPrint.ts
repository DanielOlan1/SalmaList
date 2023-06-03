import { GastosDtoPrint } from "../GastosModels/GastosDtoPrint";

export interface LiquidacionDtoPrint {
    id: number;
    operador: string;
    fechaInicio: string | null;
    fechaFinal: string | null;
    valeDeGastos: GastosDtoPrint[] | null;
    totalGastos: number;
    totalComprobados: number;
    elaboradoPor: string;
    observaciones: string;

    peajes: number;
    casetasIva: number;
    diesel: number;
    paqueteria: number;
    estancias: number;
    federal: number;
    gratificacion: number;
    maniobras: number;
    pensiones: number;
    refacciones: number;
    facturas: number;
    talachas: number;
    basculas: number;
    taxi: number;
}