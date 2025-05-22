console.log("henkilotiedot on ladattu");

    const henkilot = [
        {
            name: "Merja Meikäläinen",
            age: 20,
            job: "Opiskelija",
            driversLicense: true
        },
        {
            name: "Teppo Teikäläinen",
            age: 25,
            job: "Sähköteknikko",
            driversLicense: true
        },
        {
            name: "Helena Heikäläinen",
            age: 30,
            job: "Ohjelmistosuunnittelija",
            driversLicense: false
        },
        {
            name: "Semir Sikäläinen",
            age: 18,
            job: "Opiskelija",
            driversLicense: true
        },
        {
            name: "Tomas Täkäläinen",
            age: 22,
            job: "Linja-autonkuljettaja",
            driversLicense: true
        }
    ];

    const rivit = document.getElementById("rivit");

    function luoRivit() {
        rivit.innerHTML = "";

        for (let henkilo of henkilot) {
            const rivi = document.createElement("tr");

            const nimiTd = document.createElement("td");
            nimiTd.innerHTML = henkilo.name;
            rivi.appendChild(nimiTd);

            const ikaTd = document.createElement("td");
            ikaTd.innerHTML = henkilo.age;
            if (henkilo.age >= 18) {
                ikaTd.innerHTML += " 🍺";
            }
            rivi.appendChild(ikaTd);

            const tyoTd = document.createElement("td");
            tyoTd.innerHTML = henkilo.job;
            if (henkilo.job.toLowerCase() === "opiskelija") {
                tyoTd.innerHTML += " 🎓";
            }
            rivi.appendChild(tyoTd);

            const ajokorttiTd = document.createElement("td");
            ajokorttiTd.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";
            rivi.appendChild(ajokorttiTd);

            rivit.appendChild(rivi);
        }
    }

    function lisaaHenkilo(event) {
        event.preventDefault();

        const nimi = document.getElementById("nimi").value.trim();
        const ika = Number(document.getElementById("ika").value);
        const tyo = document.getElementById("tyo").value.trim();
        const ajokortti = document.getElementById("ajokortti").checked;

        if (ika < 0) {
            alert("Iän pitää olla positiivinen luku");
            return;
        }

        const uusiHenkilo = {
            name: nimi,
            age: ika,
            job: tyo,
            driversLicense: ajokortti
        };

        henkilot.push(uusiHenkilo);
        luoRivit();

        document.getElementById("henkiloLomake").reset();
    }

    window.onload = luoRivit;
