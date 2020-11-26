function clicar(){
    let inputUsuario = document.querySelector('#usuario');
    let inputIdade = document.querySelector('#idade');
    let texto = document.createTextNode(`Seja bem vindo (a), ${inputUsuario.value}! Você tem ${inputIdade.value} anos.`);
    let h1 = document.querySelector('#meuh1');
    h1.innerHTML = "";
    h1.appendChild(texto);
    
}



