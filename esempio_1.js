/*
 * Questo è un blocco per gli appunti JavaScript.
 *
 *Inserire del codice JavaScript, fare clic con il tasto destro o selezionare dal menu Esecuzione:
 * 1. Esegui per eseguire il codice selezionato (Cmd-R)
 * 2. Analizza per aprire una finestra di analisi oggetto sul risultato (Cmd-I)
 * 3. Visualizza per inserire il risultato come un commento dopo il testo selezionato. (Cmd-L)
 */

name = "giorgio";

var user = (function(name, surname){
    
    console.log(name);
    console.log(this.name);
    console.log(name);
    console.log(this);
    console.log("===========");
    
    name = name;
    this.surname = surname;
    
    var sayHello = function(){
    
        console.log("Ciao " + this.name + " " + this.surname);
    
    };
    
    return {
        
        hello: sayHello
    
    };

});

console.log(user);
/*
var test = user("mario", "rossi");
console.log(user);
console.log(test);
*/
/*
Exception: return not in function
*/