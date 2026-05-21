document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-phone, .mobile-nav .btn-book');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            // Toggle hamburger icon animation if needed
            const bars = menuToggle.querySelectorAll('.bar');
            if (mobileMenu.classList.contains('open')) {
                bars[0].style.transform = 'translateY(7px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                const bars = menuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    // Booking Modal Wizard Logic
    const modalOverlay = document.getElementById('booking-modal');
    const bookButtons = document.querySelectorAll('.btn-book');
    const closeButtons = document.querySelectorAll('.close-modal, .close-modal-btn');
    
    // Steps
    let currentStep = 1;
    const totalSteps = 4;
    
    // Elements
    const progressSteps = document.querySelectorAll('.progress-step');
    const progressLines = document.querySelectorAll('.progress-line');
    const bookingSteps = document.querySelectorAll('.booking-step');
    const nextBtns = document.querySelectorAll('.next-step');
    const prevBtns = document.querySelectorAll('.prev-step');
    const submitBtn = document.querySelector('.submit-booking');

    // Open Modal
    if (modalOverlay) {
        bookButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modalOverlay.classList.add('active');
                resetWizard();
            });
        });

        // Close Modal
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                modalOverlay.classList.remove('active');
            });
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

    // Next Step Logic
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                if (currentStep === 2) updateSummary();
                currentStep++;
                updateWizardView();
            } else {
                alert('Please fill out all required fields.');
            }
        });
    });

    // Prev Step Logic
    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            currentStep--;
            updateWizardView();
        });
    });

    // Submit Logic
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                // Here you would typically send data to a backend
                currentStep++;
                updateWizardView();
            } else {
                alert('Please fill out your details.');
            }
        });
    }

    // Wizard Functions
    function updateWizardView() {
        // Update Content
        bookingSteps.forEach((step, index) => {
            if (index + 1 === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Update Progress Bar (Only for steps 1-3)
        if (currentStep <= 3) {
            document.querySelector('.booking-progress').style.display = 'flex';
            progressSteps.forEach((step, index) => {
                if (index + 1 < currentStep) {
                    step.classList.add('completed');
                    step.classList.remove('active');
                } else if (index + 1 === currentStep) {
                    step.classList.add('active');
                    step.classList.remove('completed');
                } else {
                    step.classList.remove('active', 'completed');
                }
            });
            progressLines.forEach((line, index) => {
                if (index + 1 < currentStep) {
                    line.style.background = 'var(--primary)';
                } else {
                    line.style.background = 'var(--bg-light)';
                }
            });
        } else {
            // Hide progress on success step
            document.querySelector('.booking-progress').style.display = 'none';
        }
    }

    function validateStep(stepIndex) {
        if (stepIndex === 1) return true; // Radio button always has a value
        if (stepIndex === 2) {
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            return date !== '' && time !== '';
        }
        if (stepIndex === 3) {
            const fname = document.getElementById('fname').value;
            const lname = document.getElementById('lname').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            return fname !== '' && lname !== '' && phone !== '' && email !== '';
        }
        return true;
    }

    function updateSummary() {
        const serviceRadios = document.getElementsByName('service');
        let selectedService = '';
        let selectedPrice = '';
        
        for (let radio of serviceRadios) {
            if (radio.checked) {
                selectedService = radio.value;
                selectedPrice = radio.getAttribute('data-price');
                break;
            }
        }

        const date = document.getElementById('booking-date').value;
        const time = document.getElementById('booking-time').value;

        // Format Date nicely
        let formattedDate = date;
        if (date) {
            const dateObj = new Date(date);
            formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        }

        document.getElementById('summary-service').innerText = selectedService;
        document.getElementById('summary-datetime').innerText = `${formattedDate} at ${time}`;
        document.getElementById('summary-price').innerText = selectedPrice;
    }

    function resetWizard() {
        currentStep = 1;
        document.getElementById('booking-date').value = '';
        document.getElementById('booking-time').value = '';
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';
        document.querySelector('.booking-progress').style.display = 'flex';
        updateWizardView();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
});
