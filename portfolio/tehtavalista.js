console.log("Tehtävälista sivu ladattu")

    let lista = ["Tehtävä 1", "Tehtävä 2"];

    function paivitaLista() {
        const ul = document.getElementById("tehtavalista");
        ul.innerHTML = "";

        for (let tehtava of lista) {
            const li = document.createElement("li");
            li.innerHTML = tehtava;
            ul.appendChild(li);
        }
    }

    function lisaa() {
        const input = document.getElementById("uusiTehtava");
        const uusi = input.value.trim();

        if (uusi !== "") {
            lista.push(uusi);
            input.value = ""; 
            paivitaLista();
        }
    }

    window.onload = paivitaLista;
