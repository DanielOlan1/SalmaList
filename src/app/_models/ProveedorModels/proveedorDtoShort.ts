//Modelo para consulta de ProveedoresList
export interface ProveedorDtoShort {

    id?: number;
    nombre: string;
    rfc?: string;
    diasDeCredito?: number;
    totalDeuda?: number;
    totalVencido?: number;

}

export interface ProveedorUpdate {

    id?: number;


    diasDeCredito?: number;


}
