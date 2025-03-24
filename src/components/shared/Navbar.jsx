import { useState, useEffect, memo } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navItems } from '../../constants/navigation'
import { getImagePath } from '@/utils/imageUtils'

// Memo-ize the Navbar to prevent unnecessary re-renders
const Navbar = memo(() => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Set mounted state after initial render
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll effect with throttling to improve performance
  useEffect(() => {
    let scrollTimer = null
    const handleScroll = () => {
      if (scrollTimer !== null) return
      scrollTimer = setTimeout(() => {
        setScrolled(window.scrollY > 10)
        scrollTimer = null
      }, 150) // Throttle to 150ms
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimer) clearTimeout(scrollTimer)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Initial style before mounting to prevent flash
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2 h-16" 
           aria-label="Main navigation">
        <div className="container-custom">
          <div className="flex items-center justify-between h-full">
            {/* Logo placeholder */}
            <div className="w-32 h-8 bg-gray-200 rounded"></div>
            {/* Navigation placeholder */}
            <div className="hidden md:flex space-x-8">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="w-16 h-4 bg-gray-200 rounded"></div>
              ))}
            </div>
            {/* Apply button placeholder */}
            <div className="hidden md:block">
              <div className="w-24 h-8 bg-gray-200 rounded"></div>
            </div>
            {/* Mobile menu placeholder */}
            <div className="md:hidden">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  // Enhanced background style for better visibility on hero image
  const navBgClass = scrolled 
    ? 'bg-white shadow-md py-2' 
    : 'bg-black/30 backdrop-blur-md py-4 shadow-lg';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgClass}`}
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={getImagePath("/images/logo.png")}
              alt="Gemological Institute of Malaysia" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative font-medium text-base transition-colors px-1 py-2 ${
                    scrolled
                      ? 'text-neutral-700 hover:text-primary'
                      : 'text-white hover:text-secondary font-medium'
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-medium text-base transition-colors px-1 py-2 ${
                      isActive
                        ? scrolled ? 'text-primary' : 'text-secondary'
                        : scrolled
                          ? 'text-neutral-700 hover:text-primary'
                          : 'text-white hover:text-secondary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className={`absolute left-0 bottom-0 w-full h-0.5 ${scrolled ? 'bg-primary' : 'bg-secondary'}`}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            ))}
          </div>

          {/* Apply Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`btn ${scrolled ? 'btn-primary' : 'bg-secondary text-white hover:bg-secondary-dark'}`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${
                scrolled ? 'text-neutral-700' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container-custom py-4 space-y-4">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 px-3 rounded-md transition-colors text-neutral-700 hover:bg-neutral-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-md transition-colors ${
                        isActive
                          ? 'bg-primary-light/10 text-primary'
                          : 'text-neutral-700 hover:bg-neutral-100'
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                )
              ))}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="block w-full text-center btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
})

export default Navbar