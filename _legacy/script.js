gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Preloader & Initialization
       ========================================================================== */
    const preloaderText = document.querySelector('.preloader-text');
    const preloader = document.querySelector('.preloader');
    
    // Simple text reveal
    gsap.to(preloaderText, {
        opacity: 1,
        y: -10,
        duration: 1,
        ease: "power2.out"
    });

    // Fade out preloader
    gsap.to(preloader, {
        opacity: 0,
        duration: 1,
        delay: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
            preloader.style.display = 'none';
            initHeroAnimation();
        }
    });

    /* ==========================================================================
       Custom Cursor & Magnetic Effect
       ========================================================================== */
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0, fMouseX = 0, fMouseY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant dot movement
        gsap.set(cursor, { x: mouseX, y: mouseY });
    });

    // Smooth follower movement
    gsap.ticker.add(() => {
        fMouseX += (mouseX - fMouseX) * 0.15;
        fMouseY += (mouseY - fMouseY) * 0.15;
        gsap.set(cursorFollower, { x: fMouseX, y: fMouseY });
    });

    // Hover states for links
    document.querySelectorAll('a, button, .magnetic').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });

    // Magnetic effect for specific elements
    document.querySelectorAll('.magnetic').forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(elem, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        elem.addEventListener('mouseleave', () => {
            gsap.to(elem, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    /* ==========================================================================
       GSAP Scroll Animations (Elyse Style)
       ========================================================================== */
    function initHeroAnimation() {
        // Staggered text reveal
        gsap.fromTo(".hero-title .line", 
            { y: "100%" },
            { y: "0%", duration: 1.5, stagger: 0.2, ease: "power4.out" }
        );
        gsap.fromTo(".hero-subtitle .line", 
            { y: "100%" },
            { y: "0%", duration: 1.5, stagger: 0.1, delay: 0.4, ease: "power4.out" }
        );
        gsap.fromTo(".hero-scroll-indicator",
            { opacity: 0 },
            { opacity: 1, duration: 1, delay: 1.5 }
        );
    }

    // Parallax out hero video
    gsap.to(".hero-video", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: "20%",
        scale: 1
    });

    // Reveal Text elements
    gsap.utils.toArray('.reveal-text').forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Fade In Up elements
    gsap.utils.toArray('.fade-in-up').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Sticky Experience Section
    ScrollTrigger.create({
        trigger: ".experience",
        start: "top top",
        end: "bottom bottom",
        pin: ".pin-image"
    });

    // Image reveal in sticky section
    gsap.from(".parallax-img-inner", {
        scrollTrigger: {
            trigger: ".experience",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        y: "15%"
    });

    // Highlight experience items on scroll
    gsap.utils.toArray('.experience-item').forEach(item => {
        ScrollTrigger.create({
            trigger: item,
            start: "top center",
            end: "bottom center",
            toggleClass: "active",
        });
    });

    // Full width image scale
    gsap.fromTo(".scale-img", 
        { scale: 1.2 },
        {
            scrollTrigger: {
                trigger: ".full-image",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            scale: 1
        }
    );

    // Map Reveal
    gsap.from(".map-block", {
        scrollTrigger: {
            trigger: ".map-block",
            start: "top 80%"
        },
        clipPath: "inset(100% 0 0 0)",
        duration: 1.5,
        ease: "power4.out"
    });

    // Horizontal Scrolling Gallery
    const track = document.querySelector('.gallery-track');
    const wrap = document.querySelector('.gallery-wrap');
    
    // Calculate total scroll distance
    let getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
            trigger: wrap,
            start: "top 20%",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            pin: true,
            animation: gsap.to(track, {x: getScrollAmount, ease: "none"}),
            scrub: 1,
            invalidateOnRefresh: true
        }
    });

    /* ==========================================================================
       Theme Personalization Logic
       ========================================================================== */
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    const themeNameDisplay = document.querySelector('.theme-name-display');
    const themeDescDisplay = document.querySelector('.theme-desc-display');

    const themeData = {
        porsche: {
            name: "Porsche Inspired",
            desc: "A refined balance of profound black, pure white, and racing red accents, embodying the spirit of Stuttgart."
        },
        ferrari: {
            name: "Ferrari Inspired",
            desc: "Passionate and bold. Rosso Corsa red dominates alongside Giallo Modena yellow accents, capturing the emotion of Maranello."
        },
        lamborghini: {
            name: "Lamborghini Inspired",
            desc: "Aggressive and raw. High-contrast Verde Mantis green and sharp edges designed for the ultimate statement."
        }
    };

    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            themeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetTheme = btn.getAttribute('data-target-theme');
            body.setAttribute('data-theme', targetTheme);

            if (themeData[targetTheme]) {
                gsap.to([themeNameDisplay, themeDescDisplay], {
                    opacity: 0,
                    y: 10,
                    duration: 0.3,
                    onComplete: () => {
                        themeNameDisplay.textContent = themeData[targetTheme].name;
                        themeDescDisplay.textContent = themeData[targetTheme].desc;
                        gsap.to([themeNameDisplay, themeDescDisplay], {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            ease: "power2.out"
                        });
                    }
                });
            }
        });
    });
});
