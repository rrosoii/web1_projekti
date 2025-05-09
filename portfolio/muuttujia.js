
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

