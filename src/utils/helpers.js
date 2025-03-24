/**
 * Format a date string to a readable format
 * 
 * @param {string|Date} dateStr - The date to format
 * @param {object} options - Options for Intl.DateTimeFormat
 * @returns {string} Formatted date string
 */
export const formatDate = (dateStr, options = {}) => {
    const date = new Date(dateStr)
    
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options
    }
    
    return new Intl.DateTimeFormat('en-MY', defaultOptions).format(date)
  }
  
  /**
   * Truncate text to specified length with ellipsis
   * 
   * @param {string} text - Text to truncate
   * @param {number} maxLength - Maximum length before truncation
   * @returns {string} Truncated text
   */
  export const truncateText = (text, maxLength = 150) => {
    if (!text || text.length <= maxLength) return text
    
    return text.slice(0, maxLength) + '...'
  }
  
  /**
   * Format currency with Malaysian Ringgit symbol
   * 
   * @param {number|string} amount - The amount to format
   * @returns {string} Formatted currency string
   */
  export const formatCurrency = (amount) => {
    const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount
    
    return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency: 'MYR',
      minimumFractionDigits: 0
    }).format(numAmount)
  }
  
  /**
   * Generate slug from text
   * 
   * @param {string} text - Text to convert to slug
   * @returns {string} URL-friendly slug
   */
  export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
  }
  
  /**
   * Decode slug back to readable text
   * 
   * @param {string} slug - Slug to decode
   * @returns {string} Readable text
   */
  export const deslugify = (slug) => {
    return slug
      .replace(/-and-/g, ' & ')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase())
  }
  
  /**
   * Filter and sort array of objects based on criteria
   * 
   * @param {Array} items - Array of objects to filter and sort
   * @param {object} filters - Filter criteria
   * @param {string} sortBy - Property to sort by
   * @param {boolean} ascending - Sort direction
   * @returns {Array} Filtered and sorted array
   */
  export const filterAndSortItems = (items, filters = {}, sortBy = null, ascending = true) => {
    if (!items || !Array.isArray(items)) return []
    
    // Apply filters
    let filteredItems = [...items]
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== 'all') {
        filteredItems = filteredItems.filter(item => {
          // Handle array properties (e.g., tags, categories)
          if (Array.isArray(item[key])) {
            return item[key].includes(value)
          }
          
          // Handle string comparison
          return item[key] === value
        })
      }
    })
    
    // Apply sorting
    if (sortBy) {
      filteredItems.sort((a, b) => {
        const valueA = a[sortBy]
        const valueB = b[sortBy]
        
        // Handle string comparison
        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return ascending
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA)
        }
        
        // Handle numeric comparison
        return ascending
          ? valueA - valueB
          : valueB - valueA
      })
    }
    
    return filteredItems
  }
  
  /**
   * Debounce function to limit function calls
   * 
   * @param {function} func - Function to debounce
   * @param {number} wait - Wait time in milliseconds
   * @returns {function} Debounced function
   */
  export const debounce = (func, wait = 300) => {
    let timeout
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  /**
   * Extract YouTube video ID from URL
   * 
   * @param {string} url - YouTube URL
   * @returns {string|null} YouTube video ID or null if invalid
   */
  export const getYoutubeId = (url) => {
    if (!url) return null
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    
    return (match && match[2].length === 11)
      ? match[2]
      : null
  }