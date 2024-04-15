export class Productos{
    id? : string;
    nombre = "";
    codigo? : number;
    seccion = "";
    proveedorId = "";
    descripcion = "";
    imagen = "";
    precio? : number;
    caducidad: string;

    constructor() {
        let fechaActual = new Date();
        this.caducidad = fechaActual.toISOString().substring(0,10); // Esto establecerá la fecha actual como valor por defecto
    }
}
