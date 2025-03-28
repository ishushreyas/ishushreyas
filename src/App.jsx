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

  const journeys = [
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
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Neumorphic Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold tracking-tight flex items-center gap-3 
              bg-gray-200 px-4 py-2 rounded-full shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow">
              <span className="text-gray-800">Ishu Shreyas</span>
              <Heart size={16} className="text-gray-600" />
            </div>

            <div className="hidden md:flex space-x-4">
              {['about', 'journey', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 
                    ${activeSection === section 
                      ? 'bg-gray-800 text-white shadow-neumorphic' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-neumorphic-light'}`}
                >
                  {section}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-gray-200 p-2 rounded-full shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Neumorphic Design */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-200 px-4 py-2 rounded-full inline-flex items-center shadow-neumorphic-light">
              <Star className="w-5 h-5 mr-2 text-gray-700" />
              <span className="text-gray-800">Welcome</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              "Following the path of curiosity and growth."
            </h1>
            
            <p className="text-xl text-gray-700">
              A tech enthusiast from Jamshedpur, crafting digital experiences with heart and soul.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#journey" 
                className="bg-gray-800 text-white px-6 py-3 rounded-full 
                  flex items-center gap-2 shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow"
              >
                See my work <ArrowRight size={20} />
              </a>
              <a 
                href="/resume.pdf" 
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full 
                  flex items-center gap-2 shadow-neumorphic-light hover:shadow-neumorphic transition-shadow"
              >
                Resume <FileText size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-200 p-4 rounded-3xl shadow-neumorphic relative overflow-hidden">
              <img
                src="/ishushreyas.jpg"
                alt="Ishu Shreyas"
                className="rounded-2xl relative z-10 shadow-neumorphic-image"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100/50 to-gray-200/50 opacity-50 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Neumorphic Cards */}
      <section id="about" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                <Smile className="w-8 h-8 text-gray-700" /> About Me
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm Ishu, a curious soul from the vibrant city of Jamshedpur, India. My journey in tech is fueled by a deep passion for creating meaningful experiences through code.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-200 p-6 rounded-3xl shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-gray-700" /> What I Love
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Book size={16} /> Reading (The Alchemist!)
                  </li>
                  <li className="flex items-center gap-2">
                    <Tv size={16} /> One Piece adventures
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush size={16} /> Drawing
                  </li>
                </ul>
              </div>

              <div className="bg-gray-200 p-6 rounded-3xl shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-gray-700" /> Tech I Use
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <AppWindow size={16} /> React & Tailwind
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
        </div>
      </section>

      {/* Journey Section with Neumorphic Project Cards */}
      <section id="journey" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <Code className="w-8 h-8 text-gray-700" /> Things I've Built
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {journeys.map((journey, index) => (
              <a
                href={journey.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gray-200 p-6 rounded-3xl 
                  shadow-neumorphic hover:shadow-neumorphic-hover 
                  transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gray-300 p-3 rounded-full shadow-neumorphic-light">
                      {journey.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{journey.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{journey.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {journey.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm"
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

      {/* Contact Section with Neumorphic Form */}
      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gray-200 p-12 rounded-3xl shadow-neumorphic">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <Send className="w-8 h-8 text-gray-700" /> Let's Connect
              </h2>
              <p className="text-gray-700">
                Whether you have an exciting project or just want to say hi, I'd love to hear from you!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl 
                      border-none shadow-neumorphic-inner focus:outline-none 
                      focus:ring-2 focus:ring-gray-300 transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl 
                      border-none shadow-neumorphic-inner focus:outline-none 
                      focus:ring-2 focus:ring-gray-300 transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl 
                    border-none shadow-neumorphic-inner focus:outline-none 
                    focus:ring-2 focus:ring-gray-300 transition-all"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl 
                    border-none shadow-neumorphic-inner focus:outline-none 
                    focus:ring-2 focus:ring-gray-300 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-4 rounded-xl 
                  shadow-neumorphic hover:shadow-neumorphic-hover 
                  transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm">
            Made with <Heart size={12} className="inline text-gray-800" /> by Ishu Shreyas
          </p>

          <div className="flex items-center space-x-6">
            <a href="https://github.com/ishushreyas" target="_blank" rel="noopener noreferrer" 
              className="text-gray-700 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ishu-shreyas-776b61297" target="_blank" rel="noopener noreferrer" 
              className="text-gray-700 hover:text-gray-900 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ishushreyas@gmail.com" 
              className="text-gray-700 hover:text-gray-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Custom Tailwind CSS for Neumorphic Design
const style = document.createElement('style');
style.textContent = `
  @layer utilities {
    .shadow-neumorphic {
      box-shadow: 
        6px 6px 12px rgba(0, 0, 0, 0.08), 
        -6px -6px 12px rgba(255, 255, 255, 0.8);
    }
    .shadow-neumorphic-hover {
      box-shadow: 
        8px 8px 16px rgba(0, 0, 0, 0.1), 
        -8px -8px 16px rgba(255, 255, 255, 0.9);
    }
    .shadow-neumorphic-light {
      box-shadow: 
        3px 3px 6px rgba(0, 0, 0, 0.05), 
        -3px -3px 6px rgba(255, 255, 255, 0.7);
    }
    .shadow-neumorphic-inner {
      box-shadow: 
        inset 3px 3px 6px rgba(0, 0, 0, 0.05), 
        inset -3px -3px 6px rgba(255, 255, 255, 0.7);
    }
    .shadow-neumorphic-image {
      box-shadow: 
        10px 10px 20px rgba(0, 0, 0, 0.1), 
        -10px -10px 20px rgba(255, 255, 255, 0.9);
    }
  }
`;
document.head.appendChild(style);

export default App;
