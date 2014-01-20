/*
 * Questo è un blocco per gli appunti JavaScript.
 *
 *Inserire del codice JavaScript, fare clic con il tasto destro o selezionare dal menu Esecuzione:
 * 1. Esegui per eseguire il codice selezionato (Cmd-R)
 * 2. Analizza per aprire una finestra di analisi oggetto sul risultato (Cmd-I)
 * 3. Visualizza per inserire il risultato come un commento dopo il testo selezionato. (Cmd-L)
 */

function User(name, surname){
    
    this.name = name;
    this.surname = surname;
    
    this.age = null;
    
}



console.log(User);

var utente = new User("giorgio", "natili");
utente.age = 39;

console.log(utente.name, utente.age);