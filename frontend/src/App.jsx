import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  ExternalLink,
  ArrowRight
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

  const projects = [
    {
      title: "zerosix",
      description: "A Progressive Web App to track shared expenses with friends using React and Golang.",
      tags: ["React", "Golang", "PWA", "WebSockets"],
      link: "https://zerosix.ishushreyas.studio/"
    },
    {
      title: "AI-Powered Chatbot",
      description: "Developed a chatbot with OpenAI's API for interactive conversations.",
      tags: ["Golang", "React", "OpenAI", "WebSockets"],
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-12">
            <div className="text-lg font-medium tracking-tight">Ishu Shreyas</div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-black/60 hover:text-black transition-colors text-sm">About</a>
              <a href="#projects" className="text-black/60 hover:text-black transition-colors text-sm">Projects</a>
              <a href="#contact" className="text-black/60 hover:text-black transition-colors text-sm">Contact</a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black/60 hover:text-black"
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
            <a href="#about" className="text-2xl" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 pt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight leading-tight">
                Full-Stack Developer.
              </h1>
              <p className="text-xl md:text-2xl text-black/60 mb-8">
                Creating innovative solutions at the intersection of software and hardware.
              </p>
              <a href="#projects" className="inline-flex items-center text-lg text-black hover:opacity-70 transition-opacity">
                View Projects <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
            <div className="relative">
              <img className="aspect-square rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl" src="/ishushreyas.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">About Me</h2>
              <p className="text-black/60 text-lg mb-8 leading-relaxed">
                A curious mind with a passion for software development, embedded systems, and adventure. 
                Based in Jamshedpur, India, I'm constantly exploring the intersection of hardware and software, 
                pushing boundaries with React, Golang, and C++.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-colors text-sm">
                  Get in touch
                </a>
                <a href="/resume.pdf" className="text-black/60 hover:text-black transition-colors text-sm">
                  Download Resume
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <h3 className="text-lg font-medium mb-4">Frontend</h3>
                <ul className="text-black/60 space-y-2">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <h3 className="text-lg font-medium mb-4">Backend</h3>
                <ul className="text-black/60 space-y-2">
                  <li>Golang</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a 
                href={project.link}
                key={index} 
                className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gray-900 rounded-2xl mb-6" />
                <h3 className="text-xl font-medium mb-4">{project.title}</h3>
                <p className="text-black/60 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-black/60 px-4 py-1 rounded-full text-sm">
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
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">Let's Connect</h2>
            <p className="text-black/60 text-lg mb-12">
              Whether you have a project in mind or just want to chat, I'd love to hear from you.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/ishushreyas" className="text-black/60 hover:text-black transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-black/60 hover:text-black transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ishushreyas@gmail.com" className="text-black/60 hover:text-black transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-black/40 text-sm">
              © 2025 Ishu Shreyas
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-black/40 hover:text-black text-sm transition-colors">Privacy</a>
              <a href="#" className="text-black/40 hover:text-black text-sm transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
