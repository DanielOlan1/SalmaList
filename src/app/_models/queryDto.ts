export interface QueryDto {
    id?: number | null;
    inicio?: Date | null;
    final?: Date | null;
    centroCostos?: number | null;
    paymentStatus?: number | null; //
    programarPago?: boolean | null;
    days?: number | null;
    clienteId?: number | null;

}

