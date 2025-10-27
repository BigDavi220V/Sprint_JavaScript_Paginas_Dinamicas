
//class contato

class contato {
<<<<<<< HEAD
    
}

function Post(form) {
=======
    constructor(nome, sobrenome, email, cpf, telefone, contato, termo, mensagem) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
        this.termo = termo;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    event.preventDefault();
    
    const termoCheck = form.elements.namedItem("termo").checked;
    const msgCheck = form.elements.namedItem("mensagemDescontos").checked;
    
>>>>>>> 1fc0d32245bc4e5583c0c58f1f9cce7faa5418a4

  let data = new contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
<<<<<<< HEAD
            form.elements.namedItem("contato").value);
  
=======
            form.elements.namedItem("contato").value,
            termoCheck,
            msgCheck
            );

            console.log(data);
    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}, os seus dados foram encaminhados com sucesso`);
    form.reset();
    return false;
>>>>>>> 1fc0d32245bc4e5583c0c58f1f9cce7faa5418a4
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}