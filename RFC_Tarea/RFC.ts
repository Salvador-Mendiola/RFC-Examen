class RFC{

    public ObtenerRFC(){

        let nombres,SegundoNombre, PrimerApellido, SegundoApellido, Fecha, respuesta, rfc, anio, mes, dia : string;
        let arreglo : string[]=[];


        do {
            nombres = String(prompt("Ingresa Tu nombre"));
            nombres = nombres.substring(0,1)

            SegundoNombre = String(prompt("Ingresa tu segundo nombre"))
            SegundoNombre = SegundoNombre.substring(0,1);

            if (SegundoNombre == "") {
                PrimerApellido = String(prompt("Ingresa tu primer Apellido"));
                PrimerApellido = PrimerApellido.substring(0,2); 
            }else{
                PrimerApellido = String(prompt("Ingresa tu primer Apellido"));
                PrimerApellido = PrimerApellido.substring(0,1);
            }

            SegundoApellido = String(prompt("Ingresa tu segundo Apellido"));
            SegundoApellido = SegundoApellido.substring(0,1);

            Fecha = String(prompt("Ingresa tu fecha de nacimiento en formato DD/MM/AAAA"));
            anio = Fecha.substring(8);
            mes = Fecha.substring(3,5);
            dia = Fecha.substring(0,2);

            if (SegundoNombre == "") {
                rfc = (PrimerApellido.toUpperCase() + SegundoApellido.toUpperCase() + nombres.toUpperCase() + anio + mes + dia);
            }else{
                rfc = (PrimerApellido.toUpperCase() + SegundoApellido.toUpperCase() + nombres.toUpperCase() + SegundoNombre.toUpperCase() + anio + mes + dia);
            }

            arreglo.push(rfc);
            respuesta = String(prompt('Desea ingresar otro RFC \n si \n no'))
            }while (respuesta == "si") {
            
            }

            console.log(arreglo);
    }
}
let objeto3 = new RFC();
    objeto3.ObtenerRFC();