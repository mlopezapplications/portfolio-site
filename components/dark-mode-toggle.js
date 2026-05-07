class DarkModeToggle extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }
        
        button:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        
        .dark button:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      </style>
      <button id="toggle" aria-label="Toggle dark mode">
        <i data-feather="moon"></i>
      </button>
    `;

    this.shadowRoot.getElementById('toggle').addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('darkMode', document.body.classList.contains('dark'));
      this.updateIcon();
    });

    this.updateIcon();
    feather.replace();
  }

  updateIcon() {
    const toggle = this.shadowRoot.getElementById('toggle');
    if (toggle) {
      toggle.innerHTML = document.body.classList.contains('dark') ? 
        '<i data-feather="sun"></i>' : '<i data-feather="moon"></i>';
      feather.replace();
    }
  }
}

customElements.define('dark-mode-toggle', DarkModeToggle);