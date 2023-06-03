export interface ConsultaFacutraParams {
    texto: string;
    fecha?: Date;
    showPendientes: boolean;
    showPagadas: boolean;
    showProgPagos: boolean;
    showCancelados: boolean;
}
