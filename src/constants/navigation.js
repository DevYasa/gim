/**
 * Navigation items for the header and footer
 */
export const navItems = [
    { 
      name: 'Home', 
      path: '/',
      isExternal: false
    },
    { 
      name: 'Courses', 
      path: '/courses',
      isExternal: false
    },
    { 
      name: 'About', 
      path: '/about',
      isExternal: false
    },
    { 
      name: 'Contact', 
      path: '/contact',
      isExternal: false 
    },
    { 
      name: 'Harrico', 
      path: 'https://devyasa.github.io/harrico/',
      isExternal: true
    }
  ]
  
  /**
   * Footer links organized by section
   */
  export const footerLinks = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'Courses', path: '/courses' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Harrico Gems & Jewels', path: 'https://devyasa.github.io/harrico/', isExternal: true }
    ],
    programs: [
      { name: 'Diploma in Gemology', path: '/courses/diploma-gemology' },
      { name: 'Jewelry Design', path: '/courses/jewelry-design' },
      { name: 'Precious Metal Arts', path: '/courses/precious-metal-arts' },
      { name: 'Diamond Grading', path: '/courses/diamond-grading' },
      { name: 'Jewelry Business', path: '/courses/jewelry-business' }
    ],
    resources: [
      { name: 'Student Handbook', path: '#' },
      { name: 'Career Services', path: '#' },
      { name: 'Financial Aid', path: '#' },
      { name: 'FAQs', path: '#' },
      { name: 'Blog', path: '#' }
    ],
    policies: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Refund Policy', path: '#' },
      { name: 'Accessibility', path: '#' },
      { name: 'Student Rights', path: '#' }
    ]
  }
  
  /**
   * Social media links
   */
  export const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'YouTube', icon: 'youtube', url: '#' }
  ]
  
  /**
   * Contact information
   */
  export const contactInfo = {
    address: '123 Gemstone Street, Kuala Lumpur, 50000, Malaysia',
    phone: '+60 3-1234 5678',
    fax: '+60 3-1234 5679',
    email: 'info@gim.edu.my',
    admissionsEmail: 'admissions@gim.edu.my',
    businessHours: {
      weekdays: '9:00 AM - 6:00 PM',
      saturday: '9:00 AM - 1:00 PM',
      sunday: 'Closed'
    }
  }