var resul = window.document.getElementById('box_number')
addEventListener('load', recarregar)

function recarregar(){
    resul.innerHTML = '0'
}

function adicionar(num){
    var numero = document.getElementById('box_number').innerHTML;
    document.getElementById('box_number').innerHTML = numero + num;
}

function clear_all(){
    window.document.getElementById('box_number').innerHTML = "0"
}

function calcular(){
    var valores = window.document.getElementById('box_number').innerHTML
    if (valores){
        window.document.getElementById('box_number').innerHTML = eval(valores)
    } else {
        window.document.getElementById('box_number').innerHTML = '[Erro] Valor inválido'
    }
    console.log(valores.length)
}

