import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Button component that can be rendered as a button or Link
 * 
 * @param {object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, outline, text)
 * @param {string} [props.size='md'] - Button size (sm, md, lg)
 * @param {boolean} [props.fullWidth=false] - Whether the button should take full width
 * @param {string} [props.to] - If provided, renders as Link to this path
 * @param {string} [props.href] - If provided, renders as anchor tag with this href
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {boolean} [props.isLoading=false] - Whether the button is in loading state
 * @param {React.ReactNode} props.children - Button content
 * @param {object} props.rest - Additional props to pass to the button element
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  to,
  href,
  disabled = false,
  isLoading = false,
  children,
  ...rest
}) => {
  // Define button classes based on variant and size
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md'
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-2 focus:ring-primary/50',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-2 focus:ring-secondary/50',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary/50',
    text: 'text-primary hover:bg-primary/10 focus:ring-2 focus:ring-primary/50'
  }
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-5 py-2',
    lg: 'text-lg px-6 py-3'
  }
  
  const classes = `
    ${baseClasses}
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size] || sizeClasses.md}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || isLoading ? 'opacity-70 cursor-not-allowed' : ''}
  `
  
  // Define animation variants
  const buttonAnimation = {
    tap: { scale: 0.98 }
  }
  
  // Render as Link if 'to' prop is provided
  if (to && !disabled) {
    return (
      <motion.div whileTap="tap" variants={buttonAnimation}>
        <Link to={to} className={classes} {...rest}>
          {isLoading ? (
            <>
              <span className="mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Loading...
            </>
          ) : (
            children
          )}
        </Link>
      </motion.div>
    )
  }
  
  // Render as anchor if 'href' prop is provided
  if (href && !disabled) {
    return (
      <motion.div whileTap="tap" variants={buttonAnimation}>
        <a href={href} className={classes} {...rest}>
          {isLoading ? (
            <>
              <span className="mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Loading...
            </>
          ) : (
            children
          )}
        </a>
      </motion.div>
    )
  }
  
  // Otherwise render as button
  return (
    <motion.button
      whileTap={!disabled && !isLoading ? "tap" : undefined}
      variants={buttonAnimation}
      disabled={disabled || isLoading}
      className={classes}
      {...rest}
    >
      {isLoading ? (
        <>
          <span className="mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  )
}

export default Button