/**
 * All available courses
 */
export const courses = [
    {
      id: 'diploma-gemology',
      title: 'Diploma in Gemology',
      shortDescription: 'Learn identification, grading, and valuation of gemstones through comprehensive studies and practical training.',
      fullDescription: `The Diploma in Gemology provides a comprehensive education in all aspects of gemology, 
      from gem identification and grading to market valuation. Students learn to use specialized equipment 
      and develop practical skills through hands-on experience with hundreds of gemstone specimens. 
      This program prepares graduates for careers in gemstone trading, jewelry retail, appraisal, 
      and gemological laboratories.`,
      image: '/images/courses/gemology.jpg',
      duration: '12 months',
      schedule: 'Full-time / Part-time available',
      startDates: 'January, May, September',
      tuition: 'RM 45,000',
      prerequisites: 'High school diploma or equivalent',
      featured: true,
      modules: [
        'Introduction to Gemology',
        'Physical and Optical Properties of Gemstones',
        'Gemstone Identification Techniques',
        'Diamond Grading and Evaluation',
        'Colored Stone Grading and Evaluation',
        'Gem Treatments and Synthetics',
        'Market Valuation and Appraisal',
        'Practical Laboratory Work',
        'Field Studies and Industry Visits'
      ],
      careers: [
        'Gemologist',
        'Appraiser',
        'Gem Trader',
        'Laboratory Technician',
        'Jewelry Buyer',
        'Auction House Specialist'
      ],
      category: 'gemology'
    },
    {
      id: 'jewelry-design',
      title: 'Jewelry Design',
      shortDescription: 'Master the art of jewelry design with courses covering traditional techniques, CAD, and manufacturing.',
      fullDescription: `The Jewelry Design program combines artistic creativity with technical expertise 
      to prepare students for careers in the jewelry industry. Students learn traditional design methods, 
      computer-aided design (CAD), rendering techniques, and manufacturing processes. The curriculum 
      emphasizes developing a personal design style while understanding commercial requirements and 
      market trends. Graduates are prepared to work as jewelry designers, CAD specialists, or to create their own collections.`,
      image: '/images/courses/jewelry-design.jpg',
      duration: '10 months',
      schedule: 'Full-time',
      startDates: 'February, June, October',
      tuition: 'RM 38,000',
      prerequisites: 'High school diploma or equivalent. Portfolio submission recommended.',
      featured: true,
      modules: [
        'Design Principles and Jewelry History',
        'Technical Drawing and Rendering',
        'Computer-Aided Design (CAD)',
        'Materials and Manufacturing Techniques',
        'Gemstone Setting Design',
        'Collection Development',
        'Business Practices for Designers',
        'Final Collection Project'
      ],
      careers: [
        'Jewelry Designer',
        'CAD Designer',
        'Product Developer',
        'Design Consultant',
        'Custom Design Specialist',
        'Entrepreneur'
      ],
      category: 'design'
    },
    {
      id: 'precious-metal-arts',
      title: 'Precious Metal Arts',
      shortDescription: 'Develop metalworking skills in gold, silver, and platinum with an emphasis on craftsmanship and design.',
      fullDescription: `The Precious Metal Arts program focuses on the technical skills required to work with 
      precious metals including gold, silver, and platinum. Students learn traditional metalsmithing techniques, 
      contemporary fabrication methods, stone setting, and finishing processes. The program combines theory 
      with extensive hands-on practice to develop proficiency in creating fine jewelry and other metal objects. 
      Graduates are prepared for careers as bench jewelers, custom fabricators, or studio artists.`,
      image: '/images/courses/precious-metals.jpg',
      duration: '8 months',
      schedule: 'Full-time',
      startDates: 'March, July, November',
      tuition: 'RM 32,000',
      prerequisites: 'High school diploma or equivalent',
      featured: true,
      modules: [
        'Metalsmithing Fundamentals',
        'Soldering and Assembly Techniques',
        'Casting and Mold Making',
        'Stone Setting Techniques',
        'Surface Treatments and Finishing',
        'Tool Making and Maintenance',
        'Advanced Fabrication Methods',
        'Final Capstone Project'
      ],
      careers: [
        'Bench Jeweler',
        'Metal Artist',
        'Jewelry Repairer',
        'Custom Fabricator',
        'Production Manager',
        'Studio Artist'
      ],
      category: 'craftsmanship'
    },
    {
      id: 'diamond-grading',
      title: 'Diamond Grading and Evaluation',
      shortDescription: 'Specialize in diamond assessment, grading, and valuation with this focused certification program.',
      fullDescription: `The Diamond Grading and Evaluation program provides specialized training in the 
      assessment and valuation of diamonds. Students learn the 4Cs (cut, color, clarity, and carat weight) 
      and how to use industry-standard grading equipment and methodologies. The curriculum includes 
      identification of natural, treated, and synthetic diamonds, as well as market valuation and pricing 
      strategies. This certificate program is ideal for those seeking focused expertise in diamonds.`,
      image: '/images/courses/diamond-grading.jpg',
      duration: '3 months',
      schedule: 'Full-time / Part-time available',
      startDates: 'January, April, July, October',
      tuition: 'RM 18,000',
      prerequisites: 'High school diploma or equivalent',
      featured: false,
      modules: [
        'Diamond Formation and Properties',
        'The 4Cs Grading System',
        'Using Grading Equipment',
        'Clarity Grading',
        'Color Grading',
        'Cut Analysis and Proportion',
        'Treatments and Synthetics',
        'Market Valuation',
        'Laboratory Reports and Documentation'
      ],
      careers: [
        'Diamond Grader',
        'Diamond Buyer',
        'Jewelry Appraiser',
        'Laboratory Specialist',
        'Diamond Consultant',
        'Quality Control Specialist'
      ],
      category: 'gemology'
    },
    {
      id: 'gemstone-cutting',
      title: 'Gemstone Cutting and Polishing',
      shortDescription: 'Learn the art and science of lapidary, transforming rough gemstones into faceted or cabochon gems.',
      fullDescription: `The Gemstone Cutting and Polishing program teaches the lapidary arts, combining 
      technical skill with artistic judgment to transform rough gem materials into finished gemstones. 
      Students learn to evaluate rough material, plan cuts for optimal yield and beauty, and execute 
      precise faceting or cabochon cutting. The curriculum covers traditional and modern cutting techniques 
      for a variety of gemstone materials. Graduates are prepared to work as lapidaries, custom cutters, 
      or to enhance their skills as gemologists or jewelry designers.`,
      image: '/images/courses/gemstone-cutting.jpg',
      duration: '6 months',
      schedule: 'Full-time / Part-time available',
      startDates: 'March, September',
      tuition: 'RM 25,000',
      prerequisites: 'High school diploma or equivalent',
      featured: false,
      modules: [
        'Rough Evaluation and Planning',
        'Equipment Operation and Maintenance',
        'Faceting Fundamentals',
        'Cabochon Cutting Techniques',
        'Advanced Faceting Designs',
        'Specialty Cuts and Fantasy Cutting',
        'Material-Specific Techniques',
        'Finishing and Polishing Methods',
        'Final Cutting Projects'
      ],
      careers: [
        'Lapidary',
        'Custom Gem Cutter',
        'Production Cutter',
        'Specialty Cut Designer',
        'Rough Dealer',
        'Restoration Specialist'
      ],
      category: 'craftsmanship'
    },
    {
      id: 'jewelry-business',
      title: 'Jewelry Business Management',
      shortDescription: 'Develop the business acumen needed to succeed in the jewelry industry, from retail to manufacturing.',
      fullDescription: `The Jewelry Business Management program prepares students for the commercial aspects 
      of the jewelry industry. The curriculum covers retail operations, inventory management, marketing, 
      customer relations, pricing strategies, and industry-specific legal and ethical considerations. 
      Students learn about supply chain management, digital sales channels, and international trade practices. 
      This program is ideal for those planning to manage or own jewelry businesses, or for designers and 
      craftspeople seeking to enhance their business knowledge.`,
      image: '/images/courses/jewelry-business.jpeg',
      duration: '4 months',
      schedule: 'Part-time',
      startDates: 'February, August',
      tuition: 'RM 15,000',
      prerequisites: 'High school diploma or equivalent. Business experience recommended.',
      featured: false,
      modules: [
        'Jewelry Market Analysis',
        'Retail Operations Management',
        'Inventory and Merchandising',
        'Pricing Strategies and Profitability',
        'Marketing and Brand Development',
        'Digital Sales Channels',
        'Customer Relations and Sales Techniques',
        'Legal and Ethical Considerations',
        'Business Plan Development'
      ],
      careers: [
        'Retail Manager',
        'Business Owner',
        'Sales Director',
        'Product Manager',
        'Marketing Specialist',
        'Operations Manager'
      ],
      category: 'business'
    }
  ]
  
  /**
   * Course categories for filtering
   */
  export const courseCategories = [
    { id: 'all', name: 'All Programs' },
    { id: 'gemology', name: 'Gemology' },
    { id: 'design', name: 'Design' },
    { id: 'craftsmanship', name: 'Craftsmanship' },
    { id: 'business', name: 'Business' }
  ]
  
  /**
   * Testimonials from students and industry professionals
   */
  export const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Graduate, Diploma in Gemology',
      image: '/images/testimonials/testimonial-1.jpg',
      quote: 'My experience at GIM was transformative. The hands-on learning with real gemstones and the expertise of the instructors prepared me well for my career as a gemologist.'
    },
    {
      id: 2,
      name: 'Mohammed Al-Farsi',
      role: 'Graduate, Jewelry Design',
      image: '/images/testimonials/testimonial-2.jpg',
      quote: 'The jewelry design program at GIM combined artistic creativity with technical precision. I developed my personal style while learning commercial viability.'
    },
    {
      id: 3,
      name: 'Jennifer Tan',
      role: 'Industry Partner, Luxury Jewelers Association',
      image: '/images/testimonials/testimonial-3.jpg',
      quote: 'GIM graduates stand out for their comprehensive knowledge and practical skills. They are ready to contribute immediately in our industry.'
    },
    {
      id: 4,
      name: 'David Wong',
      role: 'Graduate, Precious Metal Arts',
      image: '/images/testimonials/testimonial-4.jpg',
      quote: 'The facilities and instruction at GIM are world-class. I gained the technical skills and confidence to launch my own jewelry line.'
    }
  ]