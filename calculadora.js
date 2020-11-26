function clicar(){
    let inputNum1 = parseInt(document.getElementById('num1').value);
    let inputNum2 = parseInt(document.getElementById('num2').value);
    let inputSinal = document.getElementById('sinal').value;
    let texto = document.createTextNode("");

    switch(inputSinal){
        case '+':
            texto = document.createTextNode(`${inputNum1} ${inputSinal} ${inputNum2} = ${inputNum1 + inputNum2}`);
            break;
        case '-':
            texto = document.createTextNode(`${inputNum1} ${inputSinal} ${inputNum2} = ${inputNum1 - inputNum2}`);
            break;
        case '*':
            texto = document.createTextNode(`${inputNum1} ${inputSinal} ${inputNum2} = ${inputNum1 * inputNum2}`);
            break;
        case '/':
            texto = document.createTextNode(`${inputNum1} ${inputSinal} ${inputNum2} = ${inputNum1 / inputNum2}`);
            break;
    }

    let h1 = document.getElementById('meuh1');
    h1.innerHTML = "";
    h1.appendChild(texto);
}
    
window.onload = function(){
    clicar();
} 
