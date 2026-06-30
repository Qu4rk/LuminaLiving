/**
 * The Limassol Circuit — Animation System
 * GSAP + ScrollTrigger + ScrollToPlugin
 * Motion language: restrained, premium, cinematic, slow, editorial.
 */

window.initSiteAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Register ScrollToPlugin if available
    if (typeof ScrollToPlugin !== 'undefined') {
        gsap.registerPlugin(ScrollToPlugin);
    }

    // Hero videos playback logic (slow motion & crossfade)
    const heroVideos = document.querySelectorAll('.hero-video');
    if (heroVideos.length > 0) {
        let currentVideoIndex = 0;
        const crossfadeTimeSec = 1.5; // match this with CSS transition duration
        let isTransitioning = false;
        
        function playNextVideo() {
            const currentVideo = heroVideos[currentVideoIndex];
            currentVideo.classList.remove('active');
            
            // Advance to next video
            currentVideoIndex = (currentVideoIndex + 1) % heroVideos.length;
            const nextVideo = heroVideos[currentVideoIndex];
            
            nextVideo.classList.add('active');
            nextVideo.currentTime = 0; // Reset video to start
            nextVideo.play();

            // Unlock transition guard after fade completes
            setTimeout(() => {
                isTransitioning = false;
            }, crossfadeTimeSec * 1000);
        }

        function checkTimeUpdate(e) {
            const video = e.target;
            // Calculate real-time seconds remaining based on playback rate
            const timeRemaining = (video.duration - video.currentTime) / (video.playbackRate || 1);
            
            // Start crossfade before the video actually ends
            if (timeRemaining <= crossfadeTimeSec && !isTransitioning) {
                isTransitioning = true;
                playNextVideo();
            }
        }

        // Attach event listeners
        heroVideos.forEach(v => {
            v.addEventListener('timeupdate', checkTimeUpdate);
            // Fallback in case timeupdate misses the exact window
            v.addEventListener('ended', () => {
                if (!isTransitioning) {
                    isTransitioning = true;
                    playNextVideo();
                }
            });
        });
    }

    /* ── Reduced Motion Check ── */
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Shared Easing & Duration ── */
    const EASE_PRIMARY   = 'power3.out';
    const EASE_HERO      = 'expo.out';
    const EASE_SCROLL    = 'power3.inOut';
    const DUR_FAST       = 0.9;
    const DUR_NORMAL     = 1.2;
    const DUR_SLOW       = 1.6;
    const STAGGER_TIGHT  = 0.08;
    const STAGGER_NORMAL = 0.12;
    const STAGGER_WIDE   = 0.18;

    /* ==========================================================================
       PRELOADER
       ========================================================================== */
    const preloaderText = document.querySelector('.preloader-text');
    const preloader = document.querySelector('.preloader');

    // Prevent snapping by setting the initial scale immediately
    gsap.set('.hero-video-wrapper', { scale: 1.06 });

    if (preloader) {
        // Fade in preloader text
        gsap.to(preloaderText, {
            opacity: 1,
            duration: DUR_NORMAL,
            ease: EASE_PRIMARY
        });

        // Fade out preloader, then init hero
        gsap.to(preloader, {
            opacity: 0,
            duration: DUR_NORMAL,
            delay: 1.6,
            ease: 'power2.inOut',
            onComplete: () => {
                preloader.style.display = 'none';
                initHeroReveal();
            }
        });
    } else {
        initHeroReveal();
    }

    /* ==========================================================================
       1. HERO REVEAL
       ========================================================================== */
    function initHeroReveal() {
        if (prefersReduced) {
            // Instantly show everything
            gsap.set('.hero-title .line', { y: '0%' });
            gsap.set('.hero-subtitle', { opacity: 1 });
            gsap.set('.hero-cta', { opacity: 1 });
            gsap.set('.nav-reveal', { opacity: 1, y: 0 });
            return;
        }

        // ── Navbar reveal — staggered drop-in ──
        gsap.to('.nav-reveal', {
            opacity: 1,
            y: 0,
            duration: DUR_NORMAL,
            stagger: STAGGER_WIDE,
            ease: EASE_PRIMARY,
            delay: 0.2
        });

        // Trigger navbar line animation in React
        window.dispatchEvent(new Event('heroRevealed'));

        // Hero headline lines — clip reveal
        gsap.to('.hero-title .line', {
            y: '0%',
            duration: DUR_SLOW,
            stagger: STAGGER_NORMAL,
            ease: EASE_HERO,
            delay: 0.1
        });

        // Hero subtitle — soft fade up
        gsap.to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: DUR_NORMAL,
            delay: 0.6,
            ease: EASE_PRIMARY
        });
        gsap.set('.hero-subtitle', { y: 24 });

        // Hero CTA — delayed reveal
        gsap.to('.hero-cta', {
            opacity: 1,
            y: 0,
            duration: DUR_NORMAL,
            delay: 0.9,
            ease: EASE_PRIMARY
        });
        gsap.set('.hero-cta', { y: 20 });

        // Video — subtle scale
        gsap.fromTo('.hero-video-wrapper',
            { scale: 1.06 },
            { scale: 1, duration: 2.5, ease: 'power2.out' }
        );

        // Scroll indicator
        gsap.fromTo('.hero-scroll-indicator',
            { opacity: 0 },
            { opacity: 1, duration: DUR_SLOW, delay: 1.4, ease: EASE_PRIMARY }
        );
    }

    /* ==========================================================================
       SKIP ALL SCROLL ANIMATIONS IF REDUCED MOTION
       ========================================================================== */
    if (prefersReduced) {
        // Make everything visible immediately
        gsap.set('.reveal-fade, .reveal-copy, .reveal-image, .reveal-card, .inquiry-heading, .inquiry-field-wrap, .inquiry-submit', {
            opacity: 1, y: 0, scale: 1
        });
        return; // Exit — no scroll animations
    }

    /* ==========================================================================
       NAVBAR HIDE ON SCROLL
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        ScrollTrigger.create({
            start: 'top top',
            end: 'max',
            onUpdate: (self) => {
                if (self.direction === 1 && self.scroll() > 100) {
                    // Scrolling down
                    gsap.to(navbar, { yPercent: -100, autoAlpha: 0, duration: 0.6, ease: EASE_PRIMARY, overwrite: 'auto' });
                } else if (self.direction === -1) {
                    // Scrolling up
                    gsap.to(navbar, { yPercent: 0, autoAlpha: 1, duration: 0.6, ease: EASE_PRIMARY, overwrite: 'auto' });
                }
            }
        });
    }

    /* ==========================================================================
       2. SECTION LABELS — Subtle fade-up
       ========================================================================== */
    gsap.utils.toArray('.reveal-fade').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 16 },
            {
                opacity: 1,
                y: 0,
                duration: DUR_FAST,
                ease: EASE_PRIMARY,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    once: true
                }
            }
        );
    });

    /* ==========================================================================
       3. BODY COPY — Fade-up reveals
       ========================================================================== */
    gsap.utils.toArray('.reveal-copy').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 24 },
            {
                opacity: 1,
                y: 0,
                duration: DUR_NORMAL,
                ease: EASE_PRIMARY,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    });

    /* ==========================================================================
       4. IMAGE REVEALS — Fade + scale + translate
       ========================================================================== */
    gsap.utils.toArray('.reveal-image').forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 40, scale: 1.04 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: DUR_SLOW,
                ease: EASE_PRIMARY,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    once: true
                }
            }
        );
    });

    /* ==========================================================================
       5. SIGNATURE CARDS — Soft staggered reveal
       ========================================================================== */
    const cards = gsap.utils.toArray('.reveal-card');
    if (cards.length) {
        gsap.fromTo(cards,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: DUR_NORMAL,
                stagger: STAGGER_WIDE,
                ease: EASE_PRIMARY,
                scrollTrigger: {
                    trigger: '.signatures-grid',
                    start: 'top 80%',
                    once: true
                }
            }
        );
    }

    /* ==========================================================================
       6. FULL-WIDTH IMAGE — Subtle parallax
       ========================================================================== */
    const fullImage = document.querySelector('.full-image-inner img');
    if (fullImage) {
        gsap.fromTo(fullImage,
            { scale: 1.08 },
            {
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.full-image',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );
    }

    /* ==========================================================================
       7. MAP — Gentle reveal
       ========================================================================== */
    const mapWrap = document.querySelector('.map-wrap');
    if (mapWrap) {
        gsap.fromTo(mapWrap,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: DUR_SLOW,
                ease: EASE_PRIMARY,
                scrollTrigger: {
                    trigger: mapWrap,
                    start: 'top 80%',
                    once: true
                }
            }
        );
    }

    /* ==========================================================================
       8. ANCHOR SMOOTH SCROLL (ScrollToPlugin)
       ========================================================================== */
    document.querySelectorAll('.nav-anchor').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            if (typeof ScrollToPlugin !== 'undefined') {
                gsap.to(window, {
                    scrollTo: { y: target, offsetY: 0 },
                    duration: 1.4,
                    ease: EASE_SCROLL
                });
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* ==========================================================================
       9. INQUIRY SECTION — Sequenced reveal
       ========================================================================== */
    const inquiryHeading = document.querySelector('.inquiry-heading');
    if (inquiryHeading) {
        gsap.fromTo(inquiryHeading,
            { opacity: 0, y: 24 },
            {
                opacity: 1,
                y: 0,
                duration: DUR_NORMAL,
                ease: EASE_PRIMARY,
                scrollTrigger: {
                    trigger: inquiryHeading,
                    start: 'top 85%',
                    once: true
                }
            }
        );
    }

    const inquiryFields = gsap.utils.toArray('.inquiry-field-wrap');
    if (inquiryFields.length) {
        gsap.fromTo(inquiryFields,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: DUR_FAST,
                stagger: STAGGER_TIGHT,
                ease: EASE_PRIMARY,
                scrollTrigger: {
                    trigger: '.inquiry-form',
                    start: 'top 82%',
                    once: true
                }
            }
        );
    }

    const inquirySubmit = document.querySelector('.inquiry-submit');
    if (inquirySubmit) {
        gsap.fromTo(inquirySubmit,
            { opacity: 0, y: 16 },
            {
                opacity: 1,
                y: 0,
                duration: DUR_FAST,
                ease: EASE_PRIMARY,
                scrollTrigger: {
                    trigger: inquirySubmit,
                    start: 'top 90%',
                    once: true
                }
            }
        );
    }

    /* ==========================================================================
       10. FOOTER — Calm final cadence
       ========================================================================== */
    const footer = document.querySelector('.site-footer');
    if (footer) {
        gsap.fromTo(footer,
            { opacity: 0 },
            {
                opacity: 1,
                duration: DUR_SLOW,
                ease: EASE_PRIMARY,
                scrollTrigger: {
                    trigger: footer,
                    start: 'top 90%',
                    once: true
                }
            }
        );
    }

    /* ==========================================================================
       INFINITE HORIZONTAL PARALLAX GALLERY
       ========================================================================== */
    const gallery = document.getElementById('atmosphere-gallery');
    const isMobileGallery = window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(pointer: coarse)").matches;
    if (gallery && !prefersReduced && !isMobileGallery) {
        const SNAP_ENABLED = true;
        const SNAP_DELAY = 150; 
        const SNAP_STRENGTH = 0.08;
        const INERTIA_DAMPING = 0.92;
        const SCROLL_SMOOTHING = 0.15;
        const cloneCount = 3;
        
        let targetScroll = 0;
        let currentScroll = 0;
        let velocity = 0;
        let snapTimeout = null;
        let isLooping = false;
        
        // Clone items for infinite scroll
        const initialItems = Array.from(gallery.children);
        const originalSetSize = initialItems.length;
        
        gallery.innerHTML = '';
        for (let c = 0; c < cloneCount; c++) {
            initialItems.forEach(item => {
                const clone = item.cloneNode(true);
                gallery.appendChild(clone);
            });
        }
        
        const items = Array.from(gallery.querySelectorAll('.gallery-item'));
        const images = items.map(item => item.querySelector('img'));
        let cachedContainerCenter = window.innerWidth / 2;
        let cachedItemsCenters = new Array(items.length);
        
        function updateItemsCenters() {
            for (let i = 0; i < items.length; i++) {
                const rect = items[i].getBoundingClientRect();
                cachedItemsCenters[i] = rect.left + rect.width / 2;
            }
        }
        
        function getOriginalSetWidth() {
            if (items.length === 0) return 0;
            let firstItemRect = items[0].getBoundingClientRect();
            let lastItemRect = items[originalSetSize - 1].getBoundingClientRect();
            return (lastItemRect.right - firstItemRect.left) + 15;
        }
        
        function lerp(start, end, amt) {
            return start + (end - start) * amt;
        }
        
        function handleInfiniteScroll() {
            if (isLooping) return;
            const maxScroll = gallery.scrollWidth - gallery.clientWidth;
            const setWidth = getOriginalSetWidth();
            const threshold = setWidth * 0.3;
            
            if (targetScroll > maxScroll - threshold && !isLooping) {
                isLooping = true;
                targetScroll -= setWidth;
                currentScroll -= setWidth;
                let newOffsets = [...offsets];
                for(let i=0; i < offsets.length; i++) {
                    if (i + originalSetSize < offsets.length) newOffsets[i] = offsets[i + originalSetSize];
                }
                offsets = newOffsets;
                gallery.scrollLeft = currentScroll;
                requestAnimationFrame(() => { isLooping = false; });
            } else if (targetScroll < threshold && !isLooping) {
                isLooping = true;
                targetScroll += setWidth;
                currentScroll += setWidth;
                let newOffsets = [...offsets];
                for(let i=0; i < offsets.length; i++) {
                    if (i - originalSetSize >= 0) newOffsets[i] = offsets[i - originalSetSize];
                }
                offsets = newOffsets;
                gallery.scrollLeft = currentScroll;
                requestAnimationFrame(() => { isLooping = false; });
            }
        }
        
        function triggerSnap() {
            if (!SNAP_ENABLED) return;
            clearTimeout(snapTimeout);
            snapTimeout = setTimeout(() => {
                if (Math.abs(velocity) > 0.5) return;
                updateItemsCenters();
                const containerCenter = window.innerWidth / 2;
                let closest = 0;
                let minDist = Infinity;
                for (let i = 0; i < items.length; i++) {
                    const dist = Math.abs(containerCenter - cachedItemsCenters[i]);
                    if (dist < minDist) {
                        minDist = dist;
                        closest = i;
                    }
                }
                const targetItem = items[closest];
                const rect = targetItem.getBoundingClientRect();
                const targetPosition = targetScroll + (rect.left + rect.width / 2 - containerCenter);
                const maxScroll = gallery.scrollWidth - gallery.clientWidth;
                let newTarget = Math.max(0, Math.min(targetPosition, maxScroll));
                const snapVelocity = (newTarget - targetScroll) * SNAP_STRENGTH;
                velocity += snapVelocity;
            }, SNAP_DELAY);
        }
        
        // Navigation Buttons
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const pushForce = 50; // Velocity push to scroll roughly one item
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                velocity -= pushForce; 
                clearTimeout(snapTimeout);
                snapTimeout = setTimeout(triggerSnap, SNAP_DELAY);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                velocity += pushForce;
                clearTimeout(snapTimeout);
                snapTimeout = setTimeout(triggerSnap, SNAP_DELAY);
            });
        }
        
        let lastTimestamp = 0;
        let offsets = new Array(images.length).fill(0);
        
        function animate(timestamp) {
            if (timestamp - lastTimestamp > 100) {
                cachedContainerCenter = window.innerWidth / 2;
                lastTimestamp = timestamp;
            }
            targetScroll += velocity;
            velocity *= INERTIA_DAMPING;
            if (Math.abs(velocity) < 0.05) velocity = 0;
            
            const maxScroll = gallery.scrollWidth - gallery.clientWidth;
            // No clamping targetScroll here to allow smooth overshoot for the infinite wrap
            handleInfiniteScroll();
            
            currentScroll = lerp(currentScroll, targetScroll, SCROLL_SMOOTHING);
            gallery.scrollLeft = currentScroll;
            updateItemsCenters();
            
            for (let i = 0; i < images.length; i++) {
                let offset = (cachedContainerCenter - cachedItemsCenters[i]) / 6;
                offset = Math.max(-80, Math.min(80, offset));
                offsets[i] = lerp(offsets[i], offset, 0.12);
                images[i].style.transform = `translate(calc(-50% + ${offsets[i].toFixed(1)}px), -50%)`;
            }
            
            window.atmosphereAnimationId = requestAnimationFrame(animate);
        }
        
        updateItemsCenters();
        
        if (window.atmosphereAnimationId) cancelAnimationFrame(window.atmosphereAnimationId);
        window.atmosphereAnimationId = requestAnimationFrame(animate);
        
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                cachedContainerCenter = window.innerWidth / 2;
                updateItemsCenters();
                const maxScroll = gallery.scrollWidth - gallery.clientWidth;
                targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
                currentScroll = targetScroll;
                gallery.scrollLeft = currentScroll;
            }, 100);
        });
        
        // Initial center starting position
        setTimeout(() => {
            targetScroll = getOriginalSetWidth();
            currentScroll = targetScroll;
        }, 100);
    }

    /* ==========================================================================
       HERO PARALLAX — Subtle on scroll
       ========================================================================== */
    gsap.to('.hero-video-wrapper', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: '8%'
    });

    /* ==========================================================================
       ROTATING TEXT ANIMATION
       ========================================================================== */
    var words = document.getElementsByClassName('word');
    var wordArray = [];
    var currentWord = 0;

    if (words.length > 0 && !prefersReduced) {
        words[currentWord].style.opacity = 1;
        for (var i = 0; i < words.length; i++) {
            splitLetters(words[i]);
        }

        function changeWord() {
            if (wordArray.length === 0) return;
            var cw = wordArray[currentWord];
            var nw = currentWord == wordArray.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
            for (var i = 0; i < cw.length; i++) {
                animateLetterOut(cw, i);
            }

            for (var i = 0; i < nw.length; i++) {
                nw[i].className = 'letter behind';
                nw[0].parentElement.style.opacity = 1;
                animateLetterIn(nw, i);
            }

            currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
        }

        function animateLetterOut(cw, i) {
            setTimeout(function () {
                if (cw[i]) cw[i].className = 'letter out';
            }, i * 80);
        }

        function animateLetterIn(nw, i) {
            setTimeout(function () {
                if (nw[i]) nw[i].className = 'letter in';
            }, 340 + (i * 80));
        }

        function splitLetters(word) {
            if (word.querySelector('.letter')) {
                var letters = Array.from(word.querySelectorAll('.letter'));
                wordArray.push(letters);
                return;
            }
            var content = word.innerHTML;
            word.innerHTML = '';
            var letters = [];
            for (var i = 0; i < content.length; i++) {
                var letter = document.createElement('span');
                letter.className = 'letter';
                if (content.charAt(i) === ' ') {
                    letter.innerHTML = '&nbsp;';
                } else {
                    letter.innerHTML = content.charAt(i);
                }
                word.appendChild(letter);
                letters.push(letter);
            }

            wordArray.push(letters);
        }

        // Clean up previous intervals if hot-reloading
        if (window.rotatingInterval) clearInterval(window.rotatingInterval);
        if (window.rotatingTimeout) clearTimeout(window.rotatingTimeout);
        
        window.rotatingTimeout = setTimeout(() => {
            changeWord();
            window.rotatingInterval = setInterval(changeWord, 4000);
        }, 3000); // Start the rotation 3 seconds after load
    }

};
