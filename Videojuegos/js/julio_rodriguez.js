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

function firstNonRepeating (texto){
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

function bubbleSort(arry)
{
    for (let i = 1; i < arry.length - 1; i++) // Recorrer de principio a fin el arreglo
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
}

let prueba = [5, 3, 3, 3, 8]
console.log(prueba)
bubbleSort(prueba)
console.log(prueba)

/*

Escribe dos funciones: la primera con nombre invertArray que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; 
la segunda, con nombre invertArrayInplace,que modifique el mismo arreglo que se pasa como argumento.

*/ 

function invertArray(arry)
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

function invertArrayInplace(arry)
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

function capitalize(cadena)
{
    let palabra = cadena.split(' '); // Separar la cadena en un arreglo de cadenas
    for (let i = 0; i < palabra.length; i++)
    {
        palabra[i] = palabra[i][0].toUpperCase() + palabra[i].substring(1);
    }
    let n_cadena = palabra.join(' ');
    return n_cadena;
}

let prueba4 = 'hola mundo'
capitalize(prueba4)
console.log(capitalize(prueba4))

/*

Escribe una función llamada mcd que calcule el máximo común divisor de dos números.
Implementado a base del algoritmo de Euclides
Recuperado de:
https://es.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
*/

function mcd(a, b)
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

function hackerSpeak(cadena) 
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

function factorize(n)
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
            factores.push(n);
        }
    }
    return factores; // Regresa el arreglo
}

console.log(factorize(0));

/*

Escribe una función llamada deduplicate que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan.
Información acerca de métodos de eliminación recuperada de: https://www.alextomas.com/blog/cinco-formas-eliminar-elementos-array-javascript/

*/

function deduplicate(arry)
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

function findShortestString(frase)
{
    let palabras = frase.split(' '); // Separa la frase (arreglo de strings) en cadenas simples para contarlas 
    let shortest= palabras[0].length; // Variable que guarará la longitud más chica, se guardará la longitud de la primera en caso de ser la más chica
    for (let i = 1; i < palabras.length; i++) // Empezando en la posición 1 
    {
        if (palabras[i].length < shortest) // Si la longitud de la palabra encontrada en i es menor a la guardada se actualiza el valor de la variable shortest
        {
            shortest = palabras[i].length;
        }
        else
        {
            continue;
        }
    }
    return shortest;
}

let a = 'Buenos días profe es viernes'
console.log(findShortestString(a))

/*

Escribe una función llamada isPalindrome que revise si una cadena de texto es un palíndromo o no.

*/

function isPalindrome (cadena)
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

function sortStrings(arry_a) // pendiente
{
    return arry_a.sort() // Usar la función sort que ordena la función de forma alfabetica.
}

let listaCadenas = ["perro", "gato", "elefante", "abeja", "jirafa"];
console.log(sortStrings(listaCadenas)); // Debería imprimir: ["abeja", "elefante", "gato", "jirafa", "perro"]

/*

Escribe una función llamada stats que tome una lista de números y devuelva una lista con dos elementos: la mediana y la moda. 

*/

// Función para calcular la mediana de un conjunto de números

function mediana(arry)
{
    let mediana = 0.0; // Variable que guardará la mediana
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
    console.log(mediana);
    return mediana; 
}

// Función para calcular la moda de un conjunto de números. 

function moda(arry) 
{
    let moda // Arreglo vacío para guardar la moda
    let cont = 1;  // Contador de repeticiones del número actual
    let max = 0;  // Máximo número de repeticiones encontrado hasta el momento

    for (let i = 1; i < arry.length; i++) 
    {
        if (arry[i] == arry[i - 1]) // Si el elemento actual es igual al elemento anterior
        {  
            cont++; // Se incrementa el número
        } 
        else if (cont > max) // Si cambia el número
        {
            moda = arry[i];
        }
    }
    
    return moda;
}

// Función stats

function stats(arry)
{
    return [mediana(arry), moda(arry)];
}

console.log(stats([4, 4, 6, 8, 4, 4, 6, 8]))

/*

Escribe una función llamada popularString que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

*/

/*

Escribe una función llamada isPowerOf2 que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.

*/

/*

Escribe una función llamada sortDescending que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
Implementado a base de bubbleSort.

*/

function sortDescending(arry) // Pendiente
{
    for (let i = 1; i < arry.length - 1; i++) // Recorrer de principio a fin el arreglo
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
}

