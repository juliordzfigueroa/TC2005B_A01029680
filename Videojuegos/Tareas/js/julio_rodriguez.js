/*
Julio César Rodríguez Figueroa A01029680
Actividad en clase: Javascript
Práctica de ejercicos de Javascript
12/02/2025
*/

"use strict";

/*

Escribe una función llamada firstNonRepeating que encuentre el primer carácter de un cadena de texto que no se repite.

*/ 

export function firstNonRepeating (texto){
    for (let i = 0; i < texto.length; i++) // Ciclo que controla el número de repeticiones
    {
        let letra = texto[i]; // Se guarda en una variable la letra a comparar
        for (let j = 0; j < texto.length; j++) // Ciclo que se encarga de comparar las letras del string con la primera letra 
        {
            if (i != j  && letra == texto[j]) // Si la letra se repite
            {
                break;
            }
            else
            {
                if (j == texto.length - 1) // Si se llega al final de la comparación sin encontrar repetidos
                {
                    return letra;
                }
            }
        }
    }
}

console.log(firstNonRepeating('abacddbec'))
console.log(firstNonRepeating(''))

/*

Escribe una función llamada bubbleSort que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

*/ 

export function bubbleSort(arry)
{
    for (let i = 0; i < arry.length - 1; i++) // Recorrer de principio a fin el arreglo
    {
        let flag = false; // Bandera que indica si se hacen cambios de ordenamiento
        for (let j = 0; j < arry.length - i - 1; j++) // Recorre de principio hasta i-1
        {
            if (arry[j] > arry[j+1])
            {
                let temp = arry[j]; // Variable temporal para hacer el ordenamiento
                arry[j] = arry[j + 1];
                arry[j + 1] = temp;
                flag = true;
            }
        }
        if (flag == false) // Si no se hizo un cambio en el arreglo
        break;
    }
    return arry;
}

let prueba = [5, 3, 3, 3, 8]
console.log(prueba)
bubbleSort(prueba)
console.log(prueba)

/*

Escribe dos funciones: la primera con nombre invertArray que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; 
la segunda, con nombre invertArrayInplace,que modifique el mismo arreglo que se pasa como argumento.

*/ 

export function invertArray(arry)
{
    let arry2 = []; // Arreglo vacio
    for (let i = arry.length - 1; i >= 0; i--) // se recorre el arreglo desde el ultimo número del arreglo hasta el primero
    {
        arry2.push(arry[i]);
    }
    return arry2;
}

let prueba2 = [1, 2, 3]
console.log(invertArray(prueba2))

export function invertArrayInplace(arry)
{
    for (let i = 0; i < arry.length / 2; i++) // Recorre el arreglo de principio hasta la mitad
    {
        for (let j = arry.length - 1 - i; j >= 0; j--) // Recorre el arreglo desde el final
        {
            let temp = arry[i]; // Variable que guarda el valor que tiene el valor en la posición i
            arry[i] = arry[j];
            arry[j] = temp;
            break;
        }
    }
}

let prueba3 = [10, 4, 5, 6]
invertArrayInplace(prueba3)
console.log(prueba3)

/*
Escribe una función llamada capitalize que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
Código investigado de: 
https://www.freecodecamp.org/espanol/news/como-cambiar-a-mayuscula-la-primera-letra-de-cada-palabra-en-javascript/#:~:text=En%20JavaScript%20existe%20un%20m%C3%A9todo,misma%20cosa%2C%20pero%20en%20may%C3%BAsculas.
https://sentry.io/answers/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript/
*/

export function capitalize(cadena)
{
    if (cadena.length == 0)
    {
        return cadena;
    }
    let palabra = cadena.split(' '); // Separar la cadena en un arreglo de cadenas
    for (let i = 0; i < palabra.length; i++)
    {
        palabra[i] = palabra[i][0].toUpperCase() + palabra[i].substring(1);
    }
    let n_cadena = palabra.join(' ');
    return n_cadena;
}

let prueba4 = ''
capitalize(prueba4)
console.log(capitalize(prueba4))

/*

Escribe una función llamada mcd que calcule el máximo común divisor de dos números.
Implementado a base del algoritmo de Euclides
Recuperado de:
https://es.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
*/

export function mcd(a, b)
{
    if (a == 0) // Si a es 0
    {
        return b;
    }
    else if (b == 0) // Si b es 0
    {
        return a;
    }
    else
    {
        return mcd(b, (a % b)); // Recursión hasta que uno de los dos sea 0
    }
}

console.log(mcd(2, 0))

/*

Crea una función llamada hackerSpeak que cambie una cadena de texto a 'Hacker Speak'. 
Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

*/

