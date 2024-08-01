function VerElNumero() {
    const numero = parseInt(nume.value);

//probe muchas combinaciones diferentes para usar el bucle de manera correcta, pero creo que igual no esta completamente bien.
    while (numero) {
        if (numero >= 40) {
            window.alert("El numero ingresado es mayor a 40")
        } else {
            window.alert("El numero ingresado es menor a 40")
        }
        break;
    }
}