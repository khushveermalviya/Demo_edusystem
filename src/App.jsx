import React, { useState } from 'react';
import { 
  Copy, School, BookOpen, Users, Calendar, Mail, 
  Smartphone, Computer, Globe, Cloud, Shield, 
  Laptop, TabletSmartphone, Wifi, Download, 
  Clock, Settings, Bell
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import AiFeatureSection from './AiFeatureSection ';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [credentials, setCredentials] = useState({ studentId: '', password: '' });
  
  // Demo credentials
  const demoCredentials = {
    studentId: "khushveer",
    password: "khushveer"
  };

  const handleCopyCredentials = () => {
    const text = `Student ID: ${demoCredentials.studentId}\nPassword: ${demoCredentials.password}`;
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Credentials copied!');
        setTimeout(() => {
          window.location.href = 'https://student.edusystem.tech';
        }, 1500);
      })
      .catch(() => toast.error('Failed to copy'));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    window.location.href = 'https://student.edusystem.tech';
  };
  const handleLogins = (e) => {
    e.preventDefault();
    // Add your login logic here
    window.location.href = 'https://admin.edusystem.tech';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <School className="h-8 w-8 text-purple-600" />
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-purple-600 hover:text-purple-800">Home</a>
                <a href="#" className="text-gray-600 hover:text-purple-600">About</a>
                <a href="#" className="text-gray-600 hover:text-purple-600">Features</a>
                <a href="#" className="text-gray-600 hover:text-purple-600">Contact</a>
              </div>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
            >
              Demo Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-900">
              School Management System
            </h1>
            <p className="text-lg text-gray-600">
              Access your institution's management system anywhere, anytime through our multi-platform solution. Available on web, mobile, and desktop.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Try Demo
              </button>
              <button
  className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300"
  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
>
  Contact
</button>
            </div>
          </div>

          {/* Core Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <BookOpen className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Course Management</h3>
              <p className="text-gray-600">Easily manage courses, assignments, and grades.</p>
              <p className="text-sm text-purple-600 mt-4">By: Developer</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Users className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Portal</h3>
              <p className="text-gray-600">Access learning materials and track progress.</p>
              <p className="text-sm text-purple-600 mt-4">By: Developer</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Calendar className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Attendance</h3>
              <p className="text-gray-600">Track attendance and generate reports.</p>
              <p className="text-sm text-purple-600 mt-4">By: Developer</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <School className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Administration</h3>
              <p className="text-gray-600">Manage staff, resources, and operations.</p>
              <p className="text-sm text-purple-600 mt-4">By: Developer</p>
            </div>
          </div>
        </div>
        </div>

        {/* Platform Access Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">Access Anywhere, Anytime</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Globe className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Portal</h3>
              <p className="text-gray-600">Access anywhere through our responsive web interface.</p>
              <p className="text-sm text-purple-600 mt-4">Cross-browser compatible</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Smartphone className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
              <p className="text-gray-600">iOS and Android apps for on-the-go access.</p>
              <p className="text-sm text-purple-600 mt-4">Real-time notifications</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Computer className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Desktop Software</h3>
              <p className="text-gray-600">Windows & Mac applications for better performance.</p>
              <p className="text-sm text-purple-600 mt-4">Offline capabilities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <TabletSmartphone className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
              <p className="text-gray-600">Seamless sync across all your devices.</p>
              <p className="text-sm text-purple-600 mt-4">Real-time updates</p>
            </div>
          </div>
        </div>


      {/* Login Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div className="bg-white rounded-xl p-8 max-w-md w-full animate-fade-in">
    <h2 className="text-2xl font-bold mb-6">Demo Login</h2>
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <p className='text-sm text-purple-600 mt-4'>Copy this to login on student portal as well admin portal</p>
        <label className="block text-gray-700 mb-2">Student ID</label>
        <p className="w-full px-4 py-2 border rounded-lg">khushveer</p>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Password</label>
        <p className="w-full px-4 py-2 border rounded-lg">khushveer</p>
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
        >
          Student
        </button>
        <button
          type="button"
          onClick={handleLogins}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
        >
          Admin
        </button>
        <button
          type="button"
          onClick={handleCopyCredentials}
          className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors duration-300 flex items-center justify-center"
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </button>
      </div>
      <button
        type="button"
        onClick={() => setShowModal(false)}
        className="w-full text-gray-600 py-2 hover:text-gray-800"
      >
        Cancel
      </button>
    </form>
  </div>
</div>
)}
 <AiFeatureSection />

  <footer className="bg-grey-100 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-l font-serif">
              Developed by Khushveer Malviya. Contact: +91-8058209225
            </p>
            <a
              href="mailto:khushveer@example.com"
              className="flex items-center text-purple-600 font-serif hover:text-purple-800 text-l"
            >
              <Mail className="h-4 w-4 mr-2" />
            khushveermalviya26@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;