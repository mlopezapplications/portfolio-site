document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            localStorage.setItem('darkMode', document.body.classList.contains('dark'));
            updateDarkModeIcon();
        });
        
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark');
        }
        updateDarkModeIcon();
    }
    
    function updateDarkModeIcon() {
        if (darkToggle) {
            darkToggle.innerHTML = document.body.classList.contains('dark') ? 
                '<i data-feather="sun"></i>' : '<i data-feather="moon"></i>';
            feather.replace();
        }
    }
    
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show selected tab content
            document.getElementById(tabId).classList.remove('hidden');
            
            // Update active state for buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-200', 'dark:bg-gray-700');
            });
            
            button.classList.remove('bg-gray-200', 'dark:bg-gray-700');
            button.classList.add('bg-blue-600', 'text-white');
        });
    });
    
    // Activate first tab by default
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
    
    // Form memory functionality
    const memoryForm = document.getElementById('memoryForm');
    if (memoryForm) {
        
        // Load saved form data
        window.addEventListener('load', () => {
            const savedEmail = sessionStorage.getItem('email');
            const savedSubject = sessionStorage.getItem('subject');
            const savedMessage = sessionStorage.getItem('message');
            
            if (savedEmail) document.getElementById('email').value = savedEmail;
            if (savedSubject) document.getElementById('subject').value = savedSubject;
            if (savedMessage) document.getElementById('message').value = savedMessage;
        });
    }
// Simple carousel navigation
    const carouselSlides = document.querySelector('.carousel-slides');
    if (carouselSlides) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        carouselSlides.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - carouselSlides.offsetLeft;
            scrollLeft = carouselSlides.scrollLeft;
        });
        
        carouselSlides.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        carouselSlides.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        carouselSlides.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carouselSlides.offsetLeft;
            const walk = (x - startX) * 2;
            carouselSlides.scrollLeft = scrollLeft - walk;
        });
    }
});