export function hackerSpeak(cadena) 
{
    let cadenaH = ''; // Se crea un string vaciá que almacena 
    for (let i = 0; i < cadena.length; i++)
    {
        // Se añaden caracteres al string vació dependiendo del caso
        switch (cadena[i].toLowerCase())
        {
            case 'a':
                cadenaH = cadenaH + 4;
                break;
            case 'e':
                cadenaH = cadenaH + 3;
                break;
            case 'i':
                cadenaH = cadenaH + 1;
                break;
            case 'o':
                cadenaH = cadenaH + 0;
                break;
            case 's':
                cadenaH = cadenaH + 5;
                break
            default:
                cadenaH = cadenaH + cadena[i];
                break;
        }
    }
    return cadenaH;
}

let cadena = "Javascript es divertido"
console.log(hackerSpeak(cadena));

/*

Escribe una función llamada factorize que reciba un número, y regrese una lista con todos sus factores.

*/

export function factorize(n)
{
    let factores = []; // Se crea un arreglo vacío para almacenar los factores
    for (let i = 0; i <= n; i++)
    {
        if (n % i == 0) // Si el resiudo de n entre el valor de i es 0 se añade al arreglo
        {
            factores.push(i);
        }
        else if (n == 0)
        {
            break;
        }
    }
    return factores; // Regresa el arreglo
}

console.log(factorize(0));

/*

Escribe una función llamada deduplicate que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan.
Información acerca de métodos de eliminación recuperada de: https://www.alextomas.com/blog/cinco-formas-eliminar-elementos-array-javascript/

*/

export function deduplicate(arry)
{
    for (let i = 0; i < arry.length; i++)
    {
        let n = arry[i]; // Se guarda el primer número de la lista en una variable.
        for (let j = i + 1; j < arry.length; j++)
        {
            if (arry[j] == n)
            {
                arry.splice(j, 1); // Se borra el elemento de la posición j
                j--; // Ajusta el índice tras eliminar un elemento
            }
        }
    }
    return arry;
}

console.log(deduplicate([1, 0, 1, 1, 0, 0]))

/*

Escribe una función llamada findShortestString que reciba como parámetro una lista de cadenas de texto, 
y regrese la longitud de la cadena más corta.

*/

export function findShortestString(frase)
{
    if (frase.length == 0)
    {
        return 0;
    }
    let shortest= frase[0].length; // Variable que guarará la longitud más chica, se guardará la longitud de la primera en caso de ser la más chica
    for (let i = 1; i < frase.length; i++) // Empezando en la posición 1 
    {
        if (frase[i].length < shortest) // Si la longitud de la palabra encontrada en i es menor a la guardada se actualiza el valor de la variable shortest
        {
            shortest = frase[i].length;
        }
        else
        {
            continue;
        }
    }
    return shortest;
}

let a = ["one", "two", "three", "four", "five", "si"]
console.log(findShortestString(a))

/*

Escribe una función llamada isPalindrome que revise si una cadena de texto es un palíndromo o no.

*/

export function isPalindrome (cadena)
{
    let cadenaP = '' // Se crea una string vacía
    for (let i = cadena.length - 1; i >= 0; i --)
    {
        cadenaP = cadenaP + cadena[i];
    }
    if (cadena == cadenaP)
    {
        return true
    }
    else
    {
        return false
    }
}

let palindromo = "oxxo"
console.log(isPalindrome(palindromo))


/*

Escribe una función llamada sortStrings que tome una lista de cadena de textos 
y devuelva una nueva lista con todas las cadenas en orden alfabético.

*/

export function sortStrings(arry)
{
    for (let i = 0; i < arry.length - 1; i++) // Recorrer de principio a fin el arreglo
    {
        let flag = false; // Bandera que indica si se hacen cambios de ordenamiento
        for (let j = 0; j < arry.length - i - 1; j++) // Recorre de principio hasta i-1
        {
            if (arry[j].toLowerCase() > arry[j+1].toLowerCase())
            {
                let temp = arry[j]; // Variable temporal para hacer el ordenamiento
                arry[j] = arry[j + 1];
                arry[j + 1] = temp;
                flag = true;
            }
        }
        if (flag == false) // Si no se hizo un cambio en el arreglo
        break;
    }
    let n_arry = arry; //Se guarda el arreglo ordenado en una variable
    return n_arry; // Regresamos el arreglo
}

let lCadenas = ["Perro", "gato", "elefante", "abeja", "jirafa"];
console.log(sortStrings(lCadenas));

/*

Escribe una función llamada stats que tome una lista de números y devuelva una lista con dos elementos: la mediana y la moda. 

*/

// Función que calcula la media del conjunto de datos

