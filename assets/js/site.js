(() => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        const closeMenu = () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show-menu');
            hamburger.setAttribute('aria-expanded', 'false');
        };

        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.addEventListener('click', () => {
            const isOpen = hamburger.classList.toggle('active');
            navMenu.classList.toggle('show-menu', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });

        navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('click', event => {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) closeMenu();
        });
    }

    document.querySelectorAll('[data-team], [data-report]').forEach(button => {
        button.addEventListener('click', () => {
            const key = button.dataset.team || button.dataset.report;
            const gallerySelector = button.dataset.team ? '.team-gallery' : '.report-gallery';
            document.querySelectorAll(gallerySelector).forEach(gallery => {
                gallery.classList.toggle('active', gallery.id === key);
            });
        });
    });

    const form = document.getElementById('contactForm');
    if (form && window.emailjs) {
        emailjs.init('3AtKE1qr2jbtdDEhi');
        form.addEventListener('submit', event => {
            event.preventDefault();
            const params = {
                from_name: form.elements.name.value,
                from_email: form.elements.email.value,
                message: form.elements.message.value
            };
            emailjs.send('service_tzkm4yn', 'template_6nud1oa', params)
                .then(() => {
                    alert('Email sent successfully!');
                    form.reset();
                })
                .catch(error => alert(`Failed to send email: ${error.text}`));
        });
    }
})();
