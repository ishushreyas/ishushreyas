import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowRight,
  Heart,
  Smile,
  Book,
  Tv,
  Globe,
  Code,
  Cog,
  Cpu,
  Wallet,
  MessageSquare,
  Flower,
  Send,
  FileText,
  Star,
  Languages,
  SmilePlus 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-medium tracking-tight flex items-center gap-2">
              Ishu Shreyas <Heart size={16} className="text-pink-500" />
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">About</a>
              <a href="#journey" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">My Journey</a>
              <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Contact</a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-purple-600"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#about" className="text-2xl text-purple-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#journey" className="text-2xl text-purple-600" onClick={() => setIsMenuOpen(false)}>My Journey</a>
            <a href="#contact" className="text-2xl text-purple-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-lg text-purple-600 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" /> Welcome
              </span>
              <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                "Following the path of curiosity and growth."
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                A tech enthusiast from Jamshedpur, crafting digital experiences with heart and soul.
              </p>
              <a href="#journey" className="inline-flex items-center text-lg text-purple-600 hover:text-pink-600 transition-colors">
                See my work <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-3xl transform rotate-6"></div>
              <img className="aspect-square rounded-3xl shadow-xl" src="/ishushreyas.jpg" alt="Ishu Shreyas" />
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
                exploring new trails, or diving deep into the world of Fiction!
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
      <section id="journey" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 flex items-center gap-3 text-purple-600">
            <Code className="w-8 h-8" /> Things I've Built
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {journeys.map((journey, index) => (
              <a 
                href={journey.link}
                key={index} 
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-6 flex flex-col justify-center items-center">
                  <div className="text-white mb-2">{journey.icon}</div>
                  <p className="text-white text-2xl">{journey.title}</p>
                </div>
                <h3 className="text-xl font-medium mb-4 text-purple-600">{journey.title}</h3>
                <p className="text-gray-600 mb-6">{journey.description}</p>
                <div className="flex flex-wrap gap-2">
                  {journey.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-purple-50 text-purple-600 px-4 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
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

export default App;