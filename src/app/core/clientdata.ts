export interface clientdata {
    name:string;
    lastname:string;
    email:string;
    dni:number;
    born:number;
    cell:number;
    add:string;
}
export interface editclient{
    name?:string;
    lastname?:string;
    email?:string;
    dni?:number;
    born?:number;
    cell?:number;
    add?:string;
}



// ■ Nombre, del tipo String, requerido.
// ■ Apellido, del tipo String, requerido.
// ■ Email, del tipo String, requerido.
// ■ DNI, del tipo numérico, requerido, validar formato DNI.
// ■ F. de Nac. del tipo Date, requerido.
// ■ Teléfono, del tipo String, requerido
// ■ Dirección, del tipo String, requerido
