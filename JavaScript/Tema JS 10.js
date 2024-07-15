/* EX 1: Creaza o funcție care primeste 2 parametri, un array, si un numar,
si returneaza un alt array care reprezinta numerele din primul array care sunt
divizibile cu numarul specificat.
    Ex: 
    Input: filtreazaDivizibile([1,2,3,4,5,6,7,8], 2) 
    Output [2,4,6,8] 
*/
console.warn ("~~~~~~~~~~~ EXERCITIUL 1 ~~~~~~~~~~~")

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let numar = 2; 
console.log ("Array-ul initial contine: " + array);

function  filtreazaDivizibile (array, numar) {
    return array % 2 ===  0;
}

const numereleDivizibile = array.filter (filtreazaDivizibile);
console.log ("Array-ul care cuprinde numerele divizibile cu 2 din array-ul initial contine: " + numereleDivizibile);

/* EX 2: Creaza o functie care primeste ca parametru 2 array-uri,
primul va fi un array cu mai multe numere, al doilea un array cu mai putine numere.
Scopul functiei este sa afle daca toate elementele din array-ul mic sunt prezente in array-ul mare,
si sa returneze true sau daca nu sunt, sa returneze false.

    Exemple:
    Input: verificaIncluziuneArray ([1,2,3,4,5,6,7,8], [1, 2, 3]) 
    Output true

    Input: verificaIncluziuneArray ([1,2,3,4,5,6,7,8], [1, 2, 13]) 
    Output false

    Input: verificaIncluziuneArray ([1,2,3,4,5,6,7,8], [10, 13]) 
    Output false
*/
console.warn ("~~~~~~~~~~~ EXERCITIUL 2 ~~~~~~~~~~~")

function verificaIncluziuneArray (arrayMare, arrayMic) {

    for (let i = 0; i < arrayMic.length; i++) {
        if (!arrayMare.includes (arrayMic [i])) {  
            return false;
        }
    }
    return true;
}

let arrayMare = array;
let arrayMic = [1, 2, 3]; 
console.log(verificaIncluziuneArray (arrayMare, arrayMic));

arrayMic = [1, 2, 13];
console.log(verificaIncluziuneArray (arrayMare, arrayMic));

arrayMic = [10, 13];
console.log(verificaIncluziuneArray (arrayMare, arrayMic));


/* EX 3: Creaza o functie care sterge un element dintr-un array. Functia primeste atat array-ul cat si elementul care trebuie gasit si sters ca parametri, si returneaza functia noua.

    Exemple:
    Input: eliminaElement([1,2,3,4], [3]) 
    Output [1,2,4]
*/

console.warn ("~~~~~~~~~~~ EXERCITIUL 3 ~~~~~~~~~~~")

function eliminaElement (array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice (index, 1);  // index: Specifică poziția elementului din array care trebuie eliminat; 1: Indică numărul de elemente care trebuie eliminate.
    }
    return array;
}

const arrayEx3 = [1, 2, 3, 4];
const pozitiaLui3 = arrayEx3.indexOf(3);
console.log ("Pozitia lui 3 este: " + pozitiaLui3);
const newArray = eliminaElement (arrayEx3, 3);
console.log ("Noul array fara elementul '3' este: " + newArray);


