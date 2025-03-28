import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Menu, X, ArrowRight, Heart,
  Smile, Book, Tv, Code, Cog, Cpu, Wallet,
  MessageSquare, Flower, Send, FileText, Star, Brush, AppWindow
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

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
      });

      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "zerosix",
      description: "A Progressive Web App to track shared expenses with friends using React and Golang.",
      tags: ["React", "Golang", "PWA", "WebSockets"],
      link: "https://zerosix.ishushreyas.studio/",
      icon: <Wallet className="w-8 h-8 text-gray-700" />
    },
    {
      title: "Money Buisness",
      description: "Prank application with face recognition.",
      tags: ["Python", "React", "pythonanywhere.com"],
      link: "https://github.com/ishushreyas/money-buisness",
      icon: <Flower className="w-8 h-8 text-gray-700" />
    },
    {
      title: "Chatbot",
      description: "Developed a chatbot with Gemini's API for interactive conversations.",
      tags: ["Golang", "React", "GeminiAPI"],
      link: "https://github.com/ishushreyas/gemini-project",
      icon: <MessageSquare className="w-8 h-8 text-gray-700" />
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans antialiased">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-800 tracking-wide">
                Ishu Shreyas
              </span>
            </div>

            <div className="hidden md:flex space-x-6">
              {['about', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-gray-600 hover:text-gray-900 transition-colors duration-300 relative 
                    ${activeSection === section ? 'text-gray-900 font-semibold' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform origin-left" />
                  )}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {['about', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-2xl text-gray-800 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Crafting Digital Experiences <br />with Passion
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A tech enthusiast from Jamshedpur, creating meaningful solutions with heart and soul.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#projects" 
                  className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 inline-flex items-center gap-2"
                >
                  View Projects <ArrowRight size={20} />
                </a>
                <a 
                  href="/resume.pdf" 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
                >
                  Resume
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-4 rounded-2xl shadow-2xl">
                <img 
                  src="/ishushreyas.jpg" 
                  alt="Ishu Shreyas" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 text-lg mb-6">
                I'm Ishu, a passionate developer from Jamshedpur, India. My journey in tech is driven by curiosity and a love for creating innovative solutions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Interests</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Book size={16} /> Reading
                    </li>
                    <li className="flex items-center gap-2">
                      <Tv size={16} /> Anime
                    </li>
                    <li className="flex items-center gap-2">
                      <Brush size={16} /> Drawing
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Code size={16} /> React & Tailwind
                    </li>
                    <li className="flex items-center gap-2">
                      <Cog size={16} /> Golang
                    </li>
                    <li className="flex items-center gap-2">
                      <Cpu size={16} /> Embedded Systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/ishushreyas.jpg" 
                alt="Ishu Shreyas" 
                className="rounded-2xl shadow-lg object-cover w-full h-full"
              />
              <div className="space-y-6">
                <img 
                  src="/ishushreyas.jpg" 
                  alt="Ishu Shreyas" 
                  className="rounded-2xl shadow-lg object-cover w-full"
                />
                <img 
                  src="/ishushreyas.jpg" 
                  alt="Ishu Shreyas" 
                  className="rounded-2xl shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-xl mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center"
                >
                  View Project <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Project Discussion"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-100 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-xl hover:bg-gray-800 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 Ishu Shreyas. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/ishushreyas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ishu-shreyas-776b61297" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ishushreyas@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
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

export default App;
