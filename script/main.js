console.log('principi.js loaded');

//sezione di accesso
let accedi = document.getElementById('accedi');

document.getElementById('accesso').style.visibility='visible';
document.getElementById('gioco_dadi').style.visibility='hidden';
document.getElementById('accesso_negato').style.visibility='hidden';
document.getElementById('errore_compilazione').style.visibility='hidden';
// stabilire una white list di accesso al gioco
let white_list = [
    'gino@boolean.it',
    'ciccino@boolean.it',
    'pinco@boolean.it',
    'pallo@boolean.it',
    'pasticcino@boolean.it',
    'pinocchio@boolean.it',
    'romolo@boolean.it',
    'remo@boolean.it'
]


function validazione_mail(){
    let email = document.getElementById('email').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // verifica se è o meno una mail valida
    if(emailPattern.test(email) == true){
        //verifica white list
        if(white_list.indexOf(email) !== -1){
            document.getElementById('accesso').style.visibility='hidden';
            document.getElementById('accesso_negato').style.visibility='hidden';
            document.getElementById('errore_compilazione').style.visibility='hidden';
            document.getElementById('gioco_dadi').style.visibility='visible';
        }
        else{
            document.getElementById('errore_compilazione').style.visibility='hidden';
            document.getElementById('accesso_negato').style.visibility='visible';
            document.getElementById('accesso_negato').innerHTML=`${'Mi dispace, ma non hai il permesso di accedere.<br>Per richieder il permesso contattaci<br>al +39 000 000 0000'}`;
        }
    }
    else{
        document.getElementById('accesso_negato').style.visibility='hidden';
        document.getElementById('errore_compilazione').style.visibility='visible';
        document.getElementById('errore_compilazione').innerHTML='I caratteri inseriti non sono validi.<br>Perfavore riprovare.';
    }
}

accedi.addEventListener('click', validazione_mail);
// fine sezione di accesso


