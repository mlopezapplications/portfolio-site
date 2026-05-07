class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #1a1a1a;
                    color: #ffffff;
                    padding: 2rem;
                    text-align: center;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
footer p {
                    margin-bottom: 1rem;
                    color: inherit;
                }
                
                .socials {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                }
                .socials a {
                    text-decoration: none;
                    color: #ffffff;
                    font-weight: 500;
                    transition: color 0.2s ease;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .socials a:hover {
                    color: #60a5fa;
                }
                .copyright {
                    margin-top: 1.5rem;
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.7);
                }
@media (max-width: 768px) {
                    .socials {
                        flex-direction: column;
                        align-items: center;
                        gap: 1rem;
                    }
                }
            </style>
            <footer>
                <p>mlopez.applications@gmail.com</p>
                <div class="socials">
                    <a href="https://www.behance.net/maximinio" target="_blank" aria-label="Behance">
                        <i data-feather="external-link"></i>
                        <span>Behance</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mlope" target="_blank" aria-label="LinkedIn">
                        <i data-feather="linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                </div>
                <p class="copyright">© ${new Date().getFullYear()} Max Lopez. All rights reserved.</p>
            </footer>
        `;
        
        // Initialize feather icons
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);