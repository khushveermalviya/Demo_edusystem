import React, { useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Twitter,
  Code,
  Database,
  Server
} from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Initialize particle effect
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
    script.async = true;

    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 160, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            out_mode: 'out'
          }
        }
      });
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen relative bg-slate-900">
      <div id="particles-js" className="absolute inset-0" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 shadow-xl">
          
          {/* Profile Section */}
          <div className="text-center mb-8">
            <img 
              src="/api/placeholder/150/150" 
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
            />
            <h1 className="text-3xl font-bold text-white mb-2">John Doe</h1>
            <p className="text-xl text-blue-400 mb-4">Full Stack Developer</p>
          </div>

          {/* About Section */}
          <div className="mb-8 text-gray-300">
            <p className="text-lg leading-relaxed">
              Passionate full-stack developer with 5+ years of experience in building scalable web applications.
              Specialized in React, Node.js, and cloud technologies. Always eager to learn and tackle new challenges.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Code size={20} className="text-blue-400" />
                <span>Frontend Development</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Server size={20} className="text-blue-400" />
                <span>Backend Development</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Database size={20} className="text-blue-400" />
                <span>Database Design</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="mailto:john@example.com" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                <Mail size={24} />
                <span>john@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                <Phone size={24} />
                <span>+123 456 7890</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;