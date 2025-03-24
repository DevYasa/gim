import { useEffect } from 'react'

/**
 * Custom hook to dynamically update the document title
 * 
 * @param {string} title - The title to set for the document
 * @param {boolean} withSuffix - Whether to append the site name to the title
 */
const useDocumentTitle = (title, withSuffix = true) => {
  useEffect(() => {
    const siteName = 'GIM'
    
    // Check if title already contains the site name to avoid duplication
    const hasGIM = title.includes('GIM') || title.includes('Gemological Institute of Malaysia')
    
    document.title = withSuffix && !hasGIM ? `${title} | ${siteName}` : title
    
    return () => {
      document.title = 'Gemological Institute of Malaysia (GIM)'
    }
  }, [title, withSuffix])
}

export default useDocumentTitle