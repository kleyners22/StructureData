

// Question 1: Write a code that will create variables and initialize 
// them with values of Boolean, Number, BigInt, String, and undefined types
// using (when possible) literals and constructor functions.
console.log("----------Ejercicios pregunta 1 ----------" )
//Booleano
let b1 = true
let be = Boolean(true)
console.log(b1,typeof be)

//Entero
let n1 = 12
let n2 = Number (n1)
console.log(n1,typeof n2)

    //BigInt
let bi1 = 9090n
console.log(bi1, typeof bi1)

    //String
let s1 = 'Resolviendo la practica'
console.log(s1,typeof s1)

//Question 2: Print all values and all types of those values using console.log.
//Try to use string interpolation to display the value and type at the same time
//  with a single console.log call, e.g. in the following form: 1000 [number].

console.log("----------Ejercicios pregunta 2 ----------" )
console.log(`${b1}[${typeof b1}]`)

console.log(`${n1}[${typeof n1}]`)

console.log(`${bi1}[${typeof bi1}]`)
<
console.log(`${s1}[${typeof s1}]`)

//Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a 
//Number that was created from a String. Start with the value "1234". Is it possible?

console.log("----------Ejercicios pregunta 3 ----------" )
let s3 = '123455'
let n4 = Number(s3)
let bi3 = BigInt(n4)
let bd2 = Boolean(bi3) 

console.log("Valor inicial de la cadena: "+s3)
console.log(`Valor Final de la cadena: ${bd2}[${typeof s3}]`)

//Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.

console.log("----------Ejercicios pregunta 4 ----------" )

let prim1 = 12312
let prim1_2 = 123124
let prim1_3 = prim1 + prim1_2
console.log(typeof prim1_3, prim1_3)

let prim2 = 3139128n
let prim2_1 = 21931938n
let prim2_2 = prim2 + prim2_1
console.log(typeof prim2_2,prim2_2)

let prim3 = 'Resolviendo el ejercicio '
let prim3_1 = 'numero 4'
let prim3_2 = prim3 + prim3_1
console.log(typeof prim3_2,prim3_2)

let prim4 = true
let prim4_2 = false
let prim4_3 = prim4 + prim4_2
console.log(typeof prim4_3,prim4_3)

//Question 5: Try adding two values of different types and check the results.

console.log("----------Ejercicios pregunta 5 ----------" )

let val1 = 'Resolviendo el ejercicio '
let val2 = 4
let val2_1 = val1 + val2
console.log(typeof val2_1, val2_1)

let val3 = true
let val4 = 33247824
let val4_1 = val3 + val4
console.log(typeof val4_1, val4_1)

//Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).

console.log("----------Ejercicios pregunta 6 ----------" )
const str1 = 42 + Number("1");
console.log(str1)