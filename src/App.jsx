import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, Menu, X, Send, 
  Code, Book, Heart, Smile, Cpu 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offset && scrollPosition < offset + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "zerosix",
      description: "Expense tracking PWA",
      tags: ["React", "Golang"],
      link: "https://zerosix.ishushreyas.studio/"
    },
    {
      title: "Chatbot",
      description: "Interactive AI conversation app",
      tags: ["Golang", "React"],
      link: "https://github.com/ishushreyas/gemini-project"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            Ishu <Heart className="text-blue-500" size={18} />
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item.toLowerCase()} 
                href={`#${item.toLowerCase()}`}
                className={`
                  relative text-gray-600 hover:text-blue-600 transition-colors
                  ${activeSection === item.toLowerCase() ? 'text-blue-600 font-medium' : ''}
                `}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500" />
                )}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item.toLowerCase()} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-gray-800 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Ishu Shreyas
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Tech enthusiast crafting digital experiences with passion and creativity.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#projects" 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                View Projects
              </a>
              <div className="flex items-center gap-3">
                <a href="https://github.com/ishushreyas" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Github />
                </a>
                <a href="https://linkedin.com/in/ishu-shreyas" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/ishushreyas.jpg" 
                alt="Ishu Shreyas" 
                className="rounded-xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-900">
                <Smile className="text-blue-500" /> About Me
              </h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate developer from Jamshedpur, India. My journey is driven by curiosity and a love for creating meaningful tech solutions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
                    <Code /> Tech I Love
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>React</li>
                    <li>Golang</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-white/70 backdrop-blur-md p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
                    <Book /> Interests
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Reading</li>
                    <li>Drawing</li>
                    <li>Tech Exploration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <Cpu className="text-blue-500 mb-2" size={36} />
                <span className="font-medium text-gray-800">Embedded Systems</span>
              </div>
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <Heart className="text-blue-500 mb-2" size={36} />
                <span className="font-medium text-gray-800">Creative Coding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a 
                key={index} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
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
      <section id="contact" className="py-24 bg-white/50 backdrop-blur-md">
        <div className="max-w-md mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 bg-white/70 backdrop-blur-md rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-300 outline-none"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 bg-white/70 backdrop-blur-md rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-300 outline-none"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="w-full p-3 bg-white/70 backdrop-blur-md rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-300 outline-none resize-none"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white/70 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Ishu Shreyas
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ishushreyas" className="text-gray-600 hover:text-blue-600">
              <Github />
            </a>
            <a href="https://linkedin.com/in/ishu-shreyas" className="text-gray-600 hover:text-blue-600">
              <Linkedin />
            </a>
            <a href="mailto:ishushreyas@gmail.com" className="text-gray-600 hover:text-blue-600">
              <Mail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
