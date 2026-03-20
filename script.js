window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#000';
        nav.style.padding = '15px 0';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.padding = '30px 0';
    }
});