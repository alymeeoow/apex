// hooks/useUniversalAnimations.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useUniversalAnimations = () => {
  const location = useLocation();
  const observerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any existing animations
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

 

    // Initialize animations after a short delay to ensure DOM is ready
    timeoutRef.current = setTimeout(() => {
      initializeAnimations();
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [location.pathname]); // Re-run when route changes

  const initializeAnimations = () => {
    // 1. Hero Animation (if exists on page)
    const hero = document.querySelector('.apex-hero, .hero, .about-hero, .services-hero');
    if (hero) {
      hero.classList.add('apex-animate-section');
      setTimeout(() => {
        hero.classList.add('is-visible');
      }, 300);
    }

    // 2. Section Animations
    const sections = document.querySelectorAll(
      '.apex-section, .section, .about-section, .services-section, .contact-section, .empowerment-section, .faq-section'
    );
    
    sections.forEach((section, index) => {
      section.classList.add('apex-animate-section');
    });

    // 3. Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            // Add visible class with staggered delay
            setTimeout(() => {
              entry.target.classList.add('is-visible');
              
              // Trigger child animations
              const children = entry.target.querySelectorAll(
                '.apex-title, .apex-subtitle, .apex-eyebrow, .apex-lead, .apex-text, .apex-card, .apex-list li, .apex-stat, .apex-image'
              );
              
              children.forEach((child, childIdx) => {
                setTimeout(() => {
                  child.classList.add('is-visible');
                }, childIdx * 100);
              });
            }, idx * 100);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      observerRef.current.observe(section);
    });

 


    // 5. Add scroll progress indicator
    setupScrollProgress();
  };

  const setupScrollProgress = () => {
    // Remove existing progress bar if any
    const existingProgress = document.querySelector('.apex-scroll-progress');
    if (existingProgress) {
      existingProgress.remove();
    }

    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'apex-scroll-progress';
    document.body.appendChild(progressBar);

    // Update progress on scroll
    const updateScrollProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      progressBar.style.transform = `scaleX(${scrolled / 100})`;
      progressBar.classList.toggle('visible', scrolled > 0);
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  };
};