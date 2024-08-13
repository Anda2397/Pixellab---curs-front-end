// Exercitii simple cu functii

console.warn("EXERCITII SIMPLE CU FUNCTII");

/* Ex. 1: Creează o funcție numită salut care să primească
un parametru numit nume. Funcția trebuie să returneze un mesaj de
salut de forma "Salut, [nume]!". Cheamă funcția cu numele tău și
afișează rezultatul în consolă.*/

console.log("~~~~~~~ EXERCITIUL 1 ~~~~~~~");

function salut(nume) {
  return "Salut," + nume + "!";
}

console.log(salut("Anda"));

/* Ex. 2: Creează o funcție numită estePar care să primească un număr ca parametru
și să returneze true dacă numărul este par și false dacă este impar. Testează funcția cu câteva 
numere diferite și afișează rezultatele în consolă.*/

console.log("~~~~~~~ EXERCITIUL 2 ~~~~~~~");

function estePar(numar) {
  if (numar % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(estePar(2));
console.log(estePar(7));

/* Ex. 3: Creează o funcție numită ariaDreptunghi care să primească
doi parametri: lungime și latime. Funcția trebuie să returneze
aria dreptunghiului (lungime * latime). Testează funcția cu câteva
valori și afișează rezultatele.*/

console.log("~~~~~~~ EXERCITIUL 3 ~~~~~~~");

function ariaDreptunghi(lungime, latime) {
  return (ariaDreptunghiului = lungime * latime);
}

console.log(ariaDreptunghi(4, 8));
console.log(ariaDreptunghi(5, 9));

/* Ex. 4: Creează o funcție numită care să primească doi
parametri: numar1 și numar2. Funcția trebuie să returneze numărul
mai mare dintre cele două. Testează funcția cu diferite valori.*/

console.log("~~~~~~~ EXERCITIUL 4 ~~~~~~~");

function careEsteNumarulMaiMare(numar1, numar2) {
  if (numar1 > numar2) {
    return numar1;
  } else {
    return numar2;
  }
}

console.log(careEsteNumarulMaiMare(4, 8));
console.log(careEsteNumarulMaiMare(30, 7));

/* Ex 5: Creează o funcție numită sumaElementelor care să primească un array de numere ca
parametru și să returneze suma tuturor elementelor din array. Testează funcția cu diferite array-uri. */

console.log("~~~~~~~ EXERCITIUL 5 ~~~~~~~");

function sumaElementelor(array) {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  return suma;
}

console.log(sumaElementelor([2, 2, 2]));
console.log(sumaElementelor([16, 30, 2]));

// Exercitii simple cu functii - ARRAYS

console.warn("EXERCITII SIMPLE CU FUNCTII - ARRAYS");

/* Ex 1: 
    Adaugă și elimină elemente:
    Creează un array gol.
    Adaugă trei elemente cu push().
    Elimină ultimul element cu pop(). */

console.log("~~~~~~~ EXERCITIUL 1 ~~~~~~~");

array = [];
array.push("struguri", "banane", "portocale");
console.log("Array-ul cu cele 3 elemente adaugate: " + array);
array.pop();
console.log("Am eliminat ultimul element din array: " + array);

/* Ex 2: 
    Creează o listă de cumpărături:
    Folosește unshift() pentru a adăuga un element la începutul array-ului.
    Folosește shift() pentru a elimina primul element din listă. */

console.log("~~~~~~~ EXERCITIUL 2 ~~~~~~~");

let listaCumparaturi = ["carne", "fructe", "legume", "lactate"];

listaCumparaturi.unshift("produse curatenie");
console.log("Am adaugat un produs la inceputul listei: " + listaCumparaturi);
listaCumparaturi.shift();
console.log("Am eliminat primul produs din lista: " + listaCumparaturi);

/* Ex 3: 
    Iterare cu forEach():
    Creează un array cu trei nume.
    Folosește forEach() pentru a afișa fiecare nume în consolă. */

console.log("~~~~~~~ EXERCITIUL 3 ~~~~~~~");

let nume = ["Andrei", "Ioana", "Cosmin"];

nume.forEach(function (name) {
  console.log(name);
});

/* Ex 4: 
    Sortarea și eliminarea duplicatelor:
    Creează un array cu numere care se repetă.
    Eliminați duplicatele folosind indexOf() și filter(). */

console.log("~~~~~~~ EXERCITIUL 4 ~~~~~~~");

let numereCareSeRepeta = [1, 1, 1, 3, 5, 5, 7, 7, 10, 4, 4];

function eliminaDubluri(array) {
  return array.filter((element, index, arr) => {
    return arr.indexOf(element) === index;
  });
}

let numereUnice = eliminaDubluri(numereCareSeRepeta);

console.log(numereUnice);

//Ex asta nu l-am prea inteles, l-am copiat de la chat gpt :(

/* Ex 5: 
    Dublarea valorilor cu map():
    Creează un array cu numere.
    Folosește map() pentru a crea un nou array în care fiecare număr este dublat. */

console.log("~~~~~~~ EXERCITIUL 5 ~~~~~~~");

let numere = [1, 2, 3, 4, 5, 6, 7, 8];

let numereDublate = numere.map(function (numar) {
  return numar * 2;
});

console.log(numereDublate);

/* Ex 6: 
    Creează un array de numere.
    Filtrează numerele pare cu filter().
    Folosește map() pentru a tripla valorile numerelor filtrate. */

console.log("~~~~~~~ EXERCITIUL 6 ~~~~~~~");

let arrayNumere = [1, 2, 3, 4, 5, 6];
let numerePare = arrayNumere.filter(function (numar) {
  return numar % 2 === 0;
});

console.log("Numerele pare din array sunt: " + numerePare);

let triplareValoriNumereFiltrate = numerePare.map(function (numar) {
  return numar * 3;
});

console.log("Numerele filtrate * 3: " + triplareValoriNumereFiltrate);

/* Ex 7: 
    Creează un array de șapte elemente.
    Extrage o secțiune din array cu slice().
    Elimină elementele extrase din array-ul original cu splice(). */

console.log("~~~~~~~ EXERCITIUL 7 ~~~~~~~");

let arraySapteElemente = [1, "maimuta", 3, 5, 4, 6, 8];
console.log("Arrayul original: " + arraySapteElemente);

let arrayNou = arraySapteElemente.slice(1, 5);
console.log("Arrayul nou: " + arrayNou);

arraySapteElemente.splice(1, 4);
console.log(
  "Array dupa eliminarea elementelor extrase din arrayul original: " +
    arraySapteElemente
);

/* Ex 8: 
    Creează un array cu cinci elemente.
    Înlocuiește al treilea element cu un altul folosind splice(). */

console.log("~~~~~~~ EXERCITIUL 8 ~~~~~~~");

let arrayCinciElemente = [1, 2, 3, 4, 5];
console.log("Array original: " + arrayCinciElemente);

arrayCinciElemente.splice(3, 1, "kiwi");
console.log(
  "Am inlocuit elementul de pe pozitia 3 (cifra 4) cu kiwi: " +
    arrayCinciElemente
);

// Exercitii de la curs

console.warn("EXERCITII DE LA CURS");

/* Ex 1: 
    Creati un obiect in care sa tinem minte cate vaci avem la ferma, si cate rate
    10 vaci, 5 rate.
    Calculati suma animalelor.  */

console.log("~~~~~~~ EXERCITIUL 1 ~~~~~~~");

let ferma = {
  vaci: 10,
  rate: 5,
};

function sumaAnimalelor(ferma) {
  return ferma.vaci + ferma.rate;
}

console.log("Total animale ferma: " + sumaAnimalelor(ferma));

/* Ex 2: 
    Scrieti o functie care calculeaza cate “picioare” au animalele fermei  */

console.log("~~~~~~~ EXERCITIUL 2 ~~~~~~~");

function catePicioareAuAnimaleleFermei(ferma) {
  numarPicioareVaci = 4;
  numarPicioareRate = 2;
  return ferma.vaci * numarPicioareVaci + ferma.rate * numarPicioareRate;
}

console.log(
  "Cate picioare au in total animalele fermei: " +
    catePicioareAuAnimaleleFermei(ferma)
);

/* Ex 3: 
    Rescrieti obiectul intr-un array de obiecte care sa aiba aceeasi structura ca si:
    { 
    animal: “caine”,
    Sunet: “ham”,
    Numar: “3”
    }  */

arrayFerma = [
  { animal: "caine", sunet: "ham", numar: "3" },
  { animal: "vaca", sunet: "mu", numar: "10" },
  { animal: "rata", sunet: "mac", numar: "5" },
];


/* Ex 4: 
    Scrieti o functie care merge prin array-ul de mai sus si scrie sunetul animalului de atatea ori de cate ori este acesta prezent 
    Ex: muu muu … de 10 ori
    mac mac …de 5 ori
    ham ham ham */

    console.log("~~~~~~~ EXERCITIUL 4 ~~~~~~~");

    function afiseazaSuneteleAnimalelor (array){
        array.forEach (function(element){
            let sunetRepetat = "";   // Inițializăm un string gol pentru a acumula sunetele
            for (let i = 0; i < element.numar; i ++){
                sunetRepetat += element.sunet + " ";  // Adăugăm sunetul și un spațiu după fiecare repetare
            }
            console.log (sunetRepetat);
        });
    }

    console.log (afiseazaSuneteleAnimalelor(arrayFerma));

    // La exercitiul asta nu m-am prea descurcat

/* Ex 5: 
    Adaugati un nou obiect in array, pentru porci , de care vom avea 7. */

    console.log("~~~~~~~ EXERCITIUL 5 ~~~~~~~");

    arrayFerma.push ({animal: "porc", sunet: "groh", numar: "7"});
    console.log ("Am adaugat porcul in array-ul de obiecte:");
    console.log (arrayFerma);


    /* Ex 6: 
    Identificati animalele care sunt in numar par. */

    console.log("~~~~~~~ EXERCITIUL 6 ~~~~~~~");

    function animaleNumarPar(arrayFerma) {
        let animalePar = []; // Declaram un array gol pentru a stoca animalele cu număr par
    
        for (let i = 0; i < arrayFerma.length; i++) {
            let obiectAnimal = arrayFerma[i]; // Extragem fiecare obiect din array

            if (obiectAnimal.numar % 2 === 0) { // Verificăm dacă numărul este par
                animalePar.push(obiectAnimal); // Adăugăm obiectul în array-ul 'animalePar'
            }
        }
    
        return animalePar; // Returnăm array-ul cu animalele care au un număr par de exemplare
    }
    
    console.log(animaleNumarPar(arrayFerma));

    // Ex facut cu ajutorul chat GPT