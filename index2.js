
function MenuPedidos() {
    let displ = document.getElementById("caixadepedidos");
    displ.style.marginTop = "15%"

}
function sair() {
    let sumir = document.getElementById("caixadepedidos");
    sumir.style.marginTop = ("-120%");

}
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
        "Maura.lab": "maura123",

    };

    if (Usuarios[user] === password) {
        localStorage.setItem("vendedor", user);
        window.location.href = "princ.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}


function pegapega() {
    const data = document.getElementById("aa").value;
    const nome = document.getElementById("bb").value;
    const produto = document.getElementById("cc").value;
    const valor = document.getElementById("dd").value;

    if (data === "" || nome === "" || produto === "" || valor === "") {
        alert("Todos os campos precisam ser preenchidos!");
        event.preventDefault();
        return;
    }


    const valores = {
        data: data,
        nome: nome,
        produto: produto,
        valor: valor,
    };

    let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

    vendas.push(valores);
    localStorage.setItem("vendas", JSON.stringify(vendas));

    alert("✅ Item adicionado com sucesso à lista local!");

    exibirTodasVendas();
    const vendedor = localStorage.getItem("vendedor");
    if (vendedor) {
        document.getElementById("df").value = vendedor;
    } else {
        console.log("Vendedor não encontrado no localStorage");
    }


}



function exibirTodasVendas() {
    const div = document.getElementById("ultimo");
    const vendas = JSON.parse(localStorage.getItem("vendas")) || [];

    div.innerHTML = "";

    vendas.forEach((venda, index) => {
        div.innerHTML += `
            <div style="background: white; padding: 15px; margin: 10px; border-radius: 8px; box-shadow: 2px 2px 8px rgba(0,0,0,0.3); color: black;">
                <p><strong>#${index + 1}</strong></p>
                <p><strong>Data:</strong> ${venda.data}</p>
                <p><strong>Nome:</strong> ${venda.nome}</p>
                <p><strong>Produto:</strong> ${venda.produto}</p>
                <p><strong>Valor:</strong> R$ ${venda.valor}</p>
            </div>
        `;
    });
}

window.onload = exibirTodasVendas;


