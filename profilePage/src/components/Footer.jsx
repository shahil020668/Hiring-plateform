import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 bottom-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">TrustPro is your go-to platform for finding trusted local professionals for all your service needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-blue-400">Home</Link></li>
              <li><Link to="/services" className="text-sm hover:text-blue-400">Services</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-400">Contact Us</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-blue-400">FAQs</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-blue-400">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-blue-400">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <p className="text-sm">Email: example@email.com</p>
            <p className="text-sm">Phone: +911111111111</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-white hover:text-blue-400"><i className="fab fa-facebook"></i></Link>
              <Link to="#" className="text-white hover:text-blue-400"><i className="fab fa-twitter"></i></Link>
              <Link to="#" className="text-white hover:text-blue-400"><i className="fab fa-instagram"></i></Link>
              <Link to="#" className="text-white hover:text-blue-400"><i className="fab fa-linkedin"></i></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TrustPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer