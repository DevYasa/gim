import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaClock, FaCalendarAlt, FaStar } from 'react-icons/fa'
import OptimizedImage from '../shared/OptimizedImage'
import { truncateText } from '../../utils/helpers'

const CourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card card-hover h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Image */}
      <div className="relative overflow-hidden h-48">
        <OptimizedImage
          src={course.image || "/images/course-placeholder.jpg"}
          alt={course.title}
          width={400}
          height={192}
          className="transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
        
        {/* Featured badge */}
        {course.featured && (
          <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        
        {/* Rating badge */}
        <div className="absolute bottom-4 left-4 flex items-center text-white">
          <FaStar className="text-yellow-400 mr-1" />
          <span>4.8/5.0</span>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-medium mb-2 text-neutral-900">{course.title}</h3>
        
        <p className="text-neutral-600 mb-4 flex-grow">
          {truncateText(course.shortDescription, 120)}
        </p>
        
        {/* Course Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-start">
            <FaClock className="mt-1 mr-2 text-primary flex-shrink-0" />
            <span className="text-sm text-neutral-600">{course.duration}</span>
          </div>
          
          <div className="flex items-start">
            <FaCalendarAlt className="mt-1 mr-2 text-primary flex-shrink-0" />
            <span className="text-sm text-neutral-600">{course.schedule}</span>
          </div>
        </div>
        
        {/* Call to Action */}
        <Link
          to={`/courses/${course.id}`}
          className="block w-full text-center py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors font-medium rounded"
        >
          View Program
        </Link>
      </div>
    </motion.div>
  )
}

export default CourseCard