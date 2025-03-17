class header extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Create header content
        const header = document.createElement('header');
        header.style.backgroundColor = '#4CAF50';
        header.style.color = 'white';
        header.style.padding = '10px';
        header.style.textAlign = 'center';

        // Add text to the header
        header.textContent = "Welcome to My Website";

        // Append the header to the shadow DOM
        shadow.appendChild(header);
    }
}
 
// Register the component
customElements.define('header', header);