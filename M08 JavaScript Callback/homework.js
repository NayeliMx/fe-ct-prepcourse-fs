/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   //solución en clase
   /* var nombreMayus = '';
   var primeraLetra = nombre.charAt(0).toUpperCase();
   for (var i = 1; i < nombre.length; i++) {
      nombreMayus = nombreMayus + nombre[i]
      
   } */

   //mi solución
  var nuevoNombre = nombre.split('');
  nuevoNombre[0] = nuevoNombre[0].toUpperCase();  
  nuevoNombre = nuevoNombre.join('');
  return  nuevoNombre;
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var resultado = cb(num1, num2);
   return resultado;
   //return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var total = 0;
   arrayOfNumbers.forEach(number => 
       total += number);
   cb(total);

   //Codigo clase 5:10 pm
  /*  var resultado = arrayOfNumbers.reduce(function(suma, num){
      return suma + sum
   },0)
   cb(resultado) */
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (i = 0; i < array.length; i++) {
      cb(array[i]);    
       
   }
   //arary.forEach(cb)
   //opcion 2 en clase
   /* for (var i = 0; i < array.length; i++) {
      cb(array(i));      
   } */
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:   
   var nuevoArray = [];
   for (i = 0; i < array.length; i++) {
      nuevoArray.push(cb(array[i]));      
   }
   return nuevoArray; 

   //resuelto clase
  /*  var nuevoArray = array.map(function(elemento){
      cb(elemento)
   })
   return nuevoArray;   */ 
   //
 
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevoArray = [];
   for (i = 0; i < arrayOfStrings.length; i++) {
      var dividido = arrayOfStrings[i].split('');
      if(dividido[0] == 'a'){
         dividido = dividido.join('');
         nuevoArray.push(dividido);
      }      
   }
   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
