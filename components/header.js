class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    background: #1a1a1a;
                    color: #ffffff;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    transition: background-color 0.3s ease;
                }
.logo {
                    font-weight: 700;
                    font-size: 1.5rem;
                    letter-spacing: 0.5px;
                    color: inherit;
                }
                
                nav {
                    display: flex;
                    gap: 1.5rem;
                }
                
                nav a {
                    text-decoration: none;
                    color: inherit;
                    font-weight: 500;
                    transition: color 0.2s ease;
                    position: relative;
                }
                
                nav a:hover {
                    color: #3b82f6;
                }
                
                nav a::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #3b82f6;
                    transition: width 0.3s ease;
                }
                
                nav a:hover::after {
                    width: 100%;
                }
                
                #darkToggle {
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
                
                #darkToggle:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
                
                @media (max-width: 768px) {
                    header {
                        padding: 1rem;
                        flex-direction: column;
                        gap: 1rem;
                    }
                    
                    nav {
                        width: 100%;
                        justify-content: center;
                    }
                }
            </style>
            <header>
                <div class="header-left">
                    <h1 class="logo">max lopez.</h1>
                </div>
                <nav>
                <a href="/">Home</a>
                <a href="/about-me.html">About Me</a>
                <a href="/portfolio.html">Portfolio</a>
                <a href="/contact.html">Contact</a>
</nav>
<button id="darkToggle" aria-label="Toggle dark mode">
                    <i data-feather="moon"></i>
                </button>
            </header>
        `;
        
        // Add event listener for dark mode toggle within the shadow DOM
        this.shadowRoot.getElementById('darkToggle').addEventListener('click', () => {
            document.body.classList.toggle('dark');
            localStorage.setItem('darkMode', document.body.classList.contains('dark'));
            this.updateDarkModeIcon();
        });
        
        // Initialize feather icons
        feather.replace();
    }
    
    updateDarkModeIcon() {
        const darkToggle = this.shadowRoot.getElementById('darkToggle');
        if (darkToggle) {
            darkToggle.innerHTML = document.body.classList.contains('dark') ? 
                '<i data-feather="sun"></i>' : '<i data-feather="moon"></i>';
            feather.replace();
        }
    }
}

customElements.define('custom-header', CustomHeader);