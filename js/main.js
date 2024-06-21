const menuJacket = document.querySelector('.menu__jacket');
const body = document.querySelector('body');
const workDivs = document.querySelectorAll('.work__divs-item');

console.log(workDivs);

menuJacket.addEventListener ('click', () => {
    body.classList.toggle('open');
})
    
workDivs.forEach(div => {
    // Handle mouseover and mouseout for desktops
    div.addEventListener('mouseover', () => {
        div.classList.add('div-open');
    });

    div.addEventListener('mouseout', () => {
        div.classList.remove('div-open');
    });

    // Handle touchstart and touchend for touch devices
    div.addEventListener('touchstart', () => {
        div.classList.add('div-open');
    });

    div.addEventListener('touchend', () => {
        div.classList.remove('div-open');
    });
});


