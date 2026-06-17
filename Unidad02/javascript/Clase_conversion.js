
const stringdecimal = '3.14';
const float = parseFloat(stringdecimal);

console.log(stringdecimal)

const binary = '10010';
const decimal = parseInt(binary,2);

console.log(decimal)

const suma = 3 - true;
console.log(suma)


//condicionales

//== si es del mismo valor 
console.log(5 == "5");

//=== si es del mismo tipo y del mismo valor
console.log(5 === "5");

//!= diferente comparar solo el valor
console.log(5 != "5");

//!== si es diferente del mismo tipo y del mismo valor
console.log(10 !=="5");

//< menor
console.log(9 < "10");

//> mayor
console.log(10 > "9");

//OR
console.log(10 > 20 || 5 < 10); 
console.log(3 > 5 || 8 > 10);   // false
console.log(5 == "5" || 7 === 8); // true

// NOT !

console.log(!(10 > 5)); // false
console.log(!(3 > 8));  // true
console.log(!(5 === "5")); // true

// AND &&
console.log(8 > 5 && 10 < 20); 
console.log(8 > 5 && 10 > 20); 
console.log(5 == "5" && 10 === 10);




//if 
const edad = 100;
if (edad < 18){
    console.log("Menor de edad")
} 
else {
    console.log("Mayor de edad")
}

//switch

const decenas = 10;

switch (decenas) {
    case 10:
        console.log("Diez");

    case 20:
        console.log("Veinte");

    case 30:
        console.log("Treinta");

    case 40:
        console.log("Cuarenta");

    case 50:
        console.log("Cincuenta");
}
