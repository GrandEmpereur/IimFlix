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
        const input = document.querySelector('#code1');
        const input2 = document.querySelector('#code2');
        const input3 = document.querySelector('#code3');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const code1 = input.value;
            const code2 = input2.value;
            const code3 = input3.value
            const data = { code1, code2, code3 };
            
            console.log(data)

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
                            localStorage.setItem('token3', token);
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
            title.textContent = 'Cr??ation Web';
            p.textContent = 'Cliquez sur les 6 diff??rences ! N???oubliez pas de retrouver le mot n??2 ';
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
            title.textContent = 'Cr??ation Artistique';
            p.textContent = 'Retrouvez la charte graphique de l???IIM ! N???oubliez pas de retrouver le mot n??3';
            btn.textContent = 'valider';
        })


        find.addEventListener('click', () => {
            modal.style.display = 'none';
        })
    }
}

customElements.define('iim-crea', Crea);
