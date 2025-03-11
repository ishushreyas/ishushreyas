import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Menu, X, ArrowRight, Heart,
  Smile, Book, Tv, Code, Cog, Cpu, Wallet,
  MessageSquare, Flower, Send, FileText, Star, Brush, AppWindow, Quote
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://api.ishushreyas.studio/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const journeys = [
    {
      title: "zerosix",
      description: "A Progressive Web App to track shared expenses with friends using React and Golang.",
      tags: ["React", "Golang", "PWA", "WebSockets"],
      link: "https://zerosix.ishushreyas.studio/",
      icon: <Wallet className="w-8 h-8" />
    },
    {
      title: "Money Buisness",
      description: "Prank application with face recognition.",
      tags: ["Python", "React", "pythonanywhere.com"],
      link: "https://github.com/ishushreyas/money-buisness",
      icon: <Flower className="w-8 h-8" />
    },
    {
      title: "Chatbot",
      description: "Developed a chatbot with Gemini's API for interactive conversations.",
      tags: ["Golang", "React", "GeminiAPI"],
      link: "https://github.com/ishushreyas/gemini-project",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      title: "Inspirely",
      description: "Minimalist quote application featuring daily inspiration and collections.",
      tags: ["React", "Tailwind", "Unsplash API"],
      link: "https://inspirely.ishushreyas.studio/",
      icon: <Quote className="w-8 h-8" />
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Navigation - Apple-inspired with frosted glass effect */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-lg font-medium tracking-tight flex items-center gap-2 group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 font-semibold">
                Ishu Shreyas
              </span>
              <Heart size={16} className="text-pink-500" />
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['about', 'journey', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`relative text-gray-700 hover:text-blue-500 transition-colors duration-300 text-sm font-medium capitalize
                    ${activeSection === section ? 'text-blue-500' : ''}
                  `}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left transition-transform duration-300
                    ${activeSection === section ? 'scale-x-100' : 'scale-x-0'}
                  `} />
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-500 transition-transform duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Frosted glass effect */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-xl z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-12">
            {['about', 'journey', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-3xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section with Apple-inspired design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle gradient background with glass morphism */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-28 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-lg text-blue-500 mb-4 flex items-center gap-2 animate-fade-in">
                <Star className="w-5 h-5" /> Welcome
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in animation-delay-200">
                "Following curiosity and crafting with care."
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in animation-delay-400 leading-relaxed">
                A tech enthusiast from Jamshedpur, creating digital experiences with passion and precision.
              </p>
              <a href="#journey" className="inline-flex items-center text-lg text-blue-500 hover:text-purple-600 transition-colors duration-300 group animate-fade-in animation-delay-600 font-medium">
                Explore my work <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Apple-inspired image container with neumorphic effects */}
            <div className="relative animate-fade-in animation-delay-800">
              {/* Neumorphic container */}
              <div className="relative transform hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white rounded-3xl shadow-[15px_15px_30px_rgba(0,0,0,0.1),-15px_-15px_30px_rgba(255,255,255,0.8)] transform rotate-2"></div>
                <div className="relative p-4">
                  <div className="relative rounded-3xl overflow-hidden shadow-lg">
                    <img 
                      className="relative rounded-3xl transition-transform duration-500 w-full hover:scale-105"
                      src="/ishushreyas.jpg"
                      alt="Ishu Shreyas"
                    />
                  </div>
                </div>
                
                {/* Floating badges - Apple style */}
                <div className="absolute -right-6 top-1/4 bg-white/90 backdrop-blur-lg p-3 rounded-full shadow-lg animate-float">
                  <Code className="w-6 h-6 text-blue-500" />
                </div>
                <div className="absolute -left-6 bottom-1/4 bg-white/90 backdrop-blur-lg p-3 rounded-full shadow-lg animate-float animation-delay-2000">
                  <Heart className="w-6 h-6 text-pink-500" />
                </div>
                
                {/* Small decorative elements */}
                <div className="absolute -bottom-8 right-1/3 w-16 h-16 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm animate-pulse"></div>
                <div className="absolute -top-8 left-1/3 w-20 h-20 rounded-full border-4 border-blue-200/50 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Apple-like depth and clarity */}
      <section id="about" className="py-32 relative overflow-hidden">
        {/* Background with subtle Apple-like gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          
          {/* Geometric shapes - Apple style minimal */}
          <div className="absolute top-40 left-1/4 w-12 h-12 border-4 border-blue-200/50 rounded-2xl animate-spin-slow" />
          <div className="absolute bottom-40 right-1/4 w-16 h-16 border-4 border-purple-200/50 rounded-full animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center relative">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3 text-blue-500 animate-fade-in">
                <Smile className="w-8 h-8" /> Nice to meet you
              </h2>
              <p className="text-gray-700 text-lg mb-10 leading-relaxed animate-fade-in animation-delay-200">
                I'm Ishu, a curious soul from the vibrant city of Jamshedpur, India. My journey in tech is fueled by a deep passion 
                for creating meaningful experiences through code. With an eye for detail and a heart for design, I craft digital solutions 
                that make a difference.
              </p>
              <div className="flex items-center space-x-6 animate-fade-in animation-delay-400">
                <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm inline-flex items-center gap-2 hover:scale-105 transform">
                  Let's Chat <Send size={16} />
                </a>
                <a href="/resume.pdf" className="text-gray-700 hover:text-blue-500 transition-colors text-sm inline-flex items-center gap-2 group">
                  View Resume <FileText size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Neumorphic cards - Apple inspired */}
            <div className="grid md:grid-cols-2 gap-8 relative">              
              <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,0.8)] hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-400/50 rounded-full animate-ping opacity-75" />
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-blue-500">
                  <Heart className="w-5 h-5" /> What I Love
                </h3>
                <ul className="text-gray-700 space-y-4">
                  <li className="flex items-center gap-3 group">
                    <div className="p-2 bg-blue-100/50 rounded-full group-hover:bg-blue-200/50 transition-colors duration-300">
                      <Book size={18} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    Reading (The Alchemist!)
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="p-2 bg-purple-100/50 rounded-full group-hover:bg-purple-200/50 transition-colors duration-300">
                      <Tv size={18} className="text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    One Piece adventures
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="p-2 bg-pink-100/50 rounded-full group-hover:bg-pink-200/50 transition-colors duration-300">
                      <Brush size={18} className="text-pink-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    Drawing
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,0.8)] hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-purple-400/50 rounded-full animate-ping opacity-75 animation-delay-200" />
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-blue-500">
                  <Code className="w-5 h-5" /> Tech I Use
                </h3>
                <ul className="text-gray-700 space-y-4">
                  <li className="flex items-center gap-3 group">
                    <div className="p-2 bg-blue-100/50 rounded-full group-hover:bg-blue-200/50 transition-colors duration-300">
                      <AppWindow size={18} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    React & Tailwind
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="p-2 bg-purple-100/50 rounded-full group-hover:bg-purple-200/50 transition-colors duration-300">
                      <Cog size={18} className="text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    Golang
                  </li>
                  <li className="flex items-center gap-3 group">
                    <div className="p-2 bg-pink-100/50 rounded-full group-hover:bg-pink-200/50 transition-colors duration-300">
                      <Cpu size={18} className="text-pink-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    Embedded Systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Apple-inspired clean layout */}
      <section id="journey" className="py-32 relative overflow-hidden">
        {/* Background with subtle Apple-like mesh gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}
        />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-3 text-blue-500">
            <Code className="w-8 h-8" /> Things I've Built
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeys.map((journey, index) => (
              <a
                href={journey.link}
                key={index}
                className="group relative h-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Apple-style card with neumorphic effects */}
                <div className="h-full bg-white/90 backdrop-blur-lg rounded-3xl p-8 shadow-[10px_10px_20px_rgba(0,0,0,0.05),-10px_-10px_20px_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Icon top - Apple style */}
                  <div className="mb-6 relative">
                    <div className="absolute -left-3 -top-3 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg"></div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                      <div className="text-white">
                        {journey.icon}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-500">{journey.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{journey.description}</p>

                    {/* Tags with Apple-style mini-pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {journey.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-500 px-4 py-1 rounded-full text-xs font-medium
                                   group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link indicator - Apple style subtle */}
                    <div className="flex justify-end">
                      <div className="p-2 bg-blue-100/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowRight className="text-blue-500 w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Apple-style form */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Decorative elements - Apple style subtle gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-500 animate-fade-in">
                <Send className="w-8 h-8 inline-block mb-1 mr-2" /> Let's Create Something Amazing
              </h2>
              <p className="text-gray-700 text-lg animate-fade-in animation-delay-200">
                Whether you have an exciting project in mind or just want to say hi, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Form - Apple style with neumorphism */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.9)] relative animate-fade-in animation-delay-400">
              {/* Subtle decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-lg"></div>
              
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-sm text-gray-700 font-medium block mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-xl bg-gray-100/50 border-none focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700 font-medium block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 rounded-xl bg-gray-100/50 border-none focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-gray-700 font-medium block mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 rounded-xl bg-gray-100/50 border-none focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300"
                    placeholder="Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-700 font-medium block mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-5 py-4 rounded-xl bg-gray-100/50 border-none focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group font-medium"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Links - Minimal Apple style */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-sm font-medium">
              Designed with <Heart size={12} className="inline text-pink-500" /> by Ishu Shreyas
            </p>
            
            {/* Social Links - Apple style pill buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/ishushreyas"
                className="text-gray-600 hover:text-blue-500 transition-all duration-300 bg-gray-100 hover:bg-gray-200 p-3 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ishu-shreyas-776b61297"
                className="text-gray-600 hover:text-blue-500 transition-all duration-300 bg-gray-100 hover:bg-gray-200 p-3 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ishushreyas@gmail.com"
                className="text-gray-600 hover:text-blue-500 transition-all duration-300 bg-gray-100 hover:bg-gray-200 p-3 rounded-full"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add custom animations - Apple style smooth animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
    25% { transform: translate(20px, -20px) scale(1.1); opacity: 0.4; }
    50% { transform: translate(0, 20px) scale(1); opacity: 0.3; }
    75% { transform: translate(-20px, -20px) scale(0.9); opacity: 0.4; }
  }

  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes reverse-spin {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animate-spin-slow {
    animation: spin-slow 12s linear infinite;
  }

  .animate-reverse-spin {
    animation: reverse-spin 12s linear infinite;
  }

  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
    opacity: 0;
  }

  .animation-delay-200 {
    animation-delay: 200ms;
  }

  .animation-delay-400 {
    animation-delay: 400ms;
  }

  .animation-delay-600 {
    animation-delay: 600ms;
  }

  .animation-delay-800 {
    animation-delay: 800ms;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);

export default App;
