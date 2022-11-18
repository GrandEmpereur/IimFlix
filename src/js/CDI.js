class Cdi extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.form()
        this.addParmaToUrl()
        this.tips()
    }

    tips() {
        const tips = document.querySelector('.tips')
        const tips2 = document.querySelector(".tips2")
        const tipsBtn = document.querySelector('.tips-btn')
        tipsBtn.addEventListener('click', () => {
            alert("Vous devez utiliser les outils de développement")
        })

        tips.addEventListener('click', () => {
            alert("Outils de développement numéro 1 : F12 ou l'inspecteur d’élément") 
        });

        tips2.addEventListener('click', () => {
            alert("Outils de développement numéro 2 : l’onglet Network et console dans sur l'inspecteur d’élément") 
        });
    }

    addParmaToUrl() {
        const CdiToken = "410"
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        params.set('Room', CdiToken);
        url.search = params.toString();
        const newUrl = url.toString();
        window.history.pushState({ path: newUrl }, '', newUrl);
    }

    form() {
        const url = "http://localhost:4200/cdi";
        const form = document.querySelector('form');
        const input = document.querySelector('#CDI-Code');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const response = input.value;
            const data = { response };

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
}

customElements.define('iim-cdi', Cdi);
