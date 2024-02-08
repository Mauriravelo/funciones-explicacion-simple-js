// FUNCION CLASICA-HOISTING
function saludar(nombre){
    console.log('hola ' + nombre)
}
console.log(saludar('Mauricio'))


// FUNCION ANONIMA
let saludo = function(nombre){
    console.log('hola ' + nombre)
}
console.log(saludo('mauricio'))


// FUNCIONES FLECHA () => {}
let saludo2 = nombre => 'hola ' + nombre
let suma = (a,b) => a + b
let obj = () => ({nombre: 'bob', edad:20})
