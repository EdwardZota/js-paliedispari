
const scegliPariDispari = prompt('Scegli pari o dispari');


const numeroGiocatore = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeroGiocatore);

const numeroComputer = generatoreNumeroRandom(1,5);
console.log(numeroComputer);

const even = pariDispari(numeroGiocatore,numeroComputer);
console.log(even)

//da dichiare chi ha vinto


//funzioni
//funzione generazione numero random

function generatoreNumeroRandom(min,max){
    return numeroCasuale = Math.floor(Math.random() * (max - min + 1) + min);
}


//funzione per stabilire se la somma di 2 numeri è pari o dispari

function pariDispari(num1,num2){
    const somma = num1 + num2;
    console.log(somma);

    if (somma % 2 == 0){
        return `la somma dei numeri è pari`;
    }else{
        return `la somma dei numeri è dispari`;
    }

}