import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about EduSystem? Here's how you can reach us.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">Phone</h3>
                  <p className="text-gray-600">+91-8058209225</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">Email</h3>
                  <p className="text-gray-600">khushveermalviya26@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900">Location</h3>
                  <p className="text-gray-600">Indore, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 text-center">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Connect With Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors">
                  <Linkedin className="h-5 w-5 text-purple-600" />
                </a>
                <a href="#" className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors">
                  <Github className="h-5 w-5 text-purple-600" />
                </a>
                <a href="#" className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors">
                  <Twitter className="h-5 w-5 text-purple-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55154584471!2d75.78284591148853!3d22.724203630338484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1705841411317!5m2!1sen!2sin"
              className="w-full h-96 rounded-lg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;