const billetter = [];

function kjopBillett() {
    if (document.getElementById("filmError").innerHTML === "") {
    }
    finnFeil();

    if (document.getElementById("feilNavn").innerHTML !== "" ||
        document.getElementById("feilEtternavn").innerHTML !== "" ||
        document.getElementById("feilEpost").innerHTML !== "" ||
        document.getElementById("feilTelefonnr").innerHTML) {
        return;
    }

    let innholdAvBilletten = billetter.length; // legger til lengden av billetten
    const billett = {
        film: document.getElementById("film").value,
        antall: document.getElementById("antall").value,
        navn: document.getElementById("navn").value,
        etternavn: document.getElementById("etternavn").value,
        telefonnr: document.getElementById("telefonnr").value,
        epost: document.getElementById("epost").value
    };

    billetter.push(billett);
   // console.log(billett);
    console.log(billetter);
    let tekstFilm = "<table><tr>" +
    "<td><strong>Film</strong></td>" +
    "<td><strong>Antall </strong></strong></td>" +
    "<td><strong>Navn</strong></strong></td>" +
    " <td><strong>Etternavn</strong></strong></td>" +
    "<td><strong>Telefonnr</strong></strong></td>" +
    "<td><strong>Epost</strong></strong></td></tr>";
    for (let i = 0; i < billetter.length; i++) {
        tekstFilm +=
            "<tr><td>" + billetter[i].film +
            "<td>" + billetter[i].antall + "</td>" +
            "<td>" + billetter[i].navn + "</td>" +
            "<td>" + billetter[i].etternavn + "</td>" +
            "<td>" + billetter[i].telefonnr + "</td>" +
            "<td>" + billetter[i].epost + "</td></tr>"
        //console.log(tekstFilm);
    }
    tekstFilm += "</table>"
    document.getElementById("slettBillet").innerHTML = tekstFilm;

    if (document.getElementById("antall").value === "") {
        document.getElementById("feilAntall").innerText = "Må skrive noe inn i antall."
    }

    if (document.getElementById("navn").value === "") {
        document.getElementById("feilNavn").innerText = "Må skrive noe inn i navn."
    }

    if (document.getElementById("etternavn").value === "") {
        document.getElementById("feilEtternavn").innerText = "Må skrive noe inn i etternavn."
    }

    if (document.getElementById("telefonnr").value === "") {
        document.getElementById("feilTelefonnr").innerText = "Må skrive noe inn i telefonnr."
    }

    if (document.getElementById("epost").value === "") {
        document.getElementById("feilEpost").innerText = "Må skrive noe inn i epost."
    }
    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("navn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

function valTelefonnr(telefonnr){
    let regx =/^[0-9]{8}$/;
    if (regx.test(telefonnr)){
        document.getElementById("feilTelefonnr").innerHTML = "";
        return false;
    }
}

function valEpost(epost){
    let regx = /^[a-z A-Z0-9.-]+@\. [a-zA-Z]{2,}$/;
    if (regx.test(epost)){
        document.getElementById("feilEpost").innerHTML = "";
        return false;
    }
}

function slettBillett(){
    while (billetter.length !==0){
            billetter.pop();
    }
    document.getElementById("slettBillet").innerHTML="";
}


