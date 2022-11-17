class MenuBurger extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.updateMenu()
    }

    updateMenu() {
        const menuBurger = document.querySelector('.menuBurger');
        
        menuBurger.addEventListener('click', () => {
            const menuShow = document.querySelector('.menuShow');
            menuShow.classList.add('menuShowActive');
        });

    }
}

customElements.define('w3-menu', MenuBurger);
