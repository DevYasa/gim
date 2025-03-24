import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import CoursesSection from '../components/home/CoursesSection'
import HighlightsSection from '../components/home/HighlightsSection'
import ContactSection from '../components/home/ContactSection'
import useDocumentTitle from '../hooks/useDocumentTitle'

const HomePage = () => {
  useDocumentTitle('GIM - Gemological Institute of Malaysia')

  // Reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div>
      <Hero />
      <AboutSection />
      <CoursesSection />
      <HighlightsSection />
      <ContactSection />
    </div>
  )
}

export default HomePage