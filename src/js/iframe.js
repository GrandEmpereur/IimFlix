class Iframe extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.updateCssIframe()
    }

    updateCssIframe() {
        const iframe = document.querySelectorAll('iframe');
        console.log(iframe);

    }
}

customElements.define('w3-iframe', Iframe);
