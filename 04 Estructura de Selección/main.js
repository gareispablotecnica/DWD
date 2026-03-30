/*
    if(Variable Cond Dato){
        Acciones
    }
    COND:
    - Mayor >
    - Menor <
    - Mayor o igual >=
    - Menor o igual <=
    - igual ==
    - === igual
    - <> o != Distinto
*/

// Determinar si el Usuario es mayor de edad

let Edad= parseInt(prompt('Ingres su Edad:'))

if(Edad >=18){
    alert('Es mayor de edad')
}
else{
    alert('Es menor de edad')
}