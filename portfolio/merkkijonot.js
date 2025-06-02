console.log("Merkkijonot ladattu");

function poimiKirjain() {
    let teksti = document.getElementById("teksti1").value;
    let indeksi = Number(document.getElementById("indeksi1").value);
    document.getElementById("tulos1").innerText = teksti.charAt(indeksi);
}

function loydaIndeksi() {
    let lause = document.getElementById("teksti2").value;
    let haku = document.getElementById("etsittava").value;
    document.getElementById("tulos2").innerText = lause.indexOf(haku);
}

function leikkaaMerkkijono() {
    let teksti = document.getElementById("teksti3").value;
    let alku = Number(document.getElementById("alku").value);
    let loppu = Number(document.getElementById("loppu").value);
    document.getElementById("tulos3").innerText = teksti.slice(alku, loppu);
}

function etsiJaKorvaa() {
    let alkuperainen = document.getElementById("teksti4").value;
    let etsittava = document.getElementById("etsittava4").value;
    let korvaus = document.getElementById("korvaus").value;
    document.getElementById("tulos4").innerText = alkuperainen.replaceAll(etsittava, korvaus);
}

function poikkiJaPinoon() {
    let teksti = document.getElementById("teksti5").value;
    let erotin = document.getElementById("erotin").value;
    let osat = teksti.split(erotin);
    let tulosLista = document.getElementById("tulos5");
    tulosLista.innerHTML = "";
    osat.forEach(osa => {
        let li = document.createElement("li");
        li.innerText = osa;
        tulosLista.appendChild(li);
    });
}