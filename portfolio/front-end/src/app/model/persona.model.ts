export class persona {
    id?:number;
    nombre:String;
    apellido:String;
    img:string;

    constructor (nombre:String,apellido:String,img:string){
        this.nombre = nombre
        this.apellido = apellido
        this.img = img
    }
}