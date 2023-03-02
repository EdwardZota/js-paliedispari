const scegliParola = prompt('Inserisci una parola o una frase a tua scelta e ti dirò se è palindroma oppure no.');

const parolaSenzaSpazi = scegliParola.replace(/\s/g, "");

console.log(scegliParola);
console.log(parolaSenzaSpazi);

console.log(testPalindromo(parolaSenzaSpazi));



// funzioni 

function testPalindromo (Parola){

    lunghezzaParola = Parola.length

    for(let i = 0; i < lunghezzaParola / 2; i++){

        if(Parola[i] !== Parola[lunghezzaParola - 1 - i]) {

            return `La parola da te scelta NON è palindroma.`;
        }

    }

    return `La parola da te scelta È palindroma.`;

}