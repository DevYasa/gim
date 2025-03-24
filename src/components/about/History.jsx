import React, { useEffect } from 'react'

const History = () => {
  const timeline = [
    {
      year: '2008',
      title: 'Foundation',
      description: 'GIM was established by experienced gemologists from Sri Lanka with a vision to provide world-class gemological education in Malaysia.',
      image: '/images/history/2008.jpg'
    },
    {
      year: '2010',
      title: 'First Graduating Class',
      description: 'GIM celebrated its first graduating class of certified gemologists who went on to successful careers in the industry.',
      image: '/images/history/2010.jpg'
    },
    {
      year: '2012',
      title: 'Expanded Curriculum',
      description: 'Introduction of jewelry design and precious metal arts programs to complement gemological education.',
      image: '/images/history/2012.jpg'
    },
    {
      year: '2015',
      title: 'International Recognition',
      description: 'GIM certifications gained international recognition, allowing graduates to work in major jewelry markets worldwide.',
      image: '/images/history/2015.jpg'
    },
    {
      year: '2018',
      title: 'Campus Expansion',
      description: 'Expanded facilities to include state-of-the-art laboratories and specialized workshops for practical training.',
      image: '/images/history/2018.jpg'
    },
    {
      year: '2022',
      title: 'Digital Transformation',
      description: 'Integration of advanced digital technologies in curriculum, including CAD jewelry design and online learning components.',
      image: '/images/history/2022.jpg'
    }
  ]

  // Force animations to work properly
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.history-section .reveal')
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
    <section className="py-16 bg-white history-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title reveal" style={{color: '#1f2937', opacity: 1}}>Our Journey</h2>
          <p className="section-subtitle mx-auto reveal delay-100" style={{color: '#4b5563', opacity: 1}}>
            From our humble beginnings to becoming Malaysia's premier gemological institute
          </p>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light/30 hidden md:block"></div>
          
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} reveal`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  opacity: 1
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary hidden md:block"></div>
                
                {/* Content */}
                <div className="md:w-1/2 px-4 md:px-12">
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block px-4 py-2 bg-primary text-white text-lg font-medium rounded mb-4">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-medium mb-3 text-neutral-900" style={{color: '#1f2937'}}>{item.title}</h3>
                    <p className="text-neutral-600 mb-4" style={{color: '#4b5563'}}>
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Image */}
                <div className="md:w-1/2 px-4 md:px-12 mt-4 md:mt-0">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={`GIM ${item.year} - ${item.title}`}
                      width={400}
                      height={192}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default History