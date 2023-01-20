let alumnos = 3;

alert("BIENVENIDO AL CURSO, TIENE " + alumnos + " ALUMNOS PARA EVALUAR");

for (let i=0; i<alumnos; i+=1) {
    let nombreAlumno = prompt("INGRESE EL NOMBRE Y/Ó APELLIDO DEL ALUMNO:");
    while (nombreAlumno === "" || nombreAlumno == null) { //tambien devolver este mensaje si ingresa un numero, solo aceptar texto
        nombreAlumno = prompt("Ups! Debe ingresar algún dato. INGRESE EL NOMBRE Y/Ó APELLIDO DEL ALUMNO:");
    }
    let totalDeNotas = 0;
    let contador = 0;
    let termino = false;
    while(!termino) {
        let nuevaNota = parseInt(prompt("INGRESE LA/S NOTA/S DEL ALUMNO (notas desde 1 hasta 10), Ó INGRESE '0' PARA FINALIZAR"));
        while (nuevaNota > 10) { //solo permitir numeros, sin espacios
            nuevaNota = parseInt(prompt("Ups! Debe ingresar una nota desde 1 hasta 10. INGRESE LA/S NOTA/S DEL ALUMNO (notas desde 1 hasta 10), Ó INGRESE '0' PARA FINALIZAR"));
        }
        if(nuevaNota === 0) {
            termino = true;
            if (totalDeNotas != 0) {
                alert("EL PROMEDIO DE NOTAS PARA " + nombreAlumno + " ES: " + (totalDeNotas / contador));
            } else {
                alert("EL ALUMNO " + nombreAlumno + " NO TIENE NINGUNA NOTA");
            }
        } else {
            totalDeNotas = totalDeNotas + nuevaNota;
            contador+=1
        }
    }
}