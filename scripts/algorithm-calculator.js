function add(value){
    let res = window.document.getElementById('box_number').innerHTML
    window.document.getElementById('box_number').innerHTML = res + value
}

function calcular(){
    let total = window.document.getElementById('box_number').innerHTML

    let numero = Number(total.value)
    if(numero){
        window.document.getElementById('box_number').innerHTML = numero
    } else {
        window.document.getElementById('box_number').innerHTML = "[Erro]"
    }
}