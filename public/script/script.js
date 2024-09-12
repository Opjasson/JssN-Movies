const navbarExtra = document.getElementById('navbar-extra')

document.getElementById('menu').addEventListener('click', ()=> {
    if(navbarExtra.classList.contains('hidden')){
        navbarExtra.classList.remove('hidden')
    }else {
        navbarExtra.classList.add('hidden')
    }
})

const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarExtra.contains(e.target)) {
        navbarExtra.classList.add('hidden');
    }
});
