

export interface ValeDeGastos {
    id: number;
    registro: string | null;
    fechaInicio: string | null;
    //operador: Operador | null;
    // unidad: Unidad | null;
    // origen: Municipio | null;
    // destino: Municipio | null;
    total: number;
    // elaboradoPor: AppUser | null;
    observaciones: string;
    liquidado: boolean | null;
    depositado: boolean | null;
    // metodo: MetodoDeposito;
    // liquidacionId: number | null;
    //liquidacion: Liquidacion | null;
}