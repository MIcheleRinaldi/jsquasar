/*
 * Questo è un blocco per gli appunti JavaScript.
 *
 *Inserire del codice JavaScript, fare clic con il tasto destro o selezionare dal menu Esecuzione:
 * 1. Esegui per eseguire il codice selezionato (Cmd-R)
 * 2. Analizza per aprire una finestra di analisi oggetto sul risultato (Cmd-I)
 * 3. Visualizza per inserire il risultato come un commento dopo il testo selezionato. (Cmd-L)
 */

// Variables

var name, surname;

name = 'giorgio';

// if(surname === undefined)alert('attento');
//console.log(name + ' ' + surname);

name = null;

// Array
var data1 = new Array();
var data2 = [];

// With data1 and data2 you get the same result

var data3 = new Array(5);
var data4 = [1, 2, 3, 4, 5, 6, 7];

// Create an Array with 5 empty indexes
// console.log(data1);
// console.log(data3);

var data6 = new Array(3);
data6[0] = 'a';
data6[1] = 'b';
data6[2] = 'c';
// End of the Array
data6[5] = 'd';
data6[10] = 'e';

// console.log(data6);

for(var i = 0, tot = data6.length; i < tot; i++){
    
    // console.log(data6[i]);

}

// Conditional statements
var gender = 'F', age = 18;

if( gender == 'M' ){

    console.log('good morning sir');

}else if(gender == 'F'){

    console.log('good morning madame');

}else{
    
    console.log('good morning');

}

if( age >= 18 ){

    console.log('start play with us');

}

var value1 = 1, value2 = '1';

if(value1 == value2){
    
    console.log('WAT');

}

// ==========================

switch(gender == 'F'){
    
    case true:
    console.log('good morning madame');
    break;
    
    case false:
    console.log('good morning sir');
    break;
    
    default:
    console.log('good morning');

}

// ==========================

switch(true){
    
    case gender == 'F':
    console.log('good morning madame');
    break;
    
    case gender == 'M':
    console.log('good morning sir');
    break;
    
    default:
    console.log('good morning');

}

console.log('-----------------------');

// Functions

function sayHello(){
    
    console.log('Hello World!');

}

// console.log(sayHello);
sayHello();

function sayHelloAgain(){
    
    console.log('Hello World!', this);

}

sayHelloAgain();

console.log('-----------------------');

function Welcomer(name, gender){
    
    console.log('Hello World!', this);
    this.name = name;
    this.gender = gender;
    
    var sayHello = function(){
        
        switch(true){
    
        case gender == 'F':
        console.log('good morning madame ' + name);
        break;
    
        case gender == 'M':
        console.log('good morning sir ' + name);
        break;
    
        default:
        console.log('good morning ' + name);

        }
        
        console.log(this);
        
    };
    
    return{
    
        hello: sayHello
    
    };

}

var obj = new Welcomer('donald duck', 'M');
console.log(obj);
obj.hello();

