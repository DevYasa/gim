import { useState, useEffect } from 'react'

/**
 * Custom hook to track scroll position
 * 
 * @returns {object} Object containing scroll position data
 */
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    direction: null
  })

  useEffect(() => {
    let ticking = false

    const updatePosition = () => {
      const { scrollX, scrollY } = window
      
      setScrollPosition(prevPosition => {
        // Determine scroll direction
        const direction = {
          x: prevPosition.x < scrollX ? 'right' : prevPosition.x > scrollX ? 'left' : null,
          y: prevPosition.y < scrollY ? 'down' : prevPosition.y > scrollY ? 'up' : null
        }
        
        return {
          x: scrollX,
          y: scrollY,
          lastX: prevPosition.x,
          lastY: prevPosition.y,
          direction
        }
      })
      
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scrollPosition
}

export default useScrollPosition