// Solicitamos la cadena al usuario
let cadena = prompt("Introduzca una cadena");

// Eliminamos los espacios de la cadena y acto seguido la convertimos entera a letras minúsculas
cadena = cadena.replaceAll(" ", "");
cadena = cadena.toLowerCase();
document.write("Cadena a comprobar: <b>" + cadena + "</b><br>")

// Inicializamos el valor de bool a true por defecto
let palindromo = true;

// Comprobamos letra a letra, cogiendo la primera y la última, y avanzando una posición en cada lado opuesto hasta llegar al centro
// No afectaría en caso de que el número de caracteres sea impar ya que en el último caso se compararía consigo mismo
for(let i = 0; i < cadena.length / 2; i++){
    document.write("Comparando: '" + cadena[i] + "' con '" + cadena[cadena.length - 1 - i] + "'= ");
    if(cadena[i] != cadena[cadena.length - 1 - i]){
        document.write("<b>NO Son iguales</b><br>")
        palindromo = false;
    }
    else{
        document.write("<b>Son iguales</b><br>")
    }
}
if(palindromo){
    document.write("<br>La cadena <b>ES</b> un palíndromo")
}
else{
    document.write("<br>La cadena <b>NO es</b> un palíndromo")
}
