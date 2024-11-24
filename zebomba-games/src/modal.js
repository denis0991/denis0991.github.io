const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.overlay__modal');
const closeIcon = document.querySelector('.overlay__close');
const playground = document.querySelector('.background__playground');

playground.addEventListener('click', ()=> {
    overlay.classList.add('overlay_active');
    modal.classList.add('overlay__modal_active');
})

closeIcon.addEventListener('click', () => {
    overlay.classList.remove('overlay_active');
    modal.classList.remove('overlay__modal_active');
})

document.addEventListener('click', (e)=>{
    if (e.target.classList.contains('overlay')) {
        overlay.classList.remove('overlay_active');
        modal.classList.remove('overlay__modal_active');
    }
})