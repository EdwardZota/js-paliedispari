
let scegliPariDispari;
let  i = 0;
while(i < 1){
    scegliPariDispari = prompt('Scegli pari o dispari');
    console.log(`hai scelto: ${scegliPariDispari}`);

    if(scegliPariDispari == 'pari' || scegliPariDispari == 'dispari' ){
        i++;
    };
};

let numeroGiocatore;
let x = 0;
while(x < 1){
    numeroGiocatore = parseInt(prompt('Inserisci un numero da 1 a 5'));
    console.log(`Il numero che hai scelto è: ${numeroGiocatore}`);

    if(numeroGiocatore <= 5){
        x++;
    };

};

const numeroComputer = generatoreNumeroRandom(1,5);
console.log(`Il numero del computer è: ${numeroComputer}`);

const even = pariDispari(numeroGiocatore,numeroComputer);

//da dichiare chi ha vinto

if (even === scegliPariDispari){
    console.log('il vincitore sei TU! Complimenti!');
}else{
    console.log('il vincitore è il computer!');
};


//funzioni
//funzione generazione numero random

function generatoreNumeroRandom(min,max){
    const numeroCasuale = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroCasuale;
};


//funzione per stabilire se la somma di 2 numeri è pari o dispari

function pariDispari(num1,num2){
    const somma = num1 + num2;
    console.log(`la somma dei numeri è ${somma}`);

    if (somma % 2 == 0){
        return 'pari';
    }else{
        return 'dispari';
    };

};