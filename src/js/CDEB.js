class Cdeb extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.form()
    }

    form() {
        const url = "http://localhost:4200/cdeb";
        const form = document.querySelector('form');
        const input = document.querySelector('#code1');
        const input2 = document.querySelector('#code2');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const code1 = input.value;
            const code2 = input2.value;
            const data = { code1, code2 };
            

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    // if the api returns true, redirect to the dashboard
                    if (data) {
                        window.location.href = 'http://127.0.0.1:5500/index.html';
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

customElements.define('iim-cdeb', Cdeb);
