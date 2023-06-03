import { LetraPR } from "./letraPR";
import { Remolque } from "./remolque";

export interface UnidadDtoComplete {
    id: number;
    economico: string | null;
    prId: number | null;
    marca: string | null;
    modelo: number | null;
    placas: string | null;
    aseguradora: string | null;
    tarjetaCirculacion: string | null;
    numeroSerie: string | null;
    serieMotor: string | null;
    color: string | null;
    remolque01: Remolque | null;
    remolque02: Remolque | null;
    dolly: Remolque | null;
}