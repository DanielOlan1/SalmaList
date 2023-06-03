
export interface LiquidacionDtoNew {
    operador: number;
    vale1: number | null;
    vale2: number | null;
    vale3: number | null;
    vale4: number | null;
    vale5: number | null;
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
    observaciones: string;
    // totalGastos: number | null;
    // totalComprobados: number | null;
}