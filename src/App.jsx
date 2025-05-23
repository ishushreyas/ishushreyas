import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Menu, X, ArrowRight, Heart,
  Smile, Book, Tv, Code, Cog, Cpu, Wallet,
  MessageSquare, Flower, Send, FileText, Star, Brush, AppWindow, Loader2
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://api.ishushreyas.studio/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
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
      icon: <Wallet className="w-8 h-8 text-black" />
    },
    {
      title: "Money Buisness",
      description: "Prank application with face recognition.",
      tags: ["Python", "React", "pythonanywhere.com"],
      link: "https://github.com/ishushreyas/money-buisness",
      icon: <Flower className="w-8 h-8 text-black" />
    },
    {
      title: "Chatbot",
      description: "Developed a chatbot with Gemini's API for interactive conversations.",
      tags: ["Golang", "React", "GeminiAPI"],
      link: "https://github.com/ishushreyas/gemini-project",
      icon: <MessageSquare className="w-8 h-8 text-black" />
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <div className="fixed w-full h-32 z-50 transition-all duration-300">
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: scrolled ? 'blur(18px)' : 'none',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
            maskImage: scrolled
              ? 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 60%, transparent 100%)'
              : 'none',
            WebkitMaskImage: scrolled
              ? 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 60%, transparent 100%)'
              : 'none',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 mt-[55vh] md:mt-auto">
            <div className="bg-gray-100 px-4 py-2 rounded-full inline-flex items-center">
              <Star className="w-5 h-5 mr-2 text-black" />
              <span className="text-black font-medium">Welcome</span>
            </div>
            
            <p className="text-xl text-gray-600 font-light">
              A tech enthusiast from Jamshedpur, crafting digital experiences with heart and soul.
            </p>
            
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Ishu Shreyas
            </h1>
            
            <div className="flex space-x-4">
              <a 
                href="#journey" 
                className="bg-black text-white px-6 py-3 rounded-full 
                  flex items-center gap-2 transition-all hover:bg-gray-900"
              >
                See my work <ArrowRight size={20} />
              </a>
              <a 
                href="/resume.pdf" 
                className="bg-gray-100 text-black px-6 py-3 rounded-full 
                  flex items-center gap-2 transition-all hover:bg-gray-200"
              >
                Resume <FileText size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl relative overflow-hidden">
              <img
                src="/ishushreyas.jpg"
                alt="Ishu Shreyas"
                className="rounded-2xl relative z-10"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100/50 to-gray-200/50 opacity-50 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-black flex items-center gap-3">
                <Smile className="w-8 h-8 text-black" /> About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                I'm Ishu, a curious soul from the vibrant city of Jamshedpur, India. My journey in tech is fueled by a deep passion for creating meaningful experiences through code.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl transition-all hover:shadow-md">
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-black" /> What I Love
                </h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li className="flex items-center gap-2">
                    <Book size={16} /> Reading 
                  </li>
                  <li className="flex items-center gap-2">
                    <Tv size={16} /> One Piece adventures
                  </li>
                  <li className="flex items-center gap-2">
                    <Brush size={16} /> Drawing
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl transition-all hover:shadow-md">
                <h3 className="text-xl font-semibold text-black mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-black" /> Tech I Use
                </h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li className="flex items-center gap-2">
                    <AppWindow size={16} /> React & Tailwind
                  </li>
                  <li className="flex items-center gap-2">
                    <Cog size={16} /> Golang
                  </li>
                  <li className="flex items-center gap-2">
                    <Cpu size={16} /> Docker 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-black mb-12 flex items-center gap-3">
            <Code className="w-8 h-8 text-black" /> Things I've Built
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
                <div className="bg-white p-6 rounded-3xl 
                  transition-all duration-300 transform hover:-translate-y-2
                  shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      {journey.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-black">{journey.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 font-light">{journey.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {journey.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm"
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
      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4 flex items-center justify-center gap-3">
                <Send className="w-8 h-8 text-black" /> Let's Connect
              </h2>
              <p className="text-gray-600 font-light">
                Whether you have an exciting project or just want to say hi, I'd love to hear from you!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-12 rounded-3xl shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-600 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl 
                      border border-gray-200 focus:outline-none 
                      focus:ring-2 focus:ring-gray-200 transition-all"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-600 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl 
                      border border-gray-200 focus:outline-none 
                      focus:ring-2 focus:ring-gray-200 transition-all"
                    placeholder="someone@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-600 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl 
                    border border-gray-200 focus:outline-none 
                    focus:ring-2 focus:ring-gray-200 transition-all"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-600 font-medium">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl 
                    border border-gray-200 focus:outline-none 
                    focus:ring-2 focus:ring-gray-200 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-xl 
                  transition-all flex items-center justify-center gap-2
                  hover:bg-gray-900 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> 
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <img className="w-80" src="/sign_light.png" />
          <div className="flex items-center space-x-6 mt-6 md:mt-0">
            <a href="https://github.com/ishushreyas" target="_blank" rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ishu-shreyas-776b61297" target="_blank" rel="noopener noreferrer" 
              className="text-black hover:text-gray-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ishushreyas@gmail.com" 
              className="text-black hover:text-gray-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;