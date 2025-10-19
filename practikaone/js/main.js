(function() {
    const body = document.body;
    const burger = document.querySelector('.burger-icon');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', e => {
        e.preventDefault();
        body.classList.toggle('body--opened-menu');
    });

    const navLinks = document.querySelectorAll('.nav__link');
    
    if (document.documentElement.clientWidth > 900) return

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            if (body.classList.contains('body--opened-menu')) {
                body.classList.remove('body--opened-menu');
            }
        });
    });
})();