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
            rivi.appendChild(ikaTd);

            const tyoTd = document.createElement("td");
            tyoTd.innerHTML = henkilo.job;
            rivi.appendChild(tyoTd);

            const ajokorttiTd = document.createElement("td");
            ajokorttiTd.innerHTML = henkilo.driversLicense ? "Kyllä" : "Ei";
            rivi.appendChild(ajokorttiTd);

            rivit.appendChild(rivi);
        }
    }

    window.onload = luoRivit;
