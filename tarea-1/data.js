let divId = document.getElementById('caja')
let divId2 = document.getElementById('caja2')
let divId3 = document.getElementById('caja3')
let divId4 = document.getElementById('caja4')
let botton = document.getElementById('boton')

botton.addEventListener('click', texto)
botton.addEventListener('click', texto2)
botton.addEventListener('click', texto3)
botton.addEventListener('click', texto4)

function texto() {
    divId.innerHTML = 'esto lo agrego del primer div'
    divId.style.margin = '80px'
    divId.style.background = 'orange'
}

function texto2() {
    divId2.innerHTML = 'esto lo agrego del segundo div'
    divId2.style.margin = '80px'
    divId2.style.background = 'purple'
}

function texto3() {
    divId3.innerHTML = 'esto lo agrego del tercer div'
    divId3.style.margin = '80px'
    divId3.style.background = 'orange'
}

function texto4() {
    divId4.innerHTML = 'esto lo agrego del cuarto div'
    divId4.style.margin = '80px'
    divId4.style.background = 'black'
}

