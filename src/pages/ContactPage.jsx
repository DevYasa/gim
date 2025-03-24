import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import SectionTitle from '../components/shared/SectionTitle'
import AnimatedCard from '../components/shared/AnimatedCard'

const ContactPage = () => {
  useDocumentTitle('Contact Us | GIM')
  
  const faqItems = [
    {
      question: "What are the admission requirements?",
      answer: "Most programs require a high school diploma or equivalent. Some specialized programs may have additional requirements. International students must also meet English language proficiency requirements."
    },
    {
      question: "Are scholarships available?",
      answer: "Yes, GIM offers merit-based scholarships for outstanding applicants. Payment plans are also available. Please contact our admissions office for details on current financial aid opportunities."
    },
    {
      question: "Do you offer part-time or evening classes?",
      answer: "Several of our programs offer part-time options to accommodate working professionals. Evening classes are available for select courses. Check individual program details for specific scheduling options."
    },
    {
      question: "Is job placement assistance provided?",
      answer: "Yes, GIM offers career services including job placement assistance, industry networking events, and internship opportunities. Our strong industry connections help graduates find positions in their chosen fields."
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
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Have questions about our programs or want to visit our campus? Reach out to us today.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ContactInfo />
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <AnimatedCard
                key={index}
                className="p-6 rounded-lg shadow-sm bg-white"
                index={index}
              >
                <h3 className="text-lg font-medium mb-3 text-neutral-900">{item.question}</h3>
                <p className="text-neutral-600">
                  {item.answer}
                </p>
              </AnimatedCard>
            ))}
          </div>
          
          <div className="text-center mt-10 reveal delay-400">
            <p className="text-neutral-600 mb-4">
              Don't see your question here? Contact us directly and we'll be happy to help.
            </p>
            <a href="mailto:info@gim.edu.my" className="text-primary hover:text-primary-dark font-medium">
              info@gim.edu.my
            </a>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-primary rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-white">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step toward a rewarding career in gemology and jewelry. 
              Apply now to secure your place in our world-class programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses" className="btn bg-white text-primary hover:bg-neutral-100">
                Explore Programs
              </a>
              <a href="#" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Book a Campus Tour
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage