import { FaGem, FaGraduationCap, FaGlobe, FaHandshake } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const HighlightsSection = () => {
  const [isInView, setIsInView] = useState(false)
  
  // Check if element is in viewport on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    const section = document.getElementById('highlights-section')
    if (section) {
      observer.observe(section)
    }
    
    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  const stats = [
    { icon: <FaGem />, value: '15+', label: 'Years Experience' },
    { icon: <FaGraduationCap />, value: '2,500+', label: 'Graduates' },
    { icon: <FaGlobe />, value: '20+', label: 'Countries' },
    { icon: <FaHandshake />, value: '50+', label: 'Industry Partners' }
  ]

  return (
    <section id="highlights-section" className="relative py-24">
      {/* Background with Solid Color Instead of Image */}
      <div className="absolute inset-0 bg-primary z-0"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 text-white reveal">
              Why Choose GIM?
            </h2>
            
            <div className="space-y-6">
              <div className="flex reveal delay-100">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                  <FaGem className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">
                    Hands-on Learning
                  </h3>
                  <p className="text-white/80">
                    Access to real gemstones and state-of-the-art equipment for practical, hands-on experience.
                  </p>
                </div>
              </div>
              
              <div className="flex reveal delay-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                  <FaGraduationCap className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">
                    Expert Faculty
                  </h3>
                  <p className="text-white/80">
                    Learn from industry veterans with decades of experience in gemology and jewelry.
                  </p>
                </div>
              </div>
              
              <div className="flex reveal delay-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                  <FaGlobe className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">
                    Global Recognition
                  </h3>
                  <p className="text-white/80">
                    Our certifications are recognized by top jewelry houses and gemological institutions worldwide.
                  </p>
                </div>
              </div>
              
              <div className="flex reveal delay-400">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                  <FaHandshake className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-white">
                    Industry Connections
                  </h3>
                  <p className="text-white/80">
                    Network with industry professionals and find career opportunities through our extensive partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Column */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
                style={{ transitionDelay: `${(index * 0.1) + 0.3}s` }}
              >
                <div className="text-secondary text-3xl mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsSection