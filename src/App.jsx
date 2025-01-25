import React, { useState } from 'react';
import { 
  Copy, School, BookOpen, Users, Calendar, Mail, 
  Smartphone, Computer, Globe, Cloud, Shield, 
  Laptop, TabletSmartphone, Wifi, Download, 
  Clock, Settings, Bell, Github, AlertTriangle
} from 'lucide-react';
import { toast,Toaster } from 'react-hot-toast';
import AiFeatureSection from './AiFeatureSection ';
import SeoHead from './Helmat.jsx';


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [credentials] = useState({ studentId: 'khushveer', password: 'khushveer' });
  const APK_URL = "https://github.com/khushveermalviya/Edu.StudentApp/raw/refs/heads/main/app-debug.apk";

  const handleDownload = () => {
    const loadingToast = toast.loading('Starting download...', {
      duration: 4000,  // Show for longer duration
      style: {
        animation: 'toast-loading 1.5s ease-in-out infinite'
      }
    });
    
    // Start download
    window.location.href = APK_URL;
    
    // Dismiss after 2 seconds if not already dismissed
    setTimeout(() => {
      toast.dismiss(loadingToast);
    }, 2000);
  };

  const handleCopyCredentials = () => {
    const text = `Student ID: ${credentials.studentId}\nPassword: ${credentials.password}`;
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
    window.location.href = 'https://student.edusystem.tech';
  };

  const handleLogins = (e) => {
    e.preventDefault();
    window.location.href = 'https://admin.edusystem.tech';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <SeoHead/>
      <Toaster
    position="top-center"
    toastOptions={{
      className: 'bg-purple-100 text-purple-900 font-medium',
      loading: {
        duration: 3000,
        iconTheme: {
          primary: '#9333ea',
          secondary: '#f5f3ff'
        }
      }
    }}
  />
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <School className="h-8 w-8 text-purple-600" />
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleDownload}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download App
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Demo Login
              </button>
            </div>
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
              Access your institution's management system anywhere, anytime through our multi-platform solution. 
              Available on web, mobile, and desktop.
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
            {[
              { icon: BookOpen, title: "Course Management", desc: "Easily manage courses, assignments, and grades." },
              { icon: Users, title: "Student Portal", desc: "Access learning materials and track progress." },
              { icon: Calendar, title: "Attendance", desc: "Track attendance and generate reports." },
              { icon: School, title: "Administration", desc: "Manage staff, resources, and operations." }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
                <p className="text-sm text-purple-600 mt-4">By: Developer</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Access Section */}
      <div className="mt-20 px-4">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-12">Access Anywhere, Anytime</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { icon: Globe, title: "Web Portal", desc: "Cross-browser compatible" },
            { icon: Smartphone, title: "Mobile App", desc: "Real-time notifications" },
            { icon: Computer, title: "Desktop Software", desc: "Offline capabilities" },
            { icon: TabletSmartphone, title: "Cross-Platform", desc: "Real-time updates" }
          ].map((platform, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <platform.icon className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{platform.title}</h3>
              <p className="text-gray-600">{platform.desc}</p>
              {platform.title === "Mobile App" && (
                <div className="mt-4 flex flex-col gap-2">
                  <button onClick={handleDownload} className="text-purple-600 hover:underline text-sm flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    Download APK
                  </button>
                  <div className="relative inline-block">
                    <button disabled className="bg-gray-100 text-gray-400 px-4 py-1 rounded text-sm">
                      Google Play
                    </button>
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-white px-1.5 py-0.5 rounded-full text-xs">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Download Section */}
      {/* <div className="mt-20 px-4 py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">Download Mobile App</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <div className="flex flex-col items-center space-y-6">
              <div className="bg-purple-100 p-4 rounded-full">
                <Smartphone className="h-12 w-12 text-purple-600" />
              </div>
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center">
                  <span>Current Version:</span>
                  <span className="font-semibold">v1.0.0 (Debug)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>SHA-256 Checksum:</span>
                  <code className="text-purple-600 text-sm">a1b2c3...d4e5f6</code>
                </div>
              </div>
              <button
                onClick={handleDownload}
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Android APK
              </button>
              <div className="text-sm text-gray-500">
                <p>Requires Android 8.0 or higher</p>
                <a
                  href="https://www.virustotal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline flex items-center gap-1 mt-2"
                >
                  <AlertTriangle className="h-4 w-4" />
                  Verify APK Security
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Login Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Demo Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <p className='text-sm text-purple-600'>Copy credentials for student or admin portal</p>
                <div className="space-y-2">
                  <label className="block text-gray-700">Student ID</label>
                  <p className="w-full px-4 py-2 border rounded-lg">khushveer</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700">Password</label>
                  <p className="w-full px-4 py-2 border rounded-lg">khushveer</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={handleLogins}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Admin
                </button>
                <button
                  type="button"
                  onClick={handleCopyCredentials}
                  className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center"
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

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-gray-600" />
              <a
                href="https://github.com/khushveermalviya/Edu.StudentApp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600"
              >
                View Source Code
              </a>
            </div>
            <button
              onClick={handleDownload}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download App
            </button>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-600" />
              <a
                href="mailto:khushveermalviya26@gmail.com"
                className="text-gray-600 hover:text-purple-600"
              >
                Contact Support
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Edu Management System. All rights reserved.</p>
            <p className="mt-2">Developed by Khushveer Malviya</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;