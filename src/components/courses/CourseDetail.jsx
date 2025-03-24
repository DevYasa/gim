import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getImagePath } from '@/utils/imageUtils';

const CourseDetail = ({ course }) => {
  if (!course) {
    return null
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Main Content */}
      <div className="lg:col-span-2">
        <div className="prose prose-lg max-w-none">
          {/* Course Overview Section */}
          <div className="mb-10 bg-white rounded-lg p-6 shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4 pb-2 border-b border-neutral-200">Course Overview</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">{course.fullDescription}</p>
          </div>
          
          {/* What You'll Learn Section */}
          <div className="mb-10 bg-white rounded-lg p-6 shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4 pb-2 border-b border-neutral-200">What You'll Learn</h2>
            <ul className="space-y-3 mt-4">
              {course.modules.map((module, index) => (
                <li key={index} className="flex items-start text-neutral-700">
                  <FaChevronRight className="text-primary mt-1.5 mr-2 flex-shrink-0" />
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Career Opportunities Section */}
          <div className="mb-10 bg-white rounded-lg p-6 shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4 pb-2 border-b border-neutral-200">Career Opportunities</h2>
            <p className="text-neutral-700 mb-4">Graduates of this program have pursued successful careers in:</p>
            <ul className="space-y-3">
              {course.careers.map((career, index) => (
                <li key={index} className="flex items-start text-neutral-700">
                  <FaChevronRight className="text-primary mt-1.5 mr-2 flex-shrink-0" />
                  <span>{career}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Prerequisites Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-serif font-semibold text-primary mb-4 pb-2 border-b border-neutral-200">Prerequisites</h2>
            <p className="text-neutral-700">{course.prerequisites}</p>
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="lg:col-span-1">
        {/* Course Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
        <LazyLoadImage
          src={getImagePath(course.image || "/images/course-placeholder.jpg")}
          alt={course.title}
          effect="blur"
          className="w-full h-auto"
        />
        </div>
        
        {/* Apply Now */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-neutral-200 shadow-sm">
          <h3 className="text-xl font-medium mb-4 text-primary">Ready to Apply?</h3>
          <p className="text-neutral-600 mb-6">
            Take the first step toward your career in gemology and jewelry by applying for this program.
          </p>
          <Link
            to="/contact"
            className="block w-full text-center py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Apply Now
          </Link>
        </div>
        
        {/* Request Info */}
        <div className="bg-primary-light/10 rounded-lg p-6 mb-8 shadow-sm">
          <h3 className="text-xl font-medium mb-4 text-primary">Need More Information?</h3>
          <p className="text-neutral-600 mb-6">
            Have questions about this program? Our admissions team is here to help.
          </p>
          <Link
            to="/contact"
            className="block w-full text-center py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            Request Information
          </Link>
        </div>
        
        {/* Quick Facts */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
          <h3 className="text-xl font-medium mb-4 text-primary border-b border-neutral-200 pb-2">Program Highlights</h3>
          <ul className="space-y-4">
            <li className="flex">
              <FaChevronRight className="text-primary mr-2 mt-1 flex-shrink-0" />
              <span className="text-neutral-700">Hands-on training with industry-standard equipment</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-primary mr-2 mt-1 flex-shrink-0" />
              <span className="text-neutral-700">Experienced faculty with industry connections</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-primary mr-2 mt-1 flex-shrink-0" />
              <span className="text-neutral-700">Internationally recognized certification</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-primary mr-2 mt-1 flex-shrink-0" />
              <span className="text-neutral-700">Career services and placement assistance</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail