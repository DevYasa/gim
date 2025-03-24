// src/utils/imageUtils.js
export const getImagePath = (path) => {
  // Check if the path already includes base URL
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  // Add BASE_URL to path
  return `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;
};