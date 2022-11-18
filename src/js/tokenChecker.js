const token = localStorage.getItem('token');
const token2 = localStorage.getItem('token2');
const locked = document.querySelectorAll('.card-lock');

console.log(token, token2);

if (token === 'CDI Success') {
    const unlock = document.querySelector('#CDEB-Unlock');
    unlock.classList.remove('card-lock');
    unlock.classList.add('CDEB-Redirect');
    const redirect = document.querySelector('.CDEB-Redirect');
    redirect.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/cdeb.html';
    })
}

if (token2 === 'CDEB Success') {
    const unlock = document.querySelector('#CD-Unlock');
    unlock.classList.remove('card-lock');
    unlock.classList.add('card-unlock');
    const redirect = document.querySelector('.card-unlock');
    redirect.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5500/crea.html';
    })
}

setTimeout(() => {
    window.location.href = 'http://127.0.0.1:5500/index.html';
    localStorage.clear();
    alert('Vous avez Perdu !');
}, 
3600000);
