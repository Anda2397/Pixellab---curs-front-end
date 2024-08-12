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


 // Exercitii simple cu functii - ARRAYS

 console.warn ("EXERCITII SIMPLE CU FUNCTII - ARRAYS")

 /* Ex 1: 
    Adaugă și elimină elemente:
    Creează un array gol.
    Adaugă trei elemente cu push().
    Elimină ultimul element cu pop(). */

    console.log ("~~~~~~~ EXERCITIUL 1 ~~~~~~~")

    array = [];
    array.push ("struguri", "banane", "portocale");
    console.log ("Array-ul cu cele 3 elemente adaugate: " + array);
    array.pop ();
    console.log ("Am eliminat ultimul element din array: " + array);


    /* Ex 2: 
    Creează o listă de cumpărături:
    Folosește unshift() pentru a adăuga un element la începutul array-ului.
    Folosește shift() pentru a elimina primul element din listă. */

    console.log ("~~~~~~~ EXERCITIUL 2 ~~~~~~~")

    let listaCumparaturi = ['carne', 'fructe', 'legume', 'lactate'];

    listaCumparaturi.unshift('produse curatenie');
    console.log ("Am adaugat un produs la inceputul listei: " + listaCumparaturi);
    listaCumparaturi.shift();
    console.log ("Am eliminat primul produs din lista: " + listaCumparaturi);


 /* Ex 3: 
    Iterare cu forEach():
    Creează un array cu trei nume.
    Folosește forEach() pentru a afișa fiecare nume în consolă. */

    console.log ("~~~~~~~ EXERCITIUL 3 ~~~~~~~")

    let nume = ['Andrei', 'Ioana', 'Cosmin'];

    nume.forEach (function (name) {
        console.log (name);
    });


    /* Ex 4: 
    Sortarea și eliminarea duplicatelor:
    Creează un array cu numere care se repetă.
    Eliminați duplicatele folosind indexOf() și filter(). */

    console.log ("~~~~~~~ EXERCITIUL 4 ~~~~~~~")

    let numereCareSeRepeta = [1, 1, 1, 3, 5, 5, 7, 7, 10, 4, 4];

    function eliminaDubluri (array) {
        return array.filter ((element, index, arr) => {
            return arr.indexOf (element) === index;
        });
    }

    let numereUnice = eliminaDubluri (numereCareSeRepeta); 

    console.log (numereUnice);

    /* Ex 5: 
    Dublarea valorilor cu map():
    Creează un array cu numere.
    Folosește map() pentru a crea un nou array în care fiecare număr este dublat. */

    console.log ("~~~~~~~ EXERCITIUL 5 ~~~~~~~")

    let numere = [1, 2, 3, 4, 5, 6, 7, 8];

    let numereDublate = numere.map (function (numar){
        return numar * 2;
    });

    console.log (numereDublate);
