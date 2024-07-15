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
console.log ("Array-ul initial este: " + array);

function  filtreazaDivizibile (array, numar) {
    return array % 2 ===  0;
}

const numereleDivizibile = array.filter (filtreazaDivizibile);
console.log ("Array-ul care contine umerele divizibile cu 2 este: " + numereleDivizibile);