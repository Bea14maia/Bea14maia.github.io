    function enviar() {
    // Obtenha os valores dos campos
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let mae = document.getElementById("mae").value;
    let pai = document.getElementById("Pai").value;
    let tele = document.getElementById("tele").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("email").value;

    // Verifique se os campos estão preenchidos
    if (nome === "" || data === "" || mae === "" || pai === "" || tele === "" || tel === "" || email === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
    } else if (email) {

    }
    
    
    else {
        // Faça alguma ação com os dados, como enviar o formulário
        alert("Formulário enviado com sucesso!");
    }
};

    function limpar () {
     // Limpe os campos do formulário
     document.getElementById("nome").value = "";
     document.getElementById("data").value = "";
     document.getElementById("mae").value = "";
     document.getElementById("Pai").value = "";
     document.getElementById("tele").value = "";
     document.getElementById("tel").value = "";
     document.getElementById("email").value = "";
 };