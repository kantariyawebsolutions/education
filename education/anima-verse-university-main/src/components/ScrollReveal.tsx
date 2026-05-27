
import React, { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    // Function to handle reveal animations on scroll
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    // Initialize on first render
    revealElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealElements);
    
    // Clean up
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollReveal;
