import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { useState, useEffect } from 'react'

// Add text-shadow style to your index.css file instead of using style jsx
// .text-shadow-lg {
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
// }

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Pre-load the hero image
  useEffect(() => {
    const img = new Image()
    img.src = '/images/hero-bg.jpg'
    img.onload = () => setImageLoaded(true)
  }, [])
  
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.about-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundColor: '#0f4c81', // Fallback color while image loads
        }}
      >
        {/* Use a div with background image for faster initial render */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ 
            backgroundImage: `url('/images/hero-bg.jpg')`,
            opacity: imageLoaded ? 1 : 0
          }}
        />
        
        {/* Darker overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Gradient overlay - added more opacity for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-black/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl bg-black/30 p-8 rounded-lg backdrop-blur-sm">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold mb-6"
            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Discover the World of Gemology
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white mb-8"
          >
            Unlock your potential with world-class education in gemology, jewelry design and industry expertise at Malaysia's premier gemological institute.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/courses" 
              className="btn bg-white text-primary hover:bg-neutral-100 font-medium"
            >
              Explore Programs
            </Link>
            <Link 
              to="/contact" 
              className="btn bg-secondary text-white hover:bg-secondary-dark font-medium"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2 bg-black/30 px-3 py-1 rounded">Discover More</span>
          <FaChevronDown className="text-white bg-black/30 p-1 rounded-full text-xl" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero