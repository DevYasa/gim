import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheck } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-serif font-semibold mb-6 text-neutral-900 reveal">
        Get in Touch
      </h2>
      
      <div className="space-y-8">
        <div className="flex items-start reveal delay-100">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
            <FaMapMarkerAlt className="text-primary text-xl" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Our Location</h3>
            <p className="text-neutral-600 mb-1">
              123 Gemstone Street, Kuala Lumpur
            </p>
            <p className="text-neutral-600">
              50000, Malaysia
            </p>
          </div>
        </div>
        
        <div className="flex items-start reveal delay-200">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
            <FaPhoneAlt className="text-primary text-xl" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Call Us</h3>
            <p className="text-neutral-600 mb-1">
              Phone: +60 3-1234 5678
            </p>
            <p className="text-neutral-600">
              Fax: +60 3-1234 5679
            </p>
          </div>
        </div>
        
        <div className="flex items-start reveal delay-300">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
            <FaEnvelope className="text-primary text-xl" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Email Us</h3>
            <p className="text-neutral-600 mb-1">
              General Inquiries: info@gim.edu.my
            </p>
            <p className="text-neutral-600">
              Admissions: admissions@gim.edu.my
            </p>
          </div>
        </div>
        
        <div className="flex items-start reveal delay-400">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light/10 flex items-center justify-center mr-4">
            <FaClock className="text-primary text-xl" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Business Hours</h3>
            <p className="text-neutral-600 mb-1">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-neutral-600 mb-1">
              Saturday: 9:00 AM - 1:00 PM
            </p>
            <p className="text-neutral-600">
              Sunday & Public Holidays: Closed
            </p>
          </div>
        </div>
      </div>
      
      {/* Map or Additional Info */}
      <div className="mt-12 p-6 bg-neutral-50 rounded-lg border border-neutral-200 reveal delay-500">
        <h3 className="font-medium text-lg mb-4">Visit Our Campus</h3>
        <p className="text-neutral-600 mb-4">
          We welcome prospective students to visit our campus to tour the facilities, meet with faculty, and learn more about our programs.
        </p>
        <ul className="space-y-2 text-neutral-600">
          <li className="flex items-start">
            <FaCheck className="text-primary mr-2 mt-1 flex-shrink-0" />
            <span>Campus tours available Monday through Friday</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="text-primary mr-2 mt-1 flex-shrink-0" />
            <span>Appointments recommended</span>
          </li>
          <li className="flex items-start">
            <FaCheck className="text-primary mr-2 mt-1 flex-shrink-0" />
            <span>Special open house events held quarterly</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactInfo