export interface FacturaDtoShort {
    id: number | null;
    nombreProveedor: string;
    importe?: number;
    diasDeCredito: number;
    fecha?: Date;
    folio: string;
    paymentStatus?: number;
    centroCostos: number | null;
    programarPago?: boolean;
    uuid?:string;
    facturaSuppliesRecieved: number | null;    
    comprasApproved:boolean|null;
    rfc:string;
}






