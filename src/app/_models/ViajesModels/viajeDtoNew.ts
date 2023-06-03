export interface ViajeDtoNew {
    operador: number;
    unidad: number;
    origen: number;
    destino: number;
    cliente: number;
    producto: number;
    cartaPorte: string;
    fechaAsignacion: Date | null;
}