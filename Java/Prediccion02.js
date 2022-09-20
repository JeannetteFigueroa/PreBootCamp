function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
// Se imprimirá toda la información que esté dentro de la variable auntContactInfo// 

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
/* En Frozen se añadirá al final "croqueta de papa" y se imprimirá al final:
"brócoli, helado, croqueta de papa" */

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary); 

/* Primero se añadirá al final "Zoro" quedando: "bambi", "E.T", "Toy Story", "Zoro"
pero además se cambiará la pelicula E.T por "Beetlejuice" */