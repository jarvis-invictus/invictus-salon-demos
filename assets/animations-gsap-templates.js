// GSAP Animation Templates for Humanization V2
// Use in Next.js projects with `npm install gsap`

/**
 * SALON ANIMATIONS
 */

// 1. Scroll-triggered Reveal (Salon Services)
export const initSalonScrollReveal = () => {
  const { gsap } = window;
  
  gsap.utils.toArray('.salon-service-card').forEach((card) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });
  });
};

// 2. Hover Effect on Service Cards (Salon)
export const initSalonCardHover = () => {
  const { gsap } = window;
  
  document.querySelectorAll('.salon-service-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        ease: 'power2.out',
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        ease: 'power2.out',
      });
    });
  });
};

// 3. Before/After Image Carousel (Salon Transformations)
export const initBeforeAfterCarousel = () => {
  const { gsap } = window;
  const carousel = document.querySelector('.before-after-carousel');
  const images = gsap.utils.toArray('.before-after-image');
  let currentIndex = 0;
  
  const showImage = (index) => {
    gsap.to(images, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    });
    
    gsap.to(images[index], {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.inOut',
    });
    
    currentIndex = index;
  };
  
  // Next button
  document.querySelector('.carousel-next')?.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  });
  
  // Prev button
  document.querySelector('.carousel-prev')?.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  });
  
  // Auto-play (5s per image)
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  }, 5000);
};

// 4. Testimonial Fade-in (Salon)
export const initTestimonialFadeIn = () => {
  const { gsap } = window;
  
  gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: index * 0.1,
      ease: 'power3.out',
    });
  });
};

/**
 * JEWELRY ANIMATIONS
 */

// 5. Product 360 Rotation (Jewelry)
export const initProduct360Rotation = () => {
  const { gsap } = window;
  const product = document.querySelector('.product-360');
  
  product?.addEventListener('mousemove', (e) => {
    const rect = product.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const rotationY = x * 360;
    
    gsap.to(product, {
      rotationY: rotationY,
      duration: 0.3,
      ease: 'power2.out',
    });
  });
  
  product?.addEventListener('mouseleave', () => {
    gsap.to(product, {
      rotationY: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  });
};

// 6. Sparkle Effect on Hover (Jewelry)
export const initSparkleEffect = () => {
  const { gsap } = window;
  
  document.querySelectorAll('.jewelry-item').forEach((item) => {
    const sparkles = item.querySelectorAll('.sparkle');
    
    item.addEventListener('mouseenter', () => {
      sparkles.forEach((sparkle, index) => {
        gsap.fromTo(
          sparkle,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            delay: index * 0.05,
            ease: 'back.out',
          }
        );
      });
    });
  });
};

// 7. Product Zoom on Scroll (Jewelry)
export const initProductZoomScroll = () => {
  const { gsap } = window;
  
  gsap.utils.toArray('.jewelry-product').forEach((product) => {
    gsap.to(product, {
      scrollTrigger: {
        trigger: product,
        start: 'top 60%',
        end: 'top 20%',
        scrub: 1,
      },
      scale: 1.05,
      ease: 'power2.inOut',
    });
  });
};

/**
 * GENERAL ANIMATIONS
 */

// 8. Text Reveal (All niches)
export const initTextReveal = () => {
  const { gsap } = window;
  
  gsap.utils.toArray('.text-reveal').forEach((text) => {
    const chars = text.innerText.split('');
    text.innerHTML = chars
      .map((char) => `<span class="char">${char}</span>`)
      .join('');
    
    gsap.fromTo(
      text.querySelectorAll('.char'),
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
        },
      }
    );
  });
};

// 9. Stagger Button Reveal (All niches)
export const initButtonStagger = () => {
  const { gsap } = window;
  
  gsap.utils.toArray('.button-group').forEach((group) => {
    gsap.fromTo(
      group.querySelectorAll('button'),
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 80%',
        },
      }
    );
  });
};

// 10. Image Parallax (All niches)
export const initParallaxImages = () => {
  const { gsap } = window;
  
  gsap.utils.toArray('.parallax-image').forEach((image) => {
    gsap.to(image, {
      scrollTrigger: {
        trigger: image,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      y: -100,
      ease: 'none',
    });
  });
};

/**
 * INITIALIZATION
 * Call these in your Next.js page useEffect
 */

export const initAllAnimations = () => {
  // Wait for GSAP to load
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const scriptScrollTrigger = document.createElement('script');
      scriptScrollTrigger.src =
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      scriptScrollTrigger.onload = () => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        
        // Initialize all animations
        initSalonScrollReveal();
        initSalonCardHover();
        initBeforeAfterCarousel();
        initTestimonialFadeIn();
        initProduct360Rotation();
        initSparkleEffect();
        initProductZoomScroll();
        initTextReveal();
        initButtonStagger();
        initParallaxImages();
      };
      document.head.appendChild(scriptScrollTrigger);
    };
    document.head.appendChild(script);
  }
};
