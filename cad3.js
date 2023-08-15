
function mostrarDado(){
    let matricula = document.getElementById('Matricula', 'nome', 'Email');
    let nome = document.getElementById('nome');
    let Email = document.getElementById('Email');
     if ((matricula.type == "password") & (nome.type == "password") & (Email.type == "password")) {
        (matricula.type = "text") & (nome.type = "text") & (Email.type = "text");
     }

     else {
        matricula.type = "password";
        nome.type = "password";
        Email.type = "password";
     }
   
} 
