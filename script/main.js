// меню
const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

// открытие закрытие меню
hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    // console.log(event.target.closest('.left-menu'));
 if (!event.target.closest('.left-menu')) {

    leftMenu.classList.remove('openMenu');
    hamburger.classList.remove('open');
// console.log('клик внутри меню');
 }
});

leftMenu.addEventListener('click', event => {

console.log(event.target);
console.log(event);

 const target = event.target;
 const dropdown = target.closest('.dropdown');
//  console.log(target.closest);
if (dropdown) {
    dropdown.classList.toggle('active');
    leftMenu.classList.add('openMenu');
    hamburger.classList.add('open');
    
}
})