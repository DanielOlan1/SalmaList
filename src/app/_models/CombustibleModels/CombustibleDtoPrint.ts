export interface CombustibleDtoPrint {
    id: number;
    registro: string | null;
    fechaInicio: string | null;
    operador: string;
    unidad: string;
    letraPR: string;
    modelo: string;
    marca: string;
    litrosDiesel: number;
    precioLitroDiesel: number;
    total: number;
    gasolinera: string;
    origenMunicipio: string;
    destinoMunicipio: string;
    origenEstado: string;
    destinoEstado: string;
    observaciones: string;
    elaboradoPor: string;
    depositado: boolean;
    metodo: string;

}