const ul = document.getElementById('ul')
const btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    ul.classList.toggle("active")

    if(ul.classList.toString("active")){
        btn.innerHTML = '&#10005;'
    }
    else{
        btn.innerHTML = '&#9776;'
    }
})