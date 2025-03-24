import { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * A reusable animated card component with hover effects
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional classes
 * @param {number} [props.index=0] - Index for staggered animations
 * @param {boolean} [props.hover=true] - Whether to apply hover effects
 * @param {number} [props.delay] - Custom delay override
 * @param {Object} [props.rest] - Additional props to pass to the card div
 */
const AnimatedCard = ({ children, className = '', index = 0, hover = true, delay, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const baseClasses = "card"
  const hoverClasses = hover ? "card-hover" : ""
  const customClasses = className
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: delay !== undefined ? delay : index * 0.1 
      }}
      className={`${baseClasses} ${hoverClasses} ${customClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {typeof children === 'function' ? children(isHovered) : children}
    </motion.div>
  )
}

export default AnimatedCard