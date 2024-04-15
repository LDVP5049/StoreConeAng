export class Mermas {
    id? : string;
    codigo? : number;
    tipo_de_merma = "";
    fecha_ingreso = "";
    nombre_producto = "";

    constructor() {
        let fechaActual = new Date();
        this.fecha_ingreso = fechaActual.toISOString().substring(0,10); // Esto establecerá la fecha actual como valor por defecto
    }
}

