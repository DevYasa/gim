import { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }
  
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title reveal">Get in Touch</h2>
          <p className="section-subtitle mx-auto reveal delay-100">
            Have questions about our programs or want to start your application? Reach out to us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="input resize-none"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-md">
                  Your message has been sent successfully. We'll get back to you soon!
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8 reveal delay-200">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-neutral-900">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-neutral-600">
                      123 Gemstone Street, Kuala Lumpur, 50000, Malaysia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
                    <FaPhoneAlt className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-neutral-600">
                      +60 3-1234 5678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-neutral-600">
                      info@gim.edu.my
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-neutral-900">
                Business Hours
              </h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Sunday & Public Holidays</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <h4 className="font-medium mb-2">Apply for Admission</h4>
              <p className="text-neutral-600 mb-4">
                Interested in our programs? Start your application process today or book a campus tour.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button className="btn btn-primary">Apply Now</button>
                <button className="btn btn-outline">Book a Tour</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection