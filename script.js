/* ============================================
   KBSV NEXT GEN – Landing Page Scripts
   Countdown, scroll animations, form, mobile nav
   ============================================ */

// Cấu hình URL Web App Google Apps Script nhận Leads (Để trống nếu chạy mô phỏng local)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwU_FZEoshBYssbmrLHSl7YiWtMDFg-4uo-R4kXOAFWVXD-oSc95Qqaz7P3wwDs5UX3/exec';


document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initScrollReveal();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initForm();
    initGallery();
});

/* ── Countdown Timer ── */
function initCountdown() {
    // Deadline: Aug 10, 2026 23:59:59
    const deadline = new Date('2026-08-10T23:59:59+07:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            const label = document.querySelector('.countdown-label');
            if (label) label.textContent = 'Đã hết hạn đăng ký';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

/* ── Scroll Reveal Animations ── */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger delay based on sibling index
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                let siblingIndex = 0;
                siblings.forEach((sib, i) => {
                    if (sib === entry.target) siblingIndex = i;
                });

                setTimeout(() => {
                    entry.target.classList.add('active');
                }, siblingIndex * 100);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

/* ── Navbar Scroll Effect ── */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Active link highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

/* ── Mobile Menu ── */
function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* ── Smooth Scroll ── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ── Form Handling ── */
function initForm() {
    const form = document.getElementById('applyForm');
    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');
    const universitySelect = document.getElementById('university');
    const otherUniversityGroup = document.getElementById('otherUniversityGroup');
    const otherUniversityInput = document.getElementById('otherUniversity');

    if (!form) return;

    if (universitySelect && otherUniversityGroup && otherUniversityInput) {
        universitySelect.addEventListener('change', function() {
            if (this.value === 'other') {
                otherUniversityGroup.style.display = 'block';
                otherUniversityInput.required = true;
                otherUniversityInput.focus();
            } else {
                otherUniversityGroup.style.display = 'none';
                otherUniversityInput.required = false;
                otherUniversityInput.value = '';
            }
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        const fullName = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        let university = universitySelect ? universitySelect.value : '';

        if (university === 'other' && otherUniversityInput) {
            university = otherUniversityInput.value.trim();
        }

        if (!fullName || !phone || !email || !university) {
            shakeButton(submitBtn);
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>⏳</span> Đang gửi...';

        // Collect form data
        const formData = {
            fullName,
            phone,
            email,
            university,
            year: document.getElementById('year').value,
            social: document.getElementById('social').value.trim(),
            motivation: document.getElementById('motivation').value.trim(),
            submittedAt: new Date().toISOString()
        };

        if (GOOGLE_SCRIPT_URL) {
            // Gửi dữ liệu dưới dạng urlencoded để Apps Script luôn nhận được qua e.parameter
            const searchParams = new URLSearchParams();
            for (const key in formData) {
                searchParams.append(key, formData[key]);
            }

            fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Tránh CORS redirect block
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: searchParams.toString()
            })
            .then(() => {
                showSuccessState();
            })
            .catch(err => {
                console.log('Lỗi gửi lead:', err);
                showSuccessState();
            });
        } else {
            // Chạy giả lập ở môi trường local
            setTimeout(() => {
                console.log('📋 KBSV NEXT GEN - Đơn đăng ký mới (Mô phỏng):', formData);
                showSuccessState();
            }, 1200);
        }

        function showSuccessState() {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<svg class="icon"><use href="#icon-rocket"/></svg> Gửi đăng ký';
            form.style.display = 'none';
            formSuccess.style.display = 'block';
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

function shakeButton(btn) {
    btn.classList.add('shake');
    setTimeout(() => btn.classList.remove('shake'), 500);
}

/* ── Add shake animation ── */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-6px); }
        40% { transform: translateX(6px); }
        60% { transform: translateX(-4px); }
        80% { transform: translateX(4px); }
    }
    .shake {
        animation: shake 0.5s ease-in-out;
    }
    .nav-link.active {
        color: var(--kb-yellow-dark) !important;
        font-weight: 600;
    }
`;
document.head.appendChild(shakeStyle);

/* ── Interactive Activity Gallery ── */
function initGallery() {
    const container = document.getElementById('galleryContainer');
    const slides = document.querySelectorAll('.gallery-slide');
    const dotsContainer = document.getElementById('galleryDots');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    
    if (!container || slides.length === 0) return;
    
    let currentIndex = 1; // Start at second image to center on desktop
    
    // Clear and build dots dynamically
    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('gallery-dot');
        if (index === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateGallery();
        });
        dotsContainer.appendChild(dot);
    });
    
    function updateGallery() {
        const isMobile = window.innerWidth <= 768;
        const slideWidth = isMobile ? 100 : 33.333;
        
        // Offset to align active slide in center
        const offset = isMobile 
            ? -currentIndex * 100 
            : -currentIndex * 33.333 + 33.333;
            
        container.style.transform = `translateX(${offset}%)`;
        
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === currentIndex - 1) {
                slide.classList.add('prev');
            } else if (index === currentIndex + 1) {
                slide.classList.add('next');
            }
        });
        
        const dots = dotsContainer.querySelectorAll('.gallery-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateGallery();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });
    
    // Add touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50; // min swipe distance in px
        if (touchStartX - touchEndX > swipeThreshold) {
            // swipe left -> next slide
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateGallery();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // swipe right -> prev slide
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            updateGallery();
        }
    }
    
    // Initial run and resize listener
    window.addEventListener('resize', updateGallery);
    updateGallery();
}
