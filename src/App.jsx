import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Calendar, Bell, CreditCard, FileText, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      title: "Smart Dashboard",
      description: "Modern analytics and reporting tools",
      image: "/api/placeholder/1200/600"
    },
    {
      title: "Student Portal",
      description: "Engaging learning experience",
      image: "/api/placeholder/1200/600"
    },
    {
      title: "Parent Dashboard",
      description: "Stay connected with your child's progress",
      image: "/api/placeholder/1200/600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "School Principal",
      content: "EduSystem has transformed how we manage our school. The efficiency gains are remarkable.",
      rating: 5
    },
    {
      name: "Mark Williams",
      role: "Teacher",
      content: "The interface is intuitive and makes daily tasks a breeze. Best system I've used.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Parent",
      content: "I can easily track my children's progress and communicate with teachers. Wonderful!",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Academic Management', description: 'Comprehensive grade tracking and curriculum management' },
    { icon: <Users className="w-6 h-6" />, title: 'User Management', description: 'Separate portals for administrators, teachers, students, and parents' },
    { icon: <Calendar className="w-6 h-6" />, title: 'Scheduling', description: 'Advanced class scheduling and calendar management' },
    { icon: <Bell className="w-6 h-6" />, title: 'Communication', description: 'Integrated messaging and notification system' },
    { icon: <CreditCard className="w-6 h-6" />, title: 'Fee Management', description: 'Streamlined fee collection and tracking' },
    { icon: <FileText className="w-6 h-6" />, title: 'Reports', description: 'Detailed analytics and report generation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Carousel */}
      <header className="relative h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative h-full">
          {carouselImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center text-white">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </header>

      {/* Features Grid with Hover Effects */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Features for Modern Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/20 transition"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.content}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-blue-200">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1000+", label: "Schools" },
              { value: "50,000+", label: "Teachers" },
              { value: "500,000+", label: "Students" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="relative overflow-hidden bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your School?</h2>
          <p className="text-xl mb-8">Join thousands of schools already using EduSystem</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-overlay animate-float"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full mix-blend-overlay animate-float-delayed"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduSystem</h3>
              <p className="text-gray-400">Transforming education management for the digital age</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Academic Management</li>
                <li>User Management</li>
                <li>Scheduling</li>
                <li>Reports</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Blog</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>sales@edusystem.com</li>
                <li>support@edusystem.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;