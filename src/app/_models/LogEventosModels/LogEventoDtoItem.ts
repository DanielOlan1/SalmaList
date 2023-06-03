
export interface LogEventoDtoItem {
    id: number | null;
    unidadId: number | null;
    unidad: string | null;
    operador: string | null;
    cliente: string | null;
    ubicacion: string | null;
    hora: string | null;
    registro: string;
    fechaAsignacion: string | null;
    fechaCarga: string | null;
    fechaDescarga: string | null;
    producto: string | null;
    googleMapsLink: string | null;
    letraPR: string | null;
    viajeId: number | null;
    cargado: boolean | null;
    accion: number | null;
    accionString: string | null;
    user: string | null;
    origen: string | null;
    destino: string | null;
    observaciones: string | null;
}