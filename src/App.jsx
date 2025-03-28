import React, { useState } from 'react';
import { 
  Menu, X, Code, Send, Heart, User, Briefcase, 
  Mail, Github, Linkedin, Smile, BookOpen, 
  Monitor, Cpu 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a 
      href={href} 
      className="text-gray-600 hover:text-indigo-600 transition-colors 
                 px-3 py-2 rounded-xl hover:bg-gray-100 
                 flex items-center gap-2"
    >
      {children}
    </a>
  );

  const SectionCard = ({ icon, title, children }) => (
    <div className="bg-white/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.05)] 
                    rounded-2xl p-6 border border-gray-100 
                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] 
                    transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-indigo-600">{title}</h3>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="text-indigo-600" size={24} />
            <span className="font-bold text-lg text-indigo-600">Ishu Shreyas</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink href="#home"><User size={16} /> Home</NavLink>
            <NavLink href="#about"><Smile size={16} /> About</NavLink>
            <NavLink href="#projects"><Code size={16} /> Projects</NavLink>
            <NavLink href="#contact"><Send size={16} /> Contact</NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-gray-600 hover:text-indigo-600"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <NavLink href="#home"><User size={20} /> Home</NavLink>
            <NavLink href="#about"><Smile size={20} /> About</NavLink>
            <NavLink href="#projects"><Code size={20} /> Projects</NavLink>
            <NavLink href="#contact"><Send size={20} /> Contact</NavLink>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-24">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-600">
              Hi, I'm Ishu Shreyas
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Tech enthusiast crafting digital experiences with passion and precision.
            </p>
            <div className="flex gap-4">
              <a 
                href="#projects" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl 
                           hover:bg-indigo-700 transition-colors 
                           flex items-center gap-2"
              >
                <Code size={18} /> View Projects
              </a>
              <a 
                href="#contact" 
                className="border border-indigo-600 text-indigo-600 
                           px-6 py-3 rounded-xl hover:bg-indigo-50 
                           transition-colors flex items-center gap-2"
              >
                <Send size={18} /> Contact Me
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-indigo-100/50 backdrop-blur-md rounded-full 
                            absolute inset-0 -z-10 transform -rotate-6"></div>
            <img 
              src="/ishushreyas.jpg" 
              alt="Ishu Shreyas" 
              className="rounded-3xl shadow-xl w-full"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SectionCard 
              icon={<BookOpen className="text-indigo-600" />} 
              title="Learning"
            >
              <p>Passionate about continuous learning and exploring new technologies.</p>
            </SectionCard>

            <SectionCard 
              icon={<Monitor className="text-indigo-600" />} 
              title="Development"
            >
              <p>Specializing in React, Golang, and creating intuitive web experiences.</p>
            </SectionCard>

            <SectionCard 
              icon={<Cpu className="text-indigo-600" />} 
              title="Tech Stack"
            >
              <ul className="space-y-2">
                <li>React & Tailwind</li>
                <li>Golang</li>
                <li>Embedded Systems</li>
              </ul>
            </SectionCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="https://github.com/ishushreyas" 
              className="text-gray-600 hover:text-indigo-600"
            >
              <Github />
            </a>
            <a 
              href="https://www.linkedin.com/in/ishu-shreyas-776b61297" 
              className="text-gray-600 hover:text-indigo-600"
            >
              <Linkedin />
            </a>
            <a 
              href="mailto:ishushreyas@gmail.com" 
              className="text-gray-600 hover:text-indigo-600"
            >
              <Mail />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Made with <Heart className="inline text-red-500" size={16} /> by Ishu Shreyas
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
