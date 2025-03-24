import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { footerLinks, contactInfo, socialLinks } from '../../constants/navigation'
import { getImagePath } from '@/utils/imageUtils'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div>
            <div className="mb-4">
              <img 
                src={getImagePath("/images/logo.png")}
                alt="Gemological Institute of Malaysia" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-neutral-400 mb-4">
              The Gemological Institute of Malaysia (GIM) is dedicated to providing world-class education in gemology, jewelry design, and related fields.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  aria-label={social.name}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {social.icon === 'facebook' && <FaFacebook size={20} />}
                  {social.icon === 'twitter' && <FaTwitter size={20} />}
                  {social.icon === 'instagram' && <FaInstagram size={20} />}
                  {social.icon === 'linkedin' && <FaLinkedin size={20} />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isExternal ? (
                    <a 
                      href={link.path} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-neutral-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-medium mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((program) => (
                <li key={program.name}>
                  <Link to={program.path} className="text-neutral-400 hover:text-white transition-colors">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary mr-3 flex-shrink-0" />
                <span className="text-neutral-400">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3 flex-shrink-0" />
                <span className="text-neutral-400">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-950 py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              &copy; {currentYear} Gemological Institute of Malaysia (GIM). All rights reserved.
            </p>
            <div className="mt-2 md:mt-0">
              <span className="text-neutral-500 text-sm">
                A subsidiary of <a href="https://devyasa.github.io/harrico/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">Harrico Gems & Jewels</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer