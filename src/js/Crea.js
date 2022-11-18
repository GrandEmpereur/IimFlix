class Crea extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.modal()
        this.form()
    }

    form() {
        const url = "http://localhost:4200/crea";
        const form = document.querySelector('form');
        const code1 = document.querySelector('#code1');
        const code2 = document.querySelector('#code2');
        const code3 = document.querySelector('#code3');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const response1 = code1.value;
            const response2 = code2.value;
            const response3 = code3.value;
            const data = { response1, response2, response3 };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        const token = data.token;
                        if (token) {
                            localStorage.setItem('token', token);
                            window.location.href = 'http://127.0.0.1:5500/index.html';
                        }
                    }else{
                        alert('Invalid code')
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }

    modal() {
        const modal = document.querySelector('.modal');
        const btn = document.querySelector('.Clap-3d');
        const btnMAc = document.querySelector('.Mac-3d');
        const btnTableau = document.querySelector('.Tableau-3d');
        const find = document.querySelector('.modal-footer');

        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            const video = document.querySelector('.video');
            video.style.display = 'block';
            const art = document.querySelector('.art');
            art.style.display = 'none';
            const mac = document.querySelector('.web');
            mac.style.display = 'none';

        })

        btnMAc.addEventListener('click', () => {
            modal.style.display = 'block';
            const clap = document.querySelector('.video');
            clap.style.display = 'none';
            const mac = document.querySelector('.web');
            mac.style.display = 'block';

            const title = document.querySelector('.modal-header h2');
            const p = document.querySelector('.modal-header p');
            const btn = document.querySelector('.modal-footer');
            title.textContent = 'Création Web';
            p.textContent = 'Cliquez sur les 6 différences ! N’oubliez pas de retrouver le mot n°2 ';
            btn.textContent = 'valider';
        })

        btnTableau.addEventListener('click', () => {
            modal.style.display = 'block';
            const clap = document.querySelector('.video');
            clap.style.display = 'none';
            const mac = document.querySelector('.web');
            mac.style.display = 'none';
            const art = document.querySelector('.art');
            art.style.display = 'block';

            const title = document.querySelector('.modal-header h2');
            const p = document.querySelector('.modal-header p');
            const btn = document.querySelector('.modal-footer');
            title.textContent = 'Création Artistique';
            p.textContent = 'Retrouvez la charte graphique de l’IIM ! N’oubliez pas de retrouver le mot n°3';
            btn.textContent = 'valider';
        })


        find.addEventListener('click', () => {
            modal.style.display = 'none';
        })
    }
}

customElements.define('iim-crea', Crea);
