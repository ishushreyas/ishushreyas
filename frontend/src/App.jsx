import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Menu, X, ArrowRight, Heart,
  Smile, Book, Tv, Globe, Code, Cog, Cpu, Wallet,
  MessageSquare, Flower, Send, FileText, Star, Languages, SmilePlus
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  const journeys = [
    {
      title: "zerosix",
      description: "A Progressive Web App to track shared expenses with friends using React and Golang.",
      tags: ["React", "Golang", "PWA", "WebSockets"],
      link: "https://zerosix.ishushreyas.studio/",
      icon: <Wallet className="w-8 h-8" />
    },
    {
      title: "Chatbot",
      description: "Developed a chatbot with Gemini's API for interactive conversations.",
      tags: ["Golang", "React", "GeminiAPI"],
      link: "https://github.com/ishushreyas/gemini-project",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      title: "Bhagwad Geeta",
      description: "Exploring spirituality through technology, merging ancient wisdom with modern tools.",
      tags: ["Golang", "React", "Postgresql"],
      link: "https://github.com/ishushreyas/bhagwad-geeta",
      icon: <Flower className="w-8 h-8" />
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-medium tracking-tight flex items-center gap-2 group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Ishu Shreyas
              </span>
              <Heart size={16} className="text-pink-500" />
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['about', 'journey', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`relative text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm capitalize
                    ${activeSection === section ? 'text-purple-600' : ''}
                  `}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform origin-left transition-transform duration-200
                    ${activeSection === section ? 'scale-x-100' : 'scale-x-0'}
                  `} />
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-purple-600 transition-transform duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['about', 'journey', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                onClick={() => setIsMenuOpen(false)}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section with Enhanced Graphics */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-lg text-purple-600 mb-4 flex items-center gap-2 animate-fade-in">
                <Star className="w-5 h-5" /> Welcome
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in animation-delay-200">
                "Following the path of curiosity and growth."
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in animation-delay-400">
                A tech enthusiast from Jamshedpur, crafting digital experiences with heart and soul.
              </p>
              <a href="#journey" className="inline-flex items-center text-lg text-purple-600 hover:text-pink-600 transition-colors duration-200 group animate-fade-in animation-delay-600">
                See my work <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
            
            {/* Image with decorative elements */}
            <div className="relative animate-fade-in animation-delay-800">
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-200 rounded-full animate-float" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-200 rounded-full animate-float animation-delay-2000" />
              
              {/* Decorative patterns */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-4 border-purple-200 rounded-full animate-spin-slow" />
              <div className="absolute -bottom-8 -left-8 w-20 h-20 border-4 border-pink-200 rounded-full animate-reverse-spin" />
              
              {/* Main image container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-3xl transform rotate-6 transition-transform duration-200 group-hover:rotate-12" />
                <img 
                  className="relative rounded-3xl shadow-xl transition-transform duration-200 hover:scale-105"
                  src="/ishushreyas.jpg"
                  alt="Ishu Shreyas"
                />
                
                {/* Floating badges */}
                <div className="absolute -right-4 top-1/4 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg animate-float">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute -left-4 bottom-1/4 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg animate-float animation-delay-2000">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* About Section with New Graphics */}
      <section id="about" className="py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          
          {/* Geometric shapes */}
          <div className="absolute top-40 left-1/4 w-12 h-12 border-4 border-purple-200 rounded-xl animate-spin-slow" />
          <div className="absolute bottom-40 right-1/4 w-16 h-16 border-4 border-pink-200 rotate-45 animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center relative">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-3 text-purple-600 animate-fade-in">
                <Smile className="w-8 h-8" /> Nice to meet you
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed animate-fade-in animation-delay-200">
                I'm Ishu, a curious soul from the vibrant city of Jamshedpur, India. My journey in tech is fueled by a deep passion 
                for creating meaningful experiences through code.
              </p>
              <div className="flex items-center space-x-4 animate-fade-in animation-delay-400">
                <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm inline-flex items-center gap-2 hover:scale-105 transform transition-transform duration-200">
                  Let's Chat <Send size={16} />
                </a>
                <a href="/resume.pdf" className="text-gray-600 hover:text-purple-600 transition-colors text-sm inline-flex items-center gap-2 group">
                  View Resume <FileText size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 relative">
              {/* Decorative lines */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-3xl rotate-3" />
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 relative">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-200 rounded-full animate-ping" />
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-purple-600">
                  <Heart className="w-5 h-5" /> What I Love
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2 group">
                    <Book size={16} className="group-hover:scale-110 transition-transform duration-200" /> 
                    Reading (The Alchemist!)
                  </li>
                  <li className="flex items-center gap-2 group">
                    <Tv size={16} className="group-hover:scale-110 transition-transform duration-200" /> 
                    One Piece adventures
                  </li>
                  <li className="flex items-center gap-2 group">
                    <Languages size={16} className="group-hover:scale-110 transition-transform duration-200" /> 
                    Learning Nepali
                  </li>
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 relative">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-200 rounded-full animate-ping animation-delay-200" />
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-purple-600">
                  <Code className="w-5 h-5" /> Tech I Use
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2 group">
                    <SmilePlus size={16} className="group-hover:scale-110 transition-transform duration-200" /> 
                    React & Tailwind
                  </li>
                  <li className="flex items-center gap-2 group">
                    <Cog size={16} className="group-hover:scale-110 transition-transform duration-200" /> 
                    Golang
                  </li>
                  <li className="flex items-center gap-2 group">
                    <Cpu size={16} className="group-hover:scale-110 transition-transform duration-200" /> 
                    Embedded Systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Journey Section */}
      <section id="journey" className="py-32 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03]"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}
        />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 flex items-center gap-3 text-purple-600">
            <Code className="w-8 h-8" /> Things I've Built
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {journeys.map((journey, index) => (
              <a
                href={journey.link}
                key={index}
                className="group relative"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Card background with animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Main content container */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Floating icon */}
                  <div className="absolute -top-6 left-6 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                    <div className="text-white transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                      {journey.icon}
                    </div>
                  </div>

                  <div className="pt-8">
                    <h3 className="text-xl font-medium mb-4 text-purple-600">{journey.title}</h3>
                    <p className="text-gray-600 mb-6">{journey.description}</p>

                    {/* Tags with animated background */}
                    <div className="flex flex-wrap gap-2">
                      {journey.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 px-4 py-1 rounded-full text-sm
                                   group-hover:from-purple-200 group-hover:to-pink-200 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link indicator */}
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="text-purple-600 w-6 h-6 animate-bounce" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          
          {/* Geometric decorations */}
          <div className="absolute top-20 left-20 w-16 h-16 border-4 border-purple-200 rounded-full animate-float" />
          <div className="absolute bottom-20 right-20 w-12 h-12 border-4 border-pink-200 rotate-45 animate-float animation-delay-2000" />
          
          {/* Mail icon decoration */}
          <div className="absolute top-1/3 right-10 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg animate-float">
            <Mail className="w-6 h-6 text-purple-600" />
          </div>
          
          {/* Code icon decoration */}
          <div className="absolute bottom-1/3 left-10 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-lg animate-float animation-delay-2000">
            <Code className="w-6 h-6 text-pink-600" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-purple-600 animate-fade-in">
                <Send className="w-8 h-8 inline-block mb-2" /> Let's Create Something Amazing
              </h2>
              <p className="text-gray-600 text-lg animate-fade-in animation-delay-200">
                Whether you have an exciting project in mind or just want to say hi, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg relative animate-fade-in animation-delay-400">
              {/* Decorative elements for form */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-200 rounded-full animate-ping" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-200 rounded-full animate-ping animation-delay-200" />
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-600 font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-600 font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 font-medium">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-purple-100 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-8 border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              Made with <Heart size={12} className="inline text-pink-500" /> by Ishu Shreyas
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/ishushreyas"
                className="text-gray-500 hover:text-purple-600 transition-colors duration-200 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ishu-shreyas-776b61297"
                className="text-gray-500 hover:text-purple-600 transition-colors duration-200 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ishushreyas@gmail.com"
                className="text-gray-500 hover:text-purple-600 transition-colors duration-200 transform hover:scale-110"
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

// Add custom animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(20px, -20px) scale(1.1); }
    50% { transform: translate(0, 20px) scale(1); }
    75% { transform: translate(-20px, -20px) scale(0.9); }
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
