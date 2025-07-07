

function animation1() {
    let bola1 = document.getElementById("bola1");
    let bola2 = document.getElementById("bola2");
    let texto3 = document.getElementById("bem");
    let th = document.getElementById("logins");

    bola1.style.marginTop = "-300px";
    bola1.style.marginLeft = "300px";

    bola2.style.marginBottom = "450px"
    bola2.style.marginRight = "300px"

    texto3.style.marginTop = "50px"

    th.style.opacity = "100%"
}

window.onload = animation1;




function VerificadorDeSenhas(event) {
    event.preventDefault();

    const user = document.getElementById("ttt").value;
    const password = document.getElementById("ggg").value;

    const Usuarios = {
        "MarcosTel": "1020",
        "Karol": "D652",
        "Ester": "G652",
        "Camil.azica": "Z6172",
        "Ana": "A0316",
        "Rosaria": "R0518",
        "Nayara": "N0520",
        "Ana.vic": "Victorino123",

    };

    if (Usuarios[user] === password) {
        localStorage.setItem("vendedor", user);
        window.location.href = "princ.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}


