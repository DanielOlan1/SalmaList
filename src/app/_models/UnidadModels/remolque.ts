import { LetraPR } from './letraPR';

export interface Remolque {
    id: number;
    noRemolque: string;
    noEconomico: string;
    noSerie: string;
    placas: string;
    capacidad: number;
    marca: string;
    modelo: number;
    tarjetaCirculacion: string;
    poliza: string;
    tipo: string;
    pR: LetraPR;
}