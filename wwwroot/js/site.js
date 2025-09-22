// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// SuperApp Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Add real-time clock update for deployment time
    function updateDeploymentTime() {
        const deployTimeElement = document.getElementById('deploy-time');
        if (deployTimeElement) {
            const now = new Date();
            deployTimeElement.textContent = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
        }
    }

    // Update time every minute
    setInterval(updateDeploymentTime, 60000);

    // Add environment detection
    const environmentElement = document.getElementById('environment');
    if (environmentElement) {
        // Simple environment detection based on hostname
        const hostname = window.location.hostname;
        let environment = 'Production';
        
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            environment = 'Development';
        } else if (hostname.includes('staging') || hostname.includes('test')) {
            environment = 'Staging';
        }
        
        environmentElement.textContent = environment;
        
        // Add environment-specific styling
        const deploymentInfo = document.querySelector('.deployment-info');
        if (environment === 'Development') {
            deploymentInfo.classList.remove('bg-success', 'border-success');
            deploymentInfo.classList.add('bg-warning', 'border-warning');
            deploymentInfo.querySelector('h4').classList.remove('text-success');
            deploymentInfo.querySelector('h4').classList.add('text-warning');
        }
    }

    // Add click analytics for learning links
    document.querySelectorAll('a[href*="learn.microsoft.com"], a[href*="docs.microsoft.com"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Learning resource clicked:', this.href);
            // In a real application, you would send this to your analytics service
        });
    });
});

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
