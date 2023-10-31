/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = parseInt(prompt("Inserisci il primo numero"))
let num2 = parseInt(prompt("Inserisci il secondo numero"))
if(num1 > num2){
  alert("Il primo numero inserito è piu grande del secondo")
}
else if(num2 > num1){
  alert("Il secondo numero inserito è piu grande del primo")
}
else{
  alert("I numeri inseriti sono uguali")
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numerodavalutare = parseInt(prompt("Inserisci numero"))
if(numerodavalutare !== 5){
    console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numerofornito = parseInt(prompt("Inserire numero"))
if(numerofornito % 5 === 0){
  console.log("Divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numerouno = parseInt(prompt("Inserire numero"))
let numerodue = parseInt(prompt("Inserire numero"))
if(numerouno === 8 || numerodue === 8){
  console.log("Hai inserito 8 almeno in un campo")
}
else if(numerouno + numerodue === 8 || numerouno - numerodue === 8){
   console.log("l'addizione/sottrazione dei numeri inseriti è 8")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = parseInt(prompt("Inserisci costo articolo nel carrello"))
if(totalShoppingCart > 50){
  console.log(`Il costo totale è ${totalShoppingCart}`)
}
else{
  console.log(`Il costo totale è ${totalShoppingCart+10}`)
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri567 = [ "9" ,"6" , "7"]
numeri567.sort()


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val1 = 4
let val2 = 5
console.log(typeof val1 === number)
console,log(typeof val2 === number)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = parseInt(prompt("inserisci il numero"))
if(numero % 2 === 0){
  alert("il numero è pari")
}
else{
  alert("il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val > 5) {
      console.log("Piu di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val > 5) {
      console.log("Piu di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastname
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills.css
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero20 = 1
const numero21 = 2
const numer022 = 3
const numero23 = 4
const numero24 = 5
const numero25 = 6
const numero26 = 7
const numero26 = 8
const numero27 = 9
const numero28 = 10


const insiemenumeri = ["1" , "2" , "3", "4" , "5" , "6" , "7" , "8" , "9" , "10"]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete insiemenumeri.10
