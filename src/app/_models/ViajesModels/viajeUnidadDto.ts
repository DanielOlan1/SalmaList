export interface ViajeUnidadDto {
    viajeId: number;
    unidad: string;
    letraPR: string;
    operador: string;
    operadorId: number;
    origenMunicipio: string;
    destinoMunicipio: string;
    origenEstado: string;
    destinoEstado: string;
    cliente: string;
    fechaAsignacion: Date | null;
    fechaCarga: Date | null;
    fechaDescarga: Date | null;
}