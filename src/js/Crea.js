class Crea extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.modal()
    }

    modal() {
        const modal = document.querySelector('.modal');
        const btn = document.querySelector('.Clap-3d');
        const find = document.querySelector('.modal-footer');

        btn.addEventListener('click', () => {
            // change display to block
            modal.style.display = 'block';
        })

        find.addEventListener('click', () => {
            modal.style.display = 'none';
        })
    }
}

customElements.define('iim-crea', Crea);
