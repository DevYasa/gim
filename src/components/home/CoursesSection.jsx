import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaClock, FaCalendarAlt, FaStar } from 'react-icons/fa'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import SectionTitle from '../shared/SectionTitle'
import { courses } from '../../constants/courses'

const CoursesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  
  // Filter featured courses
  const featuredCourses = courses.filter(course => course.featured).slice(0, 3)

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <SectionTitle
          title="Our Programs"
          subtitle="Discover our internationally recognized programs designed to prepare you for a successful career in gemology and jewelry"
          centered={true}
        />

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="card card-hover reveal"
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden h-48">
                <LazyLoadImage
                  src={course.image}
                  alt={course.title}
                  effect="blur"
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredCard === course.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>4.8/5.0</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 text-neutral-900">{course.title}</h3>
                <p className="text-neutral-600 mb-4">{course.shortDescription}</p>
                <div className="flex flex-col space-y-2 mb-6">
                  <div className="flex items-center text-neutral-500">
                    <FaClock className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-neutral-500">
                    <FaCalendarAlt className="mr-2" />
                    <span>{course.startDates}</span>
                  </div>
                </div>
                <Link 
                  to={`/courses/${course.id}`} 
                  className="block w-full text-center py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium rounded"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/courses" className="btn btn-outline reveal">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection