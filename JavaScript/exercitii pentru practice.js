// Exercitii simple cu functii

console.warn ("EXERCITII SIMPLE CU FUNCTII")

/* Ex. 1: Creează o funcție numită salut care să primească
un parametru numit nume. Funcția trebuie să returneze un mesaj de
salut de forma "Salut, [nume]!". Cheamă funcția cu numele tău și
afișează rezultatul în consolă.*/
console.log ("~~~~~~~ EXERCITIUL 1 ~~~~~~~")

function salut (nume) {
    return "Salut," + nume + "!";
}

console.log (salut ("Anda"));


/* Ex. 2: Creează o funcție numită estePar care să primească un număr ca parametru
și să returneze true dacă numărul este par și false dacă este impar. Testează funcția cu câteva 
numere diferite și afișează rezultatele în consolă.*/
console.log ("~~~~~~~ EXERCITIUL 2 ~~~~~~~")

function estePar (numar) {
    if (numar%2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log (estePar (2));
console.log (estePar (7));


/* Ex. 3: Creează o funcție numită ariaDreptunghi care să primească
doi parametri: lungime și latime. Funcția trebuie să returneze
aria dreptunghiului (lungime * latime). Testează funcția cu câteva
valori și afișează rezultatele.*/
console.log ("~~~~~~~ EXERCITIUL 3 ~~~~~~~")

function ariaDreptunghi (lungime, latime) {
    return ariaDreptunghiului = lungime * latime
}

console.log (ariaDreptunghi (4, 8));
console.log (ariaDreptunghi (5, 9));


/* Ex. 4: Creează o funcție numită care să primească doi
parametri: numar1 și numar2. Funcția trebuie să returneze numărul
mai mare dintre cele două. Testează funcția cu diferite valori.*/
console.log ("~~~~~~~ EXERCITIUL 4 ~~~~~~~")

function careEsteNumarulMaiMare (numar1, numar2) {
    if (numar1 > numar2){
        return numar1;
    } else {
        return numar2;
    }
}

console.log (careEsteNumarulMaiMare (4, 8));
console.log (careEsteNumarulMaiMare (30, 7));

/* Ex 5: Creează o funcție numită sumaElementelor care să primească un array de numere ca
parametru și să returneze suma tuturor elementelor din array. Testează funcția cu diferite array-uri. */
 console.log ("~~~~~~~ EXERCITIUL 5 ~~~~~~~")

 function sumaElementelor (array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    return suma;
 }

 console.log (sumaElementelor ([2, 2, 2]));
 console.log (sumaElementelor ([16, 30, 2]));