import { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

/**
 * Optimized image component that prevents layout shifts and provides fallbacks
 * 
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for the image
 * @param {number} props.width - Width of the image (required for preventing layout shifts)
 * @param {number} props.height - Height of the image (required for preventing layout shifts)
 * @param {string} props.className - Additional classes for the image
 * @param {string} props.wrapperClassName - Additional classes for the wrapper
 * @param {string} props.placeholderSrc - Low-quality placeholder image
 * @param {string} props.aspectRatio - Aspect ratio of the image (e.g., "16/9", "4/3", "1/1")
 * @param {string} props.objectFit - Object-fit property for the image
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  wrapperClassName = '',
  placeholderSrc = '',
  aspectRatio = '4/3',
  objectFit = 'cover',
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  
  // Predefined default placeholder color
  const placeholderColor = '#e5e7eb' // Light gray
  
  // Reset states if src changes
  useEffect(() => {
    setIsLoaded(false)
    setHasError(false)
  }, [src])
  
  const handleError = () => {
    setHasError(true)
  }
  
  const handleLoaded = () => {
    setIsLoaded(true)
  }
  
  return (
    <div 
        className={`relative overflow-hidden ${wrapperClassName}`}
        style={{ 
          aspectRatio: aspectRatio,
          backgroundColor: placeholderColor,
          width: width ? `${width}px` : '100%',
          maxWidth: '100%', // Add this to ensure it doesn't overflow
          height: height ? `${height}px` : 'auto',
          minHeight: '200px' // Add minimum height to prevent collapse
        }}
      >
      {!hasError ? (
        <LazyLoadImage
          src={src}
          alt={alt}
          effect="blur"
          width={width}
          height={height}
          placeholderSrc={placeholderSrc}
          onError={handleError}
          afterLoad={handleLoaded}
          className={`w-full h-full transition-opacity duration-300 ${className}`}
          style={{ objectFit }}
          threshold={200}
          {...rest}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-neutral-200">
          <span className="text-neutral-500 text-sm">Image unavailable</span>
        </div>
      )}
      
      {/* Show loading indicator before image loads */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 bg-opacity-40">
          <div className="w-10 h-10 border-2 border-primary border-solid rounded-full border-t-transparent animate-spin"></div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage