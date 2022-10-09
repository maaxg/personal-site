"use strict";
class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <style>
      .navbar {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background-color: #272727;
        height: 8vh;
      }
      .navbar-text {
        font-size: 2rem;
        color: white;
        text-decoration: none;
      }
      .navbar-content{
        display: flex;
        width: 100%;
        background-color: #272727;
        padding: 8px;
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
    </style>
    <header translate="no">
      <nav class="navbar">
        <div class="navbar-content">
          <a href="../../index.html" class="navbar-text">Home</a>
          <section>
            <button>PT-BR</button>
            <button>EN</button>
          </section>
        </div>
      </nav> 
    </header>
    `;
    }
}
customElements.define("custom-header", Header);
