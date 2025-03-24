import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { FaGem, FaUserGraduate, FaBriefcase, FaCertificate } from 'react-icons/fa'

const AboutSection = () => {
  const features = [
    {
      icon: <FaGem className="w-8 h-8 text-primary" />,
      title: 'Expert Knowledge',
      description: 'Learn from industry professionals with decades of experience in gemology and jewelry design.'
    },
    {
      icon: <FaUserGraduate className="w-8 h-8 text-primary" />,
      title: 'Industry Recognition',
      description: 'Our programs are recognized by leading organizations in the gemology and jewelry industry.'
    },
    {
      icon: <FaBriefcase className="w-8 h-8 text-primary" />,
      title: 'Career Opportunities',
      description: 'Unlock diverse career paths in gemstone trading, jewelry design, and appraisal.'
    },
    {
      icon: <FaCertificate className="w-8 h-8 text-primary" />,
      title: 'Specialized Certifications',
      description: 'Earn specialized certifications to distinguish yourself in the competitive job market.'
    }
  ]

  return (
    <section className="section bg-white about-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title reveal">About GIM</h2>
          <p className="section-subtitle mx-auto reveal delay-100">
            The Gemological Institute of Malaysia (GIM) is dedicated to excellence in gemological education
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="reveal img-hover-zoom rounded-lg overflow-hidden shadow-xl">
            {/* Image placeholder while loading */}
            <div className="relative bg-neutral-200 w-full aspect-[4/3]">
              <LazyLoadImage
                src="/images/home/about-bg.jpg"
                alt="About GIM"
                effect="blur"
                width={600}  // Define width
                height={450} // Define height
                placeholderSrc="/images/placeholder.jpg" // Optional low-res placeholder
                className="w-full h-full object-cover"
                wrapperClassName="w-full h-full"
                threshold={200} // Start loading when 200px away
              />
            </div>
          </div>

          {/* Text Column */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-neutral-900 reveal">
              Excellence in Gemological Education
            </h3>
            <p className="text-neutral-700 mb-6 reveal delay-100">
              Established in 2008, Gemological Institute of Malaysia (GIM) has grown into a formidable entity in gemological education. Our institution combines decades of family generation-based experience in gems and jewelry from Sri Lanka with modern educational approaches.
            </p>
            <p className="text-neutral-700 mb-6 reveal delay-200">
              At GIM, we pride ourselves on the quality of our education, the expertise of our faculty, and our commitment to preparing students for successful careers in the gemstone and jewelry industry.
            </p>
            <Link to="/about" className="btn btn-primary reveal delay-300">
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card p-6 text-center hover:border-primary border-2 border-transparent transition-all reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light/10 rounded-full mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-neutral-900">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection