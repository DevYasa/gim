import React, { useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import { getImagePath } from '@/utils/imageUtils';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Harrico Gems & Jewels',
      logo: '/images/partners/harrico.jpg',
      description: 'As our parent company, Harrico Gems & Jewels provides invaluable industry expertise and access to rare gemstone specimens for our students.',
      website: 'https://devyasa.github.io/harrico/'
    },
    {
      id: 2,
      name: 'International Gemological Association',
      logo: '/images/partners/partner-iga.jpg',
      description: 'Our partnership with IGA ensures that our curriculum meets global standards and our certifications are internationally recognized.',
      website: '#'
    },
    {
      id: 3,
      name: 'Asian Jewelry Design Council',
      logo: '/images/partners/partner-ajdc.jpg',
      description: 'Collaboration with AJDC keeps our design programs at the cutting edge of jewelry design trends and techniques.',
      website: '#'
    },
    {
      id: 4,
      name: 'Malaysian Jewelers Association',
      logo: '/images/partners/partner-mja.jpg',
      description: 'MJA provides networking opportunities, industry insights, and employment connections for our graduates.',
      website: '#'
    },
    {
      id: 5,
      name: 'Global Gem Research Laboratory',
      logo: '/images/partners/partner-ggrl.jpg',
      description: 'Partnership with GGRL allows our students access to advanced gemological research and testing facilities.',
      website: '#'
    },
    {
      id: 6,
      name: 'South Asian Gem Exchange',
      logo: '/images/partners/partner-sage.jpg',
      description: 'SAGE facilitates gem sourcing, trading experiences, and market insights for our students and faculty.',
      website: '#'
    }
  ]

  // Force animations to work properly
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.partners-section .reveal')
        .forEach(el => {
          // Ensure visible
          el.style.opacity = '1';
          // Add animation class
          setTimeout(() => {
            el.classList.add('active');
          }, 100);
        });
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-neutral-50 partners-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title reveal" style={{color: '#1f2937', opacity: 1}}>Our Partners</h2>
          <p className="section-subtitle mx-auto reveal delay-100" style={{color: '#4b5563', opacity: 1}}>
            We collaborate with industry leaders to provide the best education and opportunities for our students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="card p-6 reveal"
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                opacity: 1
              }}
            >
              <div className="h-40 flex items-center justify-center mb-6 p-4 bg-neutral-100 rounded">
              <img
                src={getImagePath(partner.logo)}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900" style={{color: '#1f2937'}}>{partner.name}</h3>
              <p className="text-neutral-600 mb-4" style={{color: '#4b5563'}}>
                {partner.description}
              </p>
              <a 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary-dark transition-colors font-medium inline-flex items-center"
                style={{color: '#0f4c81'}}
              >
                Visit Website
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Harrico Feature */}
        <div className="mt-16 bg-primary rounded-xl p-8 text-white reveal delay-300" style={{opacity: 1}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Our Partnership with Harrico Gems & Jewels
              </h3>
              <p className="mb-4">
                As a subsidiary of Harrico Gems & Jewels, GIM benefits from a direct connection to the gemstone and jewelry industry, enriching our students' educational experience.
              </p>
              <p className="mb-6">
                This partnership provides our students with unique advantages:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <FaCheck className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Access to rare gemstone specimens</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Internship opportunities in a leading company</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Guest lectures from industry professionals</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority job placement for graduates</span>
                </li>
              </ul>
              <a 
                href="https://devyasa.github.io/harrico/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-6 py-3 bg-white text-primary rounded-md hover:bg-neutral-100 transition-colors"
                style={{color: '#0f4c81'}}
              >
                Visit Harrico Website
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={getImagePath("/images/partners/harrico.jpg")}
              alt="Harrico Gems & Jewels"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: "16/9" }}
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners