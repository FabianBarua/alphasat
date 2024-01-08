

document.addEventListener('DOMContentLoaded',()=>{

    var BTN_menu = document.getElementById('menu')
    var sub_menu = document.getElementById('submenu')

    if (BTN_menu){
        BTN_menu.addEventListener('click', ()=>{
            sub_menu.classList.toggle('hidden')
        })
    }
})