import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CourseFilter from '../components/courses/CourseFilter'
import CourseCard from '../components/courses/CourseCard'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { courses, courseCategories } from '../constants/courses'
import { filterAndSortItems } from '../utils/helpers'
import SectionTitle from '../components/shared/SectionTitle'

const CoursesPage = () => {
  useDocumentTitle('Courses & Programs | GIM')
  
  const [filteredCourses, setFilteredCourses] = useState(courses)
  const [filters, setFilters] = useState({
    category: 'all',
    search: ''
  })
  const [sortBy, setSortBy] = useState('title')
  const [sortDirection, setSortDirection] = useState('asc')

  // Apply filters when they change
  useEffect(() => {
    const filtered = filterAndSortItems(
      courses,
      { 
        // Only apply category filter if not 'all'
        ...(filters.category !== 'all' && { category: filters.category }),
      },
      sortBy,
      sortDirection === 'asc'
    )
    
    // Apply search filter separately to allow for more flexible searching
    const searched = filters.search
      ? filtered.filter(course => 
          course.title.toLowerCase().includes(filters.search.toLowerCase()) || 
          course.shortDescription.toLowerCase().includes(filters.search.toLowerCase())
        )
      : filtered
    
    setFilteredCourses(searched)
  }, [filters, sortBy, sortDirection])

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  // Handle sort changes
  const handleSortChange = (option) => {
    if (option === sortBy) {
      // Toggle direction if same field
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(option)
      setSortDirection('asc')
    }
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-white"
            >
              Programs & Courses
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Discover our comprehensive range of programs designed to prepare you for a successful career in gemology and jewelry
            </motion.p>
          </div>
        </div>
      </div>

      {/* Filters and Course List */}
      <div className="bg-white py-12 md:py-16">
        <div className="container-custom">
          {/* Filters */}
          <CourseFilter 
            categories={courseCategories}
            filters={filters}
            onFilterChange={handleFilterChange}
            sortBy={sortBy}
            sortDirection={sortDirection}
            onSortChange={handleSortChange}
          />
          
          {/* Results count */}
          <div className="mb-8">
            <p className="text-neutral-600">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'program' : 'programs'} found
            </p>
          </div>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <CourseCard 
                  key={course.id}
                  course={course}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">No courses found</h3>
                <p className="text-neutral-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => setFilters({ category: 'all', search: '' })}
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="bg-primary rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Apply now to secure your place in our world-class gemology and jewelry programs. 
              Our admissions team is ready to assist you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn bg-white text-primary hover:bg-neutral-100">
                Apply Now
              </a>
              <a href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesPage