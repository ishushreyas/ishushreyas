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

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 flex items-center gap-3 text-purple-600">
                <Smile className="w-8 h-8" /> Nice to meet you
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                I'm Ishu, a curious soul from the vibrant city of Jamshedpur, India. My journey in tech is fueled by a deep passion 
                for creating meaningful experiences through code. When I'm not coding, you'll find me lost in the pages of a good book, 
                exploring new trails, or diving deep into the world of One Piece!
              </p>
              <div className="flex items-center space-x-4">
                <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity text-sm inline-flex items-center gap-2">
                  Let's Chat <Send size={16} />
                </a>
                <a href="/resume.pdf" className="text-gray-600 hover:text-purple-600 transition-colors text-sm inline-flex items-center gap-2">
                  View Resume <FileText size={16} />
                </a>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-purple-600">
                  <Heart className="w-5 h-5" /> What I Love
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2"><Book size={16} /> Reading (The Alchemist!)</li>
                  <li className="flex items-center gap-2"><Tv size={16} /> One Piece adventures</li>
                  <li className="flex items-center gap-2"><Languages size={16} /> Learning Nepali</li>
                </ul>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-purple-600">
                  <Code className="w-5 h-5" /> Tech I Use
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2"><SmilePlus size={16} /> React & Tailwind</li>
                  <li className="flex items-center gap-2"><Cog size={16} /> Golang</li>
                  <li className="flex items-center gap-2"><Cpu size={16} /> Embedded Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-pink-100/20 to-blue-100/30" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />

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
                <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl
                              shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)]
                              group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]
                              transition-all duration-300" />

                <div className="relative p-8">
                  <div className="aspect-video rounded-2xl mb-6 overflow-hidden group-hover:transform group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/90 to-pink-500/90
                                  flex flex-col justify-center items-center p-6
                                  relative">
                      <div className="absolute inset-0 opacity-10 mix-blend-overlay"
                           style={{
                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                           }} />

                      <div className="text-white mb-2 relative z-10">{journey.icon}</div>
                      <p className="text-white text-2xl font-medium relative z-10">{journey.title}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium mb-4 text-purple-600/90">{journey.title}</h3>
                  <p className="text-gray-600 mb-6">{journey.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {journey.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-100/50 text-purple-600 px-4 py-1 rounded-full text-sm
                                 backdrop-blur-sm border border-purple-200/20
                                 shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-purple-600">
              <Send className="w-8 h-8 inline-block mb-2" /> Let's Create Something Amazing
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Whether you have an exciting project in mind or just want to say hi, I'd love to hear from you!
            </p>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/ishushreyas" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ishu-shreyas-776b61297" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ishushreyas@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">
              Made with <Heart size={12} className="inline text-pink-500" /> by Ishu Shreyas | 
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-purple-600 text-sm transition-colors">Terms</a>
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
