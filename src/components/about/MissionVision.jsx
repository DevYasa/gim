import React, { useEffect } from 'react'
import { getImagePath } from '@/utils/imageUtils';

const MissionVision = () => {
  // Enable animations after components are visible
  useEffect(() => {
    // Remove forced active class to allow proper animations
    const animationTimer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Start with elements already visible but allow animation effects
              entry.target.classList.remove('pre-animate');
              entry.target.classList.add('animate');
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      const animateElements = document.querySelectorAll('.mission-vision-section .animate-on-scroll');
      animateElements.forEach((el) => observer.observe(el));

      return () => {
        animateElements.forEach((el) => observer.unobserve(el));
      };
    }, 100); // short delay
    
    return () => clearTimeout(animationTimer);
  }, []);
  
  return (
    <section className="py-16 bg-white mission-vision-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-semibold mb-6 text-primary animate-on-scroll pre-animate" 
                style={{color: '#0f4c81', transform: 'none'}}>
              Our Mission & Vision
            </h2>
            <div className="space-y-6">
              <div className="animate-on-scroll pre-animate" style={{transitionDelay: '0.1s', transform: 'none'}}>
                <h3 className="text-xl font-medium mb-2 text-primary" style={{color: '#0f4c81'}}>Mission</h3>
                <p className="text-neutral-700" style={{color: '#374151'}}>
                  To provide exceptional education in gemology and jewelry arts that combines 
                  traditional knowledge with modern techniques, preparing students for successful 
                  careers in the global gem and jewelry industry.
                </p>
              </div>
              
              <div className="animate-on-scroll pre-animate" style={{transitionDelay: '0.2s', transform: 'none'}}>
                <h3 className="text-xl font-medium mb-2 text-primary" style={{color: '#0f4c81'}}>Vision</h3>
                <p className="text-neutral-700" style={{color: '#374151'}}>
                  To be the premier institution for gemological education in Southeast Asia, 
                  recognized globally for the excellence of our programs, the expertise of our 
                  faculty, and the success of our graduates.
                </p>
              </div>
              
              <div className="animate-on-scroll pre-animate" style={{transitionDelay: '0.3s', transform: 'none'}}>
                <h3 className="text-xl font-medium mb-2 text-primary" style={{color: '#0f4c81'}}>Our Commitment</h3>
                <p className="text-neutral-700" style={{color: '#374151'}}>
                  We are committed to maintaining the highest standards of education, 
                  integrating hands-on training with theoretical knowledge, and fostering an 
                  environment that encourages creativity, critical thinking, and professional growth.
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll pre-animate img-hover-zoom rounded-lg overflow-hidden shadow-xl" 
               style={{transform: 'none'}}>
            <img 
              src={getImagePath("/images/intro-gemology.png")}
              alt="GIM Campus"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Add the styles to a style tag without the jsx attribute */}
      <style>
        {`
        .pre-animate {
          opacity: 1 !important;
        }
        .animate-on-scroll {
          transition: all 0.6s ease-in-out;
        }
        .animate-on-scroll.animate {
          transform: translateY(10px) !important;
        }
        `}
      </style>
    </section>
  )
}

export default MissionVision