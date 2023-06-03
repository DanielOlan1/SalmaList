export interface ConceptoDto
{
    descripcion:string;
    cantidad:number;
    importe :number;
    claveProdServ:string;
    descuento:number;
    descuentoSpecified:boolean;
    claveUnidad:string;
    cuentaPredialNumero:string;
    noIdentificacion:string;
    unidad:string;
    valorUnitario:number;
    trasladoBase:number;
    trasladoImporte:number;
    trasladoTasaOCouta:number;
    trasladoTipoFactor:string;
}