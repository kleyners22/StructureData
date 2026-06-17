
const numeroSecreto = Math.floor(Math.random()*10 +1);

const numeroJugador = parseInt (prompt("Adivina el numero secreto entre el numero 1 al 19"));

console.log(`Este es el numero con el que juegas ${numeroJugador}`);
if (numeroJugador === numeroSecreto){
    console.log("Felicitaciones adivinaste el numero")
} else if (numeroJugador < numeroSecreto){
    console.log("Numero menor! Intente nuevamente")
} else {
    console.log("numero mayor/muy alto, intenta nuevamente ")
}

const a = 10
const b = 10
const c = 10
a = b
a == b
a === b

