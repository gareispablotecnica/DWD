/*
    Arrays

    - String
    - Numerico
    - Caracteres
    - Mixtos

    const Nombre = []

*/

const Nombres =['Julian','Micaela','Sol','Benjami','Bruno']
console.log(Nombres)

const Edades=[17,18,31]
console.log(Edades)

const Comida=['🍗','🥓','🍟','🍔']

// Ordenar
console.log(Nombres.sort())

// agregar un elemeno al final del arrays de Edades
Edades.push(5)
console.log(Edades)

// Eliminar el Primer Elemento
Comida.shift()
console.log(Comida)

// Agrego un Elemento al comienzo del arrays
Comida.unshift('🕸️')
console.log(Comida.unshift('sd'))
// Eliminar Ultimo elemento
Comida.pop()
console.log(Comida)