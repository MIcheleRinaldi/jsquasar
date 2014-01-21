/*
 * Questo è un blocco per gli appunti JavaScript.
 *
 *Inserire del codice JavaScript, fare clic con il tasto destro o selezionare dal menu Esecuzione:
 * 1. Esegui per eseguire il codice selezionato (Cmd-R)
 * 2. Analizza per aprire una finestra di analisi oggetto sul risultato (Cmd-I)
 * 3. Visualizza per inserire il risultato come un commento dopo il testo selezionato. (Cmd-L)
 */

var img = document.createElement('img');

img.onload = function(evt){
    $('body').append(img);
    console.log('success', evt);
    
};

img.onerror = function(error){
    
    console.log('error' + error);
    
};

img.src = 'img/jaws.jpg';

$.ajax({
    
    url: "login.php",
    /* success: callBack, */
    cache: false
    
    }
    
}).done(function(data) {
        
        if (console && console.log ) {
            
            console.log( "Sample of data:", data.slice( 0, 100 ) );
        
        }

}).fail(function(error) {

    if(console && console.log){


        console.log( error );
    }

}).always(function() {

    alert( "complete" );

});
 
