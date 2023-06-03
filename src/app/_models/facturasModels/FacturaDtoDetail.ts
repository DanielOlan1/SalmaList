export interface FacturaDtoDetail {
    id: number;
    nombreProveedor: string;
    importe: number;
    statusFactura: number;
    diasDeCredito: number;
    fecha: string;
    folio: string;
    certificado: string;
    condicionesDePago: string;
    confirmacion: string;
    descuento: number;
    programarPago: boolean;
    uUID: string;
    rfc: string;
    
}