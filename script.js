// 1ª Digitação (JS Completo)

// ========================= CONTROLE DO MENU MOBILE ====================
const menuIconn = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIconn.addEventListener('click', () => {
    menuIconn.classList.toggle('bx-x');
    navList.classList.toggle('open');

// Bloquear scroll quando menu aberto
document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto'; 
});

// Fechar menu ao clicar em links 
document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        menuIconn.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// Fechar menu ao rolar
window.addEventListener('scroll', () => {
    if (navList.classList.contains('open')) {
        menuIconn.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

