function add(value){
    let res = window.document.getElementById('box_number').innerHTML
    window.document.getElementById('box_number').innerHTML = res + value
}

function calcular(){
    let total = window.document.getElementById('box_number').innerHTML

    if(total){
        window.document.getElementById('box_number').innerHTML = Number(total)
    } else {
        window.document.getElementById('box_number').innerHTML = "[Erro]"
    }
}