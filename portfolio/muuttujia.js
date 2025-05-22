console.log("Muuttujat ladattu");

function summa(x, y) {
    alert("Summa: " + (x + y));
}

function vahennys(x, y) {
    alert("Vähennys: " + (x - y));
}

function kerto(x, y) {
    alert("Kerto: " + (x * y));
}

function jako(x, y) {
    alert("Jako: " + (x / y));
}



function laskin_summa() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    summa(eka, toka);
}

function laskin_vahennys() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    vahennys(eka, toka);
}

function laskin_kerto() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    kerto(eka, toka);
}

function laskin_jako() {
    let eka = Number(document.getElementById("numero1").value);
    let toka = Number(document.getElementById("numero2").value);
    jako(eka, toka);
}

function naytaPaivamaaraJaAika() {
    const nyt = new Date();

    const paiva = nyt.getDate();
    const kuukausiNro = nyt.getMonth(); // 0-11
    const vuosi = nyt.getFullYear();

    const tunnit = nyt.getHours().toString().padStart(2, '0');
    const minuutit = nyt.getMinutes().toString().padStart(2, '0');
    const sekunnit = nyt.getSeconds().toString().padStart(2, '0');

    const viikonpaivat = ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];
    const kuukaudet = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];

    document.getElementById("paivamaara").innerText = `${paiva}.${kuukausiNro + 1}.${vuosi}`;
    document.getElementById("aika").innerText = `${tunnit}.${minuutit}.${sekunnit}`;
    document.getElementById("paivaJaAika").innerText = `${paiva}.${kuukausiNro + 1}.${vuosi} klo ${tunnit}.${minuutit}.${sekunnit}`;
    document.getElementById("viikonpaiva").innerText = viikonpaivat[nyt.getDay()];
    document.getElementById("kuukausi").innerText = kuukaudet[kuukausiNro];
}
