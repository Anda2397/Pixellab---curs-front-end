//FUNCȚII

console.warn("~~~~~~~~~~ EX 1: CIFRE => Zilele saptamanii ~~~~~~~~~~")

function determinaZiuaSaptamanii (ziuaPrimita) {
    switch (ziuaPrimita) {
        case '1':
            console.log ('Luni');
            break;
        case '2':
            console.log('Marti');
            break;
        case '3':
            console.log ('Miercuri');
            break;
        case '4':
            console.log ('Joi');
            break;
        case '5':
            console.log ('Vineri');
            break;
        case '6':
            console.log ('Sâmbătă');
            break;
        case '7':
            console.log ('Duminică');
            break;
    }
}

let stringNumar = '1234567'

for (let i=0; i<=stringNumar.length; i++) {
    pozitiaCurenta = i; //Variabila pozitiaCurenta este setată la valoarea curentă a lui i. Aceasta păstrează indexul curent în buclă
    caracterulCurent = stringNumar [pozitiaCurenta]; //Variabila caracterulCurent preia valoarea caracterului din stringNumar la poziția pozitiaCurenta. În esență, acest cod extrage caracterul la poziția i din stringNumar
    determinaZiuaSaptamanii (caracterulCurent); //Aici, funcția determinaZiuaSaptamanii este apelată cu caracterulCurent ca argument. Funcția va determina și afișa ziua săptămânii corespunzătoare valorii caracterulCurent
}


console.warn("~~~~~~~~~~ EX 2: SUMA NUMERELOR PARE DINTR-UN ARRAY ~~~~~~~~~~")

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function SumaNumerePareDinArray (array) {
    let suma = 0;
    for (i=0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        suma = suma + array [i];
    }
    }
return suma; 
}

console.log("Suma numerelor pare din array este: " + SumaNumerePareDinArray (array));


console.warn("~~~~~~~~~~ EX 3: FILTRAREA NUMERELOR IMPARE DINTR-UN ARRAY ~~~~~~~~~~")

const arrayInCareAmAdaugatNumere = [1, 2, 3];
arrayInCareAmAdaugatNumere.push (4, 5, 6);
console.log ("Array dupa push: " + arrayInCareAmAdaugatNumere);

function filtrareNumereImpare (arrayInCareAmAdaugatNumere) {
    const arrayStocareNr = [];
    for (let i=0; i< arrayInCareAmAdaugatNumere.length; i++) {
        if (arrayInCareAmAdaugatNumere[i] % 2 !=0) {
            arrayStocareNr.push(arrayInCareAmAdaugatNumere[i]);
        }
    }
    return arrayStocareNr;
}

console.log ("Am filtrat numerele impare din array: " + filtrareNumereImpare(arrayInCareAmAdaugatNumere));


console.warn("~~~~~~~~~~ EX 4: SE DAU UN ARRAY SI O VARIABILA. RETURNATI TRUE SAU FALSE DACA VARIABILA SPECIFICATA SE GASESTE IN ARRAY~~~~~~~~~~")
//VARIANTA CU ARRAY INCLUDES
let arrayCuvinte = ['caine', 'pisica', 'iepure'];
let cuvantCautat = 'iepure'; 

const SeAflaCuvantulCautatInArray = arrayCuvinte.includes(cuvantCautat);
console.log("Se afla cuvantul cautat in array? " + SeAflaCuvantulCautatInArray);

//VARIANTA CU FUNCTIE SI INCLUDES
function cautamCuvantulInArray (arrayCuvinte, cuvantCautat) {
    return arrayCuvinte.includes(cuvantCautat);
}

console.log ("Se afla cuvantul cautat in array? " + cautamCuvantulInArray (arrayCuvinte, cuvantCautat));

//VARIANTA CU FUNCTIE SI FOR
function cautaInArray (arrayCuvinte, cuvantCautat) {
    let count = 0;
    for (let i=0; i<arrayCuvinte.length; i++) {
        if (cuvantCautat === arrayCuvinte[i]) {
            count +=1;
            if (count>0) {
                return "TRUE"
            }
        }
    }
}

console.log("Se afla cuvantul cautat in array? " + cautaInArray (arrayCuvinte, cuvantCautat));