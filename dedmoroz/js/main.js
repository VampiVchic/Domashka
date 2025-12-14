const headerH1 = document.getElementById('header').querySelector('h1');

document.getElementById('header').addEventListener('mouseenter', function() {
    headerH1.classList.add('glow');
});

document.getElementById('header').addEventListener('mouseleave', function() {
    headerH1.classList.remove('glow');
});


function createSnowflake() {
    const snowflakes = document.getElementById('snowflakes');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
    snowflake.innerHTML = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
    const duration = Math.random() * 5 + 10; 
    snowflake.style.animationDuration = `${duration}s, ${duration * 2}s`;
    snowflakes.appendChild(snowflake);

    setTimeout(() => {
        if (snowflake.parentNode === snowflakes) {
            snowflakes.removeChild(snowflake);
        }
    }, duration * 1000);
}

setInterval(createSnowflake, Math.random() * 300 + 200);