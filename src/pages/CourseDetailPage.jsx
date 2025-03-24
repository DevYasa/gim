import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaClock, FaCalendarAlt, FaMoneyBillWave, FaGraduationCap, FaArrowLeft } from 'react-icons/fa'
import CourseDetail from '../components/courses/CourseDetail'
import RelatedCourses from '../components/courses/RelatedCourses'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { courses } from '../constants/courses'
import SectionTitle from '../components/shared/SectionTitle'
import { getImagePath } from '@/utils/imageUtils'

const CourseDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Set document title based on course
  useDocumentTitle(course ? `${course.title} | GIM` : 'Course Details | GIM')
  
  // Find the course based on ID
  useEffect(() => {
    setLoading(true)
    const foundCourse = courses.find(c => c.id === id)
    
    if (foundCourse) {
      setCourse(foundCourse)
    } else {
      // Redirect to courses page if course not found
      navigate('/courses', { replace: true })
    }
    
    setLoading(false)
  }, [id, navigate])
  
  // If loading or no course found, show loading state
  if (loading || !course) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-solid rounded-full border-t-transparent animate-spin"></div>
      </div>
    )
  }
  
  // Find related courses
  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 3)
  
  return (
    <div className="pt-20">
      {/* Course Header */}
      <div className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link to="/courses" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <FaArrowLeft className="mr-2" />
              Back to All Courses
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-white"
            >
              {course.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              {course.shortDescription}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white"
            >
              <div className="flex items-center">
                <FaClock className="mr-3 text-secondary" />
                <div>
                  <p className="text-white/70 text-sm">Duration</p>
                  <p className="font-medium">{course.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaCalendarAlt className="mr-3 text-secondary" />
                <div>
                  <p className="text-white/70 text-sm">Start Dates</p>
                  <p className="font-medium">{course.startDates}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaGraduationCap className="mr-3 text-secondary" />
                <div>
                  <p className="text-white/70 text-sm">Schedule</p>
                  <p className="font-medium">{course.schedule}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaMoneyBillWave className="mr-3 text-secondary" />
                <div>
                  <p className="text-white/70 text-sm">Tuition</p>
                  <p className="font-medium">{course.tuition}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="bg-white py-12 md:py-16">
        <div className="container-custom">
          <CourseDetail course={course} />
        </div>
      </div>
      
      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <RelatedCourses courses={relatedCourses} currentCourseId={course.id} />
      )}
      
      {/* Call to Action */}
      <div className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="bg-primary rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-white">
              Begin Your Journey at GIM
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step toward a rewarding career in gemology and jewelry. 
              Apply now to secure your place in our world-class programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-neutral-100">
                Apply Now
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Schedule a Campus Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailPage