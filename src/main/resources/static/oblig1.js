const billetter = [];

}

function kjopBillett(){
    if (document.getElementById("filmError").innerHTML === ""){
    }
    if (document.getElementById("feilNavn").innerHTML !== "" ||
        document.getElementById("feilEtternavn").innerHTML !== "" ||
        document.getElementById("feilEpost").innerHTML !== "" ||
        document.getElementById("feilTelefonnr").innerHTML){
        return;
    }
    let altAvBilletten = billetter.length; // legger til antall billeter som er allerede skrevet
    const bilett = {
        film: document.getElementById("film").value,
        antall: document.getElementById("antall").value,
        navn: document.getElementById("navn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    };
    billetter.push(bilett);
    for (let i = altAvBilletten; i < billetter.length; i++){
        let textParagraph = document.createElement("p");
        textParagraph.textContent = "Film: " + billetter[i].film + ", Antall: " +
            billetter[i].antall + ", Navn: " + billetter[i].navn + " " + billetter[i].etternavn +
            ", Telefonnr: " + billetter[i].telefonnr + ", Epost: " + billetter[i].epost;
        document.getElementById("billetter").appendChild(textParagraph);
        document.getElementById("billetter").appendChild(document.createElement("br"));
    }
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("navn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}
   if (document.getElementById("antall").value === ""){
       document.getElementById("feilAntall").innerText = "Må skrive inn antall"
   }

   if(document.getElementById("navn").value === ""){
       document.getElementById("feilNavn").innerText = "Må skrive inn navn"
   }

   if (document.getElementById("etternavn").value === ""){
       document.getElementById("feilEtternavn").innerText = "Må skrive inn etternavn"
   }

   if (document.getElementById("telefonnr").value === ""){
       document.getElementById("feilTelefonnr").innerText = "Må skrive inn telefonnr"
   }

   if (document.getElementById("epost").value === ""){
       document.getElementById("feilEpost").innerText = "Må skrive inn epost"
   }

function valTelefonnr(telefonnr){
    let regx =/^[0-9]{8}$/;
    if (regx.test(telefonnr)){
        document.getElementById("feilTelefonnr").innerHTML = "";
        return true;
    }
}

function valEpost(epost){
    let regx = /^[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/;
    if (regx.test(epost)){
        document.getElementById("feilEpost").innerHTML = "";
        return true;
    }
}

function slettBillett(){
        while (billetter.length !==0){
            billetter.pop();
    }
    document.getElementById("billeter").innerHTML="";
}
