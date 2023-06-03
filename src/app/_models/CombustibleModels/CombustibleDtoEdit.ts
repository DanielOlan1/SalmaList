export interface CombustibleDtoEdit {
    id: number;
    registro: string | null;
    fechaInicio: string | null;
    operador: number | null;
    unidad: number | null;
    litrosDiesel: number;
    precioLitroDiesel: number;
    gasolinera: number | null;
    origen: number | null;
    destino: number | null;
    observaciones: string | null;
    elaboradoPor: string | null;
    depositado: boolean | null;
    metodo: number | null;

}
