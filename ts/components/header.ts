class Header extends HTMLElement {
  constructor(){
    super()
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
    <header >
      <nav class="navbar">
        <div class="navbar-content">
          <a translate="no" href="../../index.html" class="navbar-text">Home</a>
        </div>
      </nav> 
    </header>
    `
  }
}

customElements.define("custom-header", Header);