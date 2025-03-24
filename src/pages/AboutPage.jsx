import { motion } from 'framer-motion'
import { FaGem, FaHistory, FaUsers, FaGraduationCap, FaGlobeAsia, FaCertificate } from 'react-icons/fa'
import useDocumentTitle from '../hooks/useDocumentTitle'
import SectionTitle from '../components/shared/SectionTitle'
import History from '../components/about/History'
import Team from '../components/about/Team'
import Partners from '../components/about/Partners'
import MissionVision from '../components/about/MissionVision'
import AnimatedCard from '../components/shared/AnimatedCard'

const AboutPage = () => {
  useDocumentTitle('About Us | GIM')
  
  const values = [
    {
      icon: <FaGem className="w-8 h-8 text-primary" />,
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of our educational offerings, from curriculum development to student support.'
    },
    {
      icon: <FaUsers className="w-8 h-8 text-primary" />,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in our operations, teaching, and interactions with students and partners.'
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-primary" />,
      title: 'Innovation',
      description: 'We continuously innovate our teaching methods and curriculum to reflect industry advancements and best practices.'
    },
    {
      icon: <FaGlobeAsia className="w-8 h-8 text-primary" />,
      title: 'Global Perspective',
      description: 'We embrace a global outlook, preparing students for international opportunities in the gemology and jewelry industry.'
    },
    {
      icon: <FaHistory className="w-8 h-8 text-primary" />,
      title: 'Tradition',
      description: 'We honor the rich traditions of gemology and jewelry craftsmanship while embracing modern techniques and technologies.'
    },
    {
      icon: <FaCertificate className="w-8 h-8 text-primary" />,
      title: 'Professionalism',
      description: 'We cultivate professional attitudes and skills in our students, preparing them for successful careers in the industry.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-primary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-white"
            >
              About GIM
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Dedicated to excellence in gemological education since 2008
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Mission and Vision */}
      <MissionVision />
      
      {/* Our History */}
      <History />
      
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Values"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedCard
                key={index}
                className="p-6 text-center hover:border-primary border-2 border-transparent"
                index={index}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light/10 rounded-full mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-2 text-neutral-900">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <Team />
      
      {/* Our Partners */}
      <Partners />
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle
              title="Join the GIM Community"
              centered={true}
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center reveal delay-200">
              <a href="/courses" className="btn btn-primary">
                Explore Our Programs
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage