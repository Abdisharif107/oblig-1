const billetter = [];
function leggTilBilett(billetter){

}


function validerAntall(Antall){
    let regx = /^[0-9]{8}$/;
    if(regx.test (Antall)){
        $("#feilAntall").html("");
        return true;
    }
    else {
        $("#feilAntall").html("Velg antall mellom 0-9");
        return false;
    }
}

function valideringNavn(navn){
    let regx = /^[A-Z-zæøå. -]{2.50}$/;
    if (regx.test(navn)){
        $("#FeilNavn").html("");
        return true;
    }
    else {
        $("#feilNavn").html("Skriv riktig navn og bruk store og små bokstaver");
        return false;
    }
}

function validerTelefonnr(telefonnr){
    let regx =/^[0-9]{8}$/;
    if (regx.test(telefonnr)){
        $("#feilTelefonnr").html("")
        return true;
    }
    else {
        $("#feilTelefonnr").html("Bruk tall mellom 0-9");
        return false;
    }
}
function validerEpost(epost){
    let regx = /^[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/;
    if (regx.test(epost)){
        $("#feilEpost").html("")
        return true;
    }
    else{
        $("#feilEpost").html("Feil med epost valderingen");
        return false;
    }
}

function kjopBilett(){
    const film = $("#film")
    const antall = $("#antall")
    const navn = $("#feilnavn")
}
