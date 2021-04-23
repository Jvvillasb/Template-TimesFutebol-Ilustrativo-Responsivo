// Funções a serem invocadas no Html

function acao(){
    alert('Você esta entrando na Página Fale Conosco !');
    }

function acao1(){
    alert('Você esta entrando na Página Sobre Nós !');
    }

function acao2(){
    alert('Você esta entrando na Página Curiosidades Históricas !');
    }

function acao3(){
    alert('Você esta entrando na Página Inicial !');
    }

function acao4(){
        alert('Você esta entrando para dar sua opinião !');
    }
//Função de Validação do Form
function validar(){
    //Criando variavéis, linkadas com a do Form
    var nome = formuser.nome.value;
    var sobrenome = formuser.sobrenome.value;
    var email = formuser.email.value;
    var campoTexto = formuser.campoTexto.value;

    //Validação do Nome
    //Não pode estar vazio
    if(nome == ""){
        //Caso esteja, disparar um alert JS
        alert('Preencha o campo Nome !')
        //Após o Alert, focar no campo novamente
        formuser.nome.focus();
        return false;
    }  

    //Validação do Sobrenome
    //Não pode estar vazio
    if(sobrenome == ""){
        //Caso esteja, disparar um alert JS
        alert('Preencha o campo Sobrenome !')
        //Após o Alert, focar no campo novamente
        formuser.sobrenome.focus();
        return false;
    }
    //Validação do Email
    //Não pode ser vazio, é feito também uma validação no arroba, em caso de navegadores mais antigos
    if(email == "" || email.indexOf('@') == -1){
        //Caso esteja, disparar um alert JS
        alert('Preencha o campo Email, ou Insira um Email válido !')
        //Após o Alert, focar no campo novamente
        formuser.email.focus();
        return false;
    }
    //Validação do CampoTexto
    //Não pode Ser vazio
    if(campoTexto == ""){
        //Caso esteja, disparar um alert JS
        alert('Preencha com sua Opinião!')
        //Após o Alert, focar no campo novamente
        formuser.campoTexto.focus();
        return false;
    //Deve estar entre 20 e 500 Caracteres
    }else if(campoTexto.length <= 20 && campoTexto.length < 500){
        //Caso esteja, disparar um alert JS
        alert('Opinião tem que estar dentro de 20 e 500 Caracteres !')
        //Após o Alert, focar no campo novamente
        formuser.campoTexto.focus();
        //Caso passe em todas Validações
    }else{
        //Dispara o alert com Sucesso
        alert("Formulário enviado com Sucesso !")
    }
}