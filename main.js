const  btnMenu = document.getElementById('btn--menu');
const navegation = document.getElementById('navegation');

btnMenu.addEventListener('click', () =>{
    if(btnMenu.src.split('/')[4]==='abrir-menu.svg'){
        btnMenu.src = 'img/cerrar-menu.svg'
    } else{
        btnMenu.src = 'img/abrir-menu.svg'
    }
    navegation.classList.toggle('navegation--dimamic')
})

//Selection

const character = document.querySelectorAll('.select--character');
const imagenCurrent = document.getElementById('image--current');

character.forEach(selector=>{
    selector.addEventListener('click',()=>{
        imagenCurrent.src = selector.src.replace('png','webp');
    });
});