export function media(arry)
{
    if (arry.length == 0) // Si la lista esta vacia.
    {
        return 0;
    }
    else
    {
        let sum = 0; // Suma total de los elementos del arreglo
        for (let i = 0; i < arry.length; i++)
        {
            sum = sum + arry[i];
        }
        let media = sum / arry.length;
        return media;
    }
}

// Función para calcular la mediana de un conjunto de números

export function mediana(arry)
{
    if (arry.length == 0) // Si la lista esta vacia.
    {
        return 0;
    }
    else 
    {
        let mediana = 0; // Variable que guardará la mediana
        let tot_nums = arry.length; // Se guarda la longitud total del arreglo
        bubbleSort(arry); // Se ordena el arreglo en caso de venir desordenado(ordenamiento de menor a mayor)
        if (tot_nums % 2 == 0) // Si la longitud total es par
        {
            // Se toman los dos números de en medio y se saca el promedio
            mediana = (arry[(tot_nums / 2 - 1)] + arry[(tot_nums / 2 )]) / 2;
        }
        else // Tiene un número impar de elemetos
        {
            mediana = arry[tot_nums/2];
        }
        return mediana; 
    }
}

// Función para calcular la moda de un conjunto de números. 

export function moda(arry) // Pendiente
{
    if (arry.length == 0) // Si la lista esta vacia.
    {
        return 0;
    }
    bubbleSort(arry); // Ordenamos el arreglo
    let moda = arry[0] // Tomamos el primer valor del arreglo como moda
    let cont = 1;  // Contador de repeticiones del número actual
    let max = 1;  // Máximo número de repeticiones encontrado hasta el momento

    for (let i = 1; i < arry.length; i++) 
    {
        if (arry[i] == arry[i - 1]) // Si el elemento actual es igual al elemento anterior
        {  
            cont++; // Se incrementa el número
        } 
        else // Si cambia el número
        {
            if (cont > max)
            {
                max = cont;
                moda = arry[i - 1];
            }
            cont = 1; // Reiniciamos el contador para el proximo número
        }
    }
    
    return moda;
}

// Función stats

export function stats(arry)
{
    return [media(arry), moda(arry)];
}

console.log(stats([4, 4, 6, 8, 4, 4, 6, 8]))

/*

Escribe una función llamada popularString que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

*/

export function popularString(arry)
{
    if (arry.length == 0)
    {
        return ""; // Si la lsita esta vacía regresar un string vacío
    }
    let p = arry[0]; // Variable que guarda el primer elemento de la lista para comparar
    let max = 0; // El número máximo de repeticiones 
    let cont; // Variable que mide con que frecuencia se repite una cadena de la lista
    for (let i = 0; i < arry.length; i++) 
    {
        cont = 0
        for (let j = 0; j < arry.length; j++) 
        {
            if (arry[i] == arry[j]) 
            {
                cont++;
            }
        }
        if (cont > max) // Si encontramos un nuevo máximo actualizamos la cadena popular
        {
            max = cont;
            p = arry[i];
        }
    }
    
    return p;
}


const cadenas = [];
console.log(popularString(cadenas)); 

/*

Escribe una función llamada isPowerOf2 que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
Usando un logaritmo de la libreria de Math. Recuperado de: 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/log
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round

*/

export function isPowerOf2(n)
{
    if (n <= 0) // Si es un número negativo o 0 no es potencia de dos;
    {
        return false;
    }
    else if (n == 1) // Uno es potencia 2 por el exponente 0
    {
        return true 
    }
    else
    {
        let exp; // Variable que guardará el exponente al que se eleva dos para llegar a ese número.
        exp = Math.round(Math.log(n) / Math.log(2)); // Cálculo del exponente redondeado a un número entero
        if (Math.pow(2, exp) == n) // Si 2 elevado al exponente calculado es exactamente igual a n
        {
            return true
        }
        else // Si no
        {
            return false;   
        }
    }
}

console.log(isPowerOf2(0));

/*

Escribe una función llamada sortDescending que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
Implementado a base de bubbleSort del ejercicio anterior

*/

export function sortDescending(arry)
{
    for (let i = 0; i < arry.length - 1; i++) // Recorrer de principio a fin el arreglo
    {
        let flag = false; // Bandera que indica si se hacen cambios de ordenamiento
        for (let j = 0; j < arry.length - i - 1; j++) // Recorre de principio hasta i-1
        {
            if (arry[j] < arry[j+1])
            {
                let temp = arry[j]; // Variable temporal para hacer el ordenamiento
                arry[j] = arry[j + 1];
                arry[j + 1] = temp;
                flag = true;
            }
        }
        if (flag == false) // Si no se hizo un cambio en el arreglo
        break;
    }
    return arry;
}

let p = [5, 3, 3, 3, 8];
sortDescending(p)
console.log(p);