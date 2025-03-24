import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';

const RelatedCourses = ({ courses, currentCourseId }) => {
  // Filter out the current course and take up to 3 related courses
  const relatedCourses = courses
    .filter(course => course.id !== currentCourseId)
    .slice(0, 3);

  if (relatedCourses.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container-custom">
        <SectionTitle 
          title="Related Programs"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {relatedCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover"
            >
              <Link to={`/courses/${course.id}`}>
                <div className="relative overflow-hidden h-40">
                  <img
                    src={course.image || "/images/course-placeholder.jpg"}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-2 text-neutral-900">{course.title}</h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {course.shortDescription}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary text-sm font-medium">View Program</span>
                    <span className="text-neutral-500 text-sm">{course.duration}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedCourses;