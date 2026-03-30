/*
    - If Anidado
    if(Variable Cond Dato){
        Acciones
    }
    else if(Variable Cond Dato){
        Acciones
    }
    else{
        Acciones
    }
*/

/* --> Dado el ingreso de una edad determinar:
    - Si la edad ingresada es mayor o igual a 65 años, entonces es jubilado.
    - si la edad es inferior a 65 años pero mayor o igual a 18 años, entonces es adulto.
    - En caso contrario, es menor de edad.
*/

let Edad = parseInt(prompt('Ingrese su Edad'))

if (Edad >= 65) {
    alert('jubilado')
}
// --> AND (&&)   -  OR (||)
else if (Edad < 65 && Edad >= 18) {
    alert('Mayor de Edad')
}
else{
    alert('Menor de Edad')
}