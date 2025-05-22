console.log("Tehtävälista sivu ladattu");

let lista = ["Tehtävä 1", "Tehtävä 2"];

function paivitaLista() {
    const ul = document.getElementById("tehtavalista");
    ul.innerHTML = ""; 

    for (let tehtava of lista) {
        const li = document.createElement("li");
        li.innerText = tehtava;
        ul.appendChild(li);
    }
}

function lisaa() {
    const input = document.getElementById("uusiTehtava");
    const uusiTehtava = input.value.trim();
    const maara = document.getElementById("numeroKentta").value;

    if (uusiTehtava !== "" && maara > 0) {
        for (let i = 0; i < maara; i++) {
            lista.push(uusiTehtava);
        }
        input.value = ""; 
        document.getElementById("numeroKentta").value = "";
        paivitaLista(); 
    } else {
        alert("Syötä tehtävä ja kelvollinen numero!");
    }
}

window.onload = paivitaLista;
