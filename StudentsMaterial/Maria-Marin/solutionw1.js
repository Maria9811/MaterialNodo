//Ejercicios de Programación.

//Ejercicios de Vectores sin funciones

//Este es el vector a usar
//let numbers = [1, 2, 3, 4, 5];

//1.   Sumar Elementos de un Vector
  // - Descripción: Suma todos los elementos de un vector y muestra el resultado.
   
   let numbers = [1, 2, 3, 4, 5];
   let j=0;
   for (let i =0;i<5;i++ ){
    j+=numbers[i];
   }
console.log(j);

//2.   Encontrar el Máximo de un Vector
   //- Descripción: Encuentra y muestra el valor máximo en un vector.

let max=-1;
for (let i of numbers){
    if(max<i){
        max=i;
    }
}
console.log("El número mayor es " + max); 

//3.   Invertir un Vector
   //- Descripción: Invierte el orden de los elementos de un vector y muestra el resultado.

