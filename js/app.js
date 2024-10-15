/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
:segno_spunta_bianco:
7
:ditto:
2
:starbutterfly:
1*/

//STAMPARE NUMERI DA 1 A 100 
for (i = 0 ; i < 100 ; i++) {
    const num = i + 1

    //FIZZBUZZ
     if(num % 3 === 0 && num % 5 ===0){
        console.log("FIZZBUZZ")
    }

    //FIZZ
    else if (num % 3 === 0) {
        console.log("FIZZ")

     //BUZZ
    } else if ( num % 5 ===0){
        console.log("BUZZ")
    }
    
    
    //NUM
    else {
        console.log(num)
    }
}