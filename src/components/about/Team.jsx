import React, { useEffect } from 'react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import OptimizedImage from '../shared/OptimizedImage'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Haris Yusuf',
      role: 'Founder & President',
      image: '/images/team/haris.jpg',
      bio: 'With over 30 years of experience in gemology and a family heritage in the gem trade from Sri Lanka, Dr. Haris founded GIM to share his knowledge and passion for gemstones.',
      linkedin: '#',
      email: 'haris.perera@gim.edu.my'
    },
    {
      id: 2,
      name: 'Prof. Mei Ling Chen',
      role: 'Academic Director',
      image: '/images/team/mei-ling.jpg',
      bio: 'An accomplished jewelry designer and educator, Prof. Chen oversees GIM\'s curriculum development, ensuring it meets international standards and industry needs.',
      linkedin: '#',
      email: 'meiling.chen@gim.edu.my'
    },
    {
      id: 3,
      name: 'Mr. David Wong',
      role: 'Industry Relations Director',
      image: '/images/team/david.jpg',
      bio: 'With extensive connections in the international jewelry industry, Mr. Wong builds partnerships that enhance student opportunities and keeps GIM at the forefront of industry trends.',
      linkedin: '#',
      email: 'david.wong@gim.edu.my'
    },
    {
      id: 4,
      name: 'Ms. Ananya Patel',
      role: 'Lead Gemologist & Instructor',
      image: '/images/team/ananya.jpg',
      bio: 'Ms. Patel brings her expertise from years of work with major gemological laboratories, specializing in colored stone identification and grading.',
      linkedin: '#',
      email: 'ananya.patel@gim.edu.my'
    },
    {
      id: 5,
      name: 'Mr. Liam Carter',
      role: 'Jewelry Design Program Head',
      image: '/images/team/liam.jpg',
      bio: 'A renowned jewelry designer with multiple international awards, Mr. Carter leads our jewelry design program with an emphasis on innovation and craftsmanship.',
      linkedin: '#',
      email: 'liam.carter@gim.edu.my'
    },
    {
      id: 6,
      name: 'Ms. Sarah Tan',
      role: 'Admissions Director',
      image: '/images/team/sarah.jpg',
      bio: 'Ms. Tan guides prospective students through the admissions process, helping them find the best program to match their career goals in the gems and jewelry industry.',
      linkedin: '#',
      email: 'sarah.tan@gim.edu.my'
    }
  ]

  // Force animations to work properly
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.team-section .reveal')
        .forEach(el => {
          // Ensure visible
          el.style.opacity = '1';
          // Add animation class
          setTimeout(() => {
            el.classList.add('active');
          }, 100);
        });
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-neutral-50 team-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title reveal" style={{color: '#1f2937', opacity: 1}}>Our Leadership Team</h2>
          <p className="section-subtitle mx-auto reveal delay-100" style={{color: '#4b5563', opacity: 1}}>
            Meet the experienced professionals guiding GIM to excellence in gemological education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="card overflow-hidden reveal"
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                opacity: 1
              }}
            >
              <div className="h-64 overflow-hidden bg-neutral-200">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={256}
                  aspectRatio="1/1"
                  objectFit="cover"
                  className="object-center"
                  placeholderSrc="/images/placeholder.jpg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1 text-neutral-900" style={{color: '#1f2937'}}>{member.name}</h3>
                <p className="text-primary font-medium mb-3" style={{color: '#0f4c81'}}>{member.role}</p>
                <p className="text-neutral-600 mb-4" style={{color: '#4b5563'}}>
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  <a 
                    href={member.linkedin} 
                    className="text-neutral-500 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-neutral-500 hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team