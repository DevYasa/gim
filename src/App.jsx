import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense, useState } from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'

// Lazy-loaded pages for better performance with explicit chunk names
const HomePage = lazy(() => import(/* webpackChunkName: "home" */ './pages/HomePage'))
const CoursesPage = lazy(() => import(/* webpackChunkName: "courses" */ './pages/CoursesPage'))
const CourseDetailPage = lazy(() => import(/* webpackChunkName: "course-detail" */ './pages/CourseDetailPage'))
const AboutPage = lazy(() => import(/* webpackChunkName: "about" */ './pages/AboutPage'))
const ContactPage = lazy(() => import(/* webpackChunkName: "contact" */ './pages/ContactPage'))

// Loading component for suspense fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-primary border-solid rounded-full border-t-transparent animate-spin"></div>
  </div>
)

// Error boundary for handling lazy-loading errors
const ErrorFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
    <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
    <p className="mb-6">We're sorry, but there was an error loading this page.</p>
    <button 
      onClick={() => window.location.reload()}
      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
    >
      Refresh the page
    </button>
  </div>
)

function App() {
  const location = useLocation()
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Handle page load complete
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true)
      
      // Add a class to body to indicate the page is loaded
      document.body.classList.add('page-loaded')
      
      // Remove initial loader after app has loaded
      const initialLoader = document.getElementById('initial-loader')
      if (initialLoader) {
        initialLoader.style.display = 'none'
      }
    }
    
    // Set loaded state when window loads
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Reveal animations on scroll with improved reliability
  useEffect(() => {
    if (!isLoaded) return;
    
    // Use a small delay to ensure DOM is fully rendered
    const setupObserver = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add active class to trigger animation
              entry.target.classList.add('active')
            }
          })
        },
        {
          root: null,
          rootMargin: '0px 0px -100px 0px', // Start animation earlier
          threshold: 0.1,
        }
      )

      // Find all elements that should be animated
      const revealElements = document.querySelectorAll('.reveal')
      
      // First make sure all elements are visible (without animation)
      revealElements.forEach((el) => {
        el.style.opacity = '1'
      })
      
      // Then observe them for animation
      revealElements.forEach((el) => {
        observer.observe(el)
      })

      // Fallback: Ensure all elements become fully visible after 3 seconds
      const fallbackTimer = setTimeout(() => {
        revealElements.forEach(el => {
          if (!el.classList.contains('active')) {
            el.classList.add('active')
          }
        });
      }, 3000);

      return () => {
        revealElements.forEach((el) => observer.unobserve(el))
        clearTimeout(fallbackTimer)
      }
    }, 300)

    return () => clearTimeout(setupObserver)
  }, [isLoaded])

  // Get the base URL from the environment
  const basename = import.meta.env.BASE_URL || '/'

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={
              <ErrorBoundary fallback={<ErrorFallback />}>
                <HomePage />
              </ErrorBoundary>
            } />
            <Route path="/courses" element={
              <ErrorBoundary fallback={<ErrorFallback />}>
                <CoursesPage />
              </ErrorBoundary>
            } />
            <Route path="/courses/:id" element={
              <ErrorBoundary fallback={<ErrorFallback />}>
                <CourseDetailPage />
              </ErrorBoundary>
            } />
            <Route path="/about" element={
              <ErrorBoundary fallback={<ErrorFallback />}>
                <AboutPage />
              </ErrorBoundary>
            } />
            <Route path="/contact" element={
              <ErrorBoundary fallback={<ErrorFallback />}>
                <ContactPage />
              </ErrorBoundary>
            } />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default App