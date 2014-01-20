/*
 * Questo è un blocco per gli appunti JavaScript.
 *
 *Inserire del codice JavaScript, fare clic con il tasto destro o selezionare dal menu Esecuzione:
 * 1. Esegui per eseguire il codice selezionato (Cmd-R)
 * 2. Analizza per aprire una finestra di analisi oggetto sul risultato (Cmd-I)
 * 3. Visualizza per inserire il risultato come un commento dopo il testo selezionato. (Cmd-L)
 */

function sum(a, b){

    return a + b;    

}

console.log(sum(3, 2));

function birthday(date){
    
    return date.toString();

}

var bday = new Date();

console.log(birthday(bday));

function ageAllowed(age){
    
    var isAllowed;
    
    if(age < 18){
    
        isAllowed = false;
    
    }else{
    
        isAllowed = true;
    
    }
    
    return isAllowed;
    
}

console.log(ageAllowed(18));
console.log(ageAllowed(16));

function sayHello(name, age){

    if(!ageAllowed(age)){
    
        console.log('hi ' + name + ' you are not allowed!');
        
    }else{
        
        console.log('hi ' + name + ' welcome to our gambling web site!');
    
    }

}
sayHello('Lorente', 16);

