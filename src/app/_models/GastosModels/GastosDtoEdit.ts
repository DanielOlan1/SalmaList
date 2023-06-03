export interface GastosDtoEdit {
    id: number;
    registro: string | null;
    fechaInicio: string | null;
    operador: number;
    unidad: number;
    total: number;
    origen: number;
    destino: number;
    observaciones: string;
    elaboradoPor: string;
    depositado: boolean;
    liquidado: boolean;
    metodo: number;
}