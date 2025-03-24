import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
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
        interest: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }
  
  const programOptions = [
    { value: '', label: 'Select a program of interest' },
    { value: 'gemology', label: 'Diploma in Gemology' },
    { value: 'jewelry-design', label: 'Jewelry Design' },
    { value: 'precious-metals', label: 'Precious Metal Arts' },
    { value: 'diamond-grading', label: 'Diamond Grading and Evaluation' },
    { value: 'gemstone-cutting', label: 'Gemstone Cutting and Polishing' },
    { value: 'jewelry-business', label: 'Jewelry Business Management' },
    { value: 'general', label: 'General Inquiry' }
  ]
  
  return (
    <div className="reveal">
      <h2 className="text-2xl font-serif font-semibold mb-6 text-neutral-900">
        Send Us a Message
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
        
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-1">
            Program of Interest *
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="input"
            required
          >
            {programOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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
            Thank you for your message! We will get back to you as soon as possible.
          </div>
        )}
      </form>
    </div>
  )
}

export default ContactForm