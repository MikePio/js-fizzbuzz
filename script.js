/*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

**Prima di partire a scrivere codice poniamoci qualche domanda:**
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
**Consigli del giorno:**
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
**BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
**BONUS 2:**
Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

*/

/*
Steps 

- creare un ciclo for che stampa tutti i numeri interi da 1 a 100
- creare una condizione if con un modulo che mi permetta di vedere tutti i numeri divisibili per 3
- creare una condizione if con un modulo che mi permetta di vedere tutti i numeri divisibili per 5
- creare una condizione if con l'operatore logico and insieme ai 2 moduli che mi permettano di vedere tutti i numeri divisibili per 5 e per 3


*/

console.log('test');

const container = document.querySelector('.container');
console.log(container);

for(let i = 1; i <= 100; i++){
  // console.log(i); //stampa tutti i numeri da 1 a 100 in console
  // OPPURE
// for(let i = 0; i < 100; i++){
//   console.log(i+1);

  // vengono creati gli h3 in html
  let numbers = document.createElement('h3');
  // il contenitore contiene tutti gli h3
  container.append(numbers);
  // ogni h3 ha un proprio numero
  // numbers.append(i);  //stampa tutti i numeri da 1 a 100 nella pagina hmml
  // aggiunge una classe per colorare il background di ogni numero
  numbers.classList.add("bg-color");
  
  
  let numbersMultiples = i;
  
  // SEMPRE MEGLIO METTERE CIò CHE è COMUNE COME CONDIZIONE (ES . PER PRIMA: if(!(i % 3) && !(i % 5)){ COME SECONDA O TERZA if(!(i % 3)){ OPPURE if(!(i % 3)){  ) 
  if(!(i % 3) && !(i % 5)){
  // è LA STESSA COSA DI:
  // if((!(i % 3)) && (!(i % 5))){
    
    numbers.classList.add("bg-orange");
    numbers.classList.add("box");

    // console.log(numbersMultiples - (i % 5) - (i % 3) );
    console.log('FizzBuzz');
    
    numbers.append('FizzBuzz');

      
  }

  else if(!(i % 3)){
  // è LA STESSA COSA DI:
  // if(i % 3 === 0){
    numbers.classList.add("bg-red");
    numbers.classList.add("box");


    // console.log(numbersMultiples - (i % 3) );
    console.log('Fizz');
    numbers.append('Fizz');
    


  }

  else if(!(i % 5)){
  // è LA STESSA COSA DI:
  // if(i % 5 === 0){
    numbers.classList.add("bg-black");
    numbers.classList.add("box");

    
    // console.log(numbersMultiples - (i % 5) );
    console.log('Buzz');
    numbers.append('Buzz');

    
  }
  
  else{
    console.log(numbersMultiples);
    numbers.append(numbersMultiples );

    numbers.classList.add("box");


  }
  // * è LA STESSA COSA DI:
  // else if((i % 3) || (i % 5))  {
  //   console.log(numbersMultiples);

  // }

}


// ! Altra soluzione semplificata //////////////////////////////////////////////////////////////////////////////////////////////
/*
const container = document.querySelector('.container');

for(let i = 1; i < 101; i++){
  
  const box = document.createElement('div');
  box.className = 'box';

  let output = i;
  
  if(!(i % 15)){
    output = 'FizzBuzz';
    box.classList.add('bg-orange');
  }
  if(!(i % 3)){
    output = 'Fizz';
    box.classList.add('bg-red');
  }
  if(!(i % 5)){
    output = 'Buzz';
    box.classList.add('bg-black');
  }
  
  box.append(output);
  container.append(box)

}
*/





























































