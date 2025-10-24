
//class contato

class contato {
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
    

  let data = new contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value,
            termoCheck,
            msgCheck
            );

            console.log(data);
    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}, os seus dados foram encaminhados com sucesso`);
    form.reset();
    return false;
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}