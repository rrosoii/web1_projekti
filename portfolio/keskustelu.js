console.log("Keskustelu sivu ladattu")

function openDialog() {
    document.getElementById("comment-dialog").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeDialog() {
    document.getElementById("comment-dialog").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


function send(event) {
    event.preventDefault(); // estää oletuslähetyksen

    const birthdayField = document.getElementById("birthdate");
    const emailField = document.getElementById("email");
    const typeField = document.getElementById("type");
    const usageField = document.getElementById("consent");
    const bodyField = document.getElementById("message");

    const birthday = birthdayField.value;
    const email = emailField.value;
    const type = typeField.value;
    const usage = usageField.checked; // true tai false
    const body = bodyField.value;

    console.log("Syntymäpäivä:", birthday);
    console.log("Sähköposti:", email);
    console.log("Viestin tyyppi:", type);
    console.log("Markkinointilupa:", usage);
    console.log("Viesti:", body);

    closeDialog();
}
