import { motion } from 'framer-motion'

/**
 * Reusable section title component with optional subtitle
 * 
 * @param {Object} props
 * @param {string} props.title - The main title text
 * @param {string} [props.subtitle] - Optional subtitle text
 * @param {boolean} [props.centered=false] - Whether to center the text
 * @param {string} [props.titleClass] - Additional classes for the title
 * @param {string} [props.subtitleClass] - Additional classes for the subtitle
 * @param {number} [props.delay=0] - Animation delay in seconds
 */
const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false, 
  titleClass = '', 
  subtitleClass = '',
  delay = 0 
}) => {
  const baseAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay 
      } 
    }
  }
  
  const subtitleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: delay + 0.2
      } 
    }
  }
  
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={baseAnimation}
        className={`section-title ${titleClass}`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={subtitleAnimation}
          className={`section-subtitle ${centered ? 'mx-auto' : ''} ${subtitleClass}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle