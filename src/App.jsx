import React, { useState, useEffect, useRef } from 'react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Track mouse position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
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
        
        if (window.scrollY >= (sectionTop - 200) && window.scrollY < (sectionTop + sectionHeight - 200)) {
          setActiveSection(section.id);
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
      icon: <Wallet className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Money Buisness",
      description: "Prank application with face recognition.",
      tags: ["Python", "React", "pythonanywhere.com"],
      link: "https://github.com/ishushreyas/money-buisness",
      icon: <Flower className="w-8 h-8" />,
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      title: "Chatbot",
      description: "Developed a chatbot with Gemini's API for interactive conversations.",
      tags: ["Golang", "React", "GeminiAPI"],
      link: "https://github.com/ishushreyas/gemini-project",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500"
    },
  ];

  // Parallax effect for mouse movement
  const calculateParallax = (strength = 1) => {
    const x = (window.innerWidth / 2 - mousePosition.x) * strength;
    const y = (window.innerHeight / 2 - mousePosition.y) * strength;
    return { x, y };
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mix-blend-difference pointer-events-none z-50 hidden md:block"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${cursorVariant === "hover" ? 1.5 : 1})`,
          transition: "transform 0.15s ease-out",
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-noise"></div>
      
      {/* Gradient background */}
      <div className="fixed inset-0 z-[-1] bg-gradient-radial from-purple-900/20 via-black to-black"></div>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <div 
              className="text-2xl font-bold tracking-tighter flex items-center gap-2 group"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-500">
                Ishu Shreyas
              </span>
              <Heart size={16} className="text-pink-500 animate-pulse" />
            </div>

            <div className="hidden md:flex space-x-12">
              {['about', 'journey', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className={`relative font-medium text-sm uppercase tracking-widest transition-colors duration-500 hover:text-pink-500
                    ${activeSection === section ? 'text-pink-500' : 'text-gray-400'}
                  `}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left transition-transform duration-500
                    ${activeSection === section ? 'scale-x-100' : 'scale-x-0'}
                  `} />
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              className="md:hidden text-white hover:text-pink-500 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-12">
            {['about', 'journey', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-5xl font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section with Glitch Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Interactive background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating orbs with parallax effect */}
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-30 mix-blend-screen animate-float bg-gradient-conic from-purple-500 via-pink-500 to-purple-500" 
            style={{ 
              transform: `translate(${calculateParallax(0.02).x}px, ${calculateParallax(0.02).y}px)`,
              filter: 'blur(40px)'
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 mix-blend-screen animate-float-delayed bg-gradient-conic from-blue-500 via-purple-500 to-blue-500" 
            style={{ 
              transform: `translate(${calculateParallax(0.03).x}px, ${calculateParallax(0.03).y}px)`,
              filter: 'blur(60px)'
            }}
          />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Text glitch effect */}
              <span 
                className="text-lg text-purple-400 mb-4 flex items-center gap-2 glitch-text"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <Star className="w-5 h-5" /> Experimental Portfolio
              </span>
              
              <h1 
                className="text-7xl md:text-9xl font-black mb-8 leading-none glitch-heading"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <span className="glitch-text" data-text="Create">Create</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Beyond</span>
              </h1>
              
              <p 
                className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg glitch-subtle"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                A tech enthusiast from Jamshedpur, crafting digital experiences that challenge the boundaries of conventional design.
              </p>
              
              <a 
                href="#journey" 
                className="inline-flex items-center text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 group hover:from-pink-500 hover:to-purple-500 transition-all duration-500"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Explore my universe <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

            {/* Abstract 3D-like visual */}
            <div className="relative h-[60vh] perspective">
              <div className="absolute inset-0 cube-container">
                <div className="cube">
                  <div className="cube-face cube-face-front bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-white/10"></div>
                  <div className="cube-face cube-face-back bg-gradient-to-br from-pink-500/30 to-purple-500/30 backdrop-blur-sm border border-white/10"></div>
                  <div className="cube-face cube-face-right bg-gradient-to-br from-indigo-500/30 to-purple-500/30 backdrop-blur-sm border border-white/10"></div>
                  <div className="cube-face cube-face-left bg-gradient-to-br from-purple-500/30 to-indigo-500/30 backdrop-blur-sm border border-white/10"></div>
                  <div className="cube-face cube-face-top bg-gradient-to-br from-pink-500/30 to-indigo-500/30 backdrop-blur-sm border border-white/10"></div>
                  <div className="cube-face cube-face-bottom bg-gradient-to-br from-indigo-500/30 to-pink-500/30 backdrop-blur-sm border border-white/10"></div>
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div 
                className="absolute top-1/4 right-1/4 bg-black/50 backdrop-blur-xl p-4 rounded-full border border-white/10 animate-float-tech shadow-glow"
                style={{ 
                  transform: `translate(${calculateParallax(0.05).x}px, ${calculateParallax(0.05).y}px)`,
                }}
              >
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <div 
                className="absolute bottom-1/4 left-1/4 bg-black/50 backdrop-blur-xl p-4 rounded-full border border-white/10 animate-float-tech-delayed shadow-glow"
                style={{ 
                  transform: `translate(${calculateParallax(0.07).x}px, ${calculateParallax(0.07).y}px)`,
                }}
              >
                <Heart className="w-8 h-8 text-pink-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll-wheel"></div>
          </div>
          <span className="mt-2 text-white/50 text-xs font-light tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* About Section with Distortion Effects */}
      <section id="about" className="py-32 relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            {/* Animated wave background */}
            <div className="absolute inset-0 opacity-20 bg-wave-pattern"></div>
            
            {/* Fluid gradient */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-purple-900/40 via-black/0 to-pink-900/40 animate-gradient-shift"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-5xl md:text-6xl font-black mb-12 glitch-text-subtle"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  The Mind Behind
                </span>
              </h2>
              
              <p 
                className="text-gray-300 text-xl mb-8 leading-relaxed split-text-animation"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                I'm Ishu, a digital explorer from the vibrant city of Jamshedpur, India. My approach to technology is driven by an obsession with creating experiences that feel both futuristic and deeply human.
              </p>
              
              <div 
                className="text-gray-400 text-lg mb-12 leading-relaxed reveal-text"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Every project is an opportunity to push boundaries and blend art with functionality in ways that challenge conventional design.
              </div>
              
              <div 
                className="flex items-center space-x-6"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <a href="#contact" className="relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-500 blur-sm group-hover:blur-md opacity-70"></div>
                  <button className="relative bg-black px-8 py-4 rounded-none border border-white/20 text-white font-medium tracking-widest uppercase text-sm group-hover:tracking-wider transition-all duration-300 flex items-center gap-2">
                    Connect <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </a>
                
                <a href="/resume.pdf" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="border-b border-gray-700 group-hover:border-white transition-colors">RESUME</span>
                  <FileText size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Distorted image container */}
              <div className="distortion-container relative aspect-square">
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-[10%] rounded-2xl overflow-hidden image-distortion">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 mix-blend-overlay"></div>
                  <img
                    className="w-full h-full object-cover scale-110 distort-image"
                    src="/ishushreyas.jpg"
                    alt="Ishu Shreyas"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-24 h-24 border border-white/20 rounded-sm transform rotate-45 animate-float-slow"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border border-white/20 rounded-full animate-pulse-slow"></div>
                
                {/* Tech skill badges */}
                <div className="absolute -left-6 top-1/3 bg-black/80 backdrop-blur-lg p-3 rounded-none border border-white/20 shadow-glow-sm">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <div className="absolute -right-6 bottom-1/3 bg-black/80 backdrop-blur-lg p-3 rounded-none border border-white/20 shadow-glow-sm">
                  <Cog className="w-6 h-6 text-pink-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Interests & Skills Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="group backdrop-blur-lg bg-black/30 border border-white/10 p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow-purple"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                <Heart className="w-5 h-5" /> Obsessions
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <Book className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <span className="text-white block mb-1">Reading</span>
                    <span className="text-gray-400 text-sm">Paulo Coelho's "The Alchemist" changed everything.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Tv className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <span className="text-white block mb-1">One Piece</span>
                    <span className="text-gray-400 text-sm">Following Luffy's journey to find the ultimate treasure.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Brush className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <span className="text-white block mb-1">Digital Art</span>
                    <span className="text-gray-400 text-sm">Exploring the intersection of code and creativity.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div 
              className="group backdrop-blur-lg bg-black/30 border border-white/10 p-8 hover:border-pink-500/50 transition-all duration-300 hover:shadow-glow-pink"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
                <Code className="w-5 h-5" /> Tech Arsenal
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <AppWindow className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <span className="text-white block mb-1">Frontend Wizardry</span>
                    <span className="text-gray-400 text-sm">React, Three.js, GSAP, Tailwind CSS</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Cog className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <span className="text-white block mb-1">Backend Alchemy</span>
                    <span className="text-gray-400 text-sm">Golang, Node.js, Express</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Cpu className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <span className="text-white block mb-1">System Architecture</span>
                    <span className="text-gray-400 text-sm">Embedded Systems, IoT, Distributed Computing</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Hover Effects */}
      <section id="journey" className="py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Angled lines background */}
          <div className="absolute inset-0 opacity-10 bg-grid-diagonal"></div>
          
          {/* Animated glow */}
          <div 
            className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-900/30 filter blur-[100px] animate-pulse-slow"
            style={{ 
              transform: `translate(${calculateParallax(0.02).x}px, ${calculateParallax(0.02).y}px)`,
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-900/30 filter blur-[100px] animate-pulse-slow animation-delay-2000"
            style={{ 
              transform: `translate(${calculateParallax(0.03).x}px, ${calculateParallax(0.03).y}px)`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 
            className="text-5xl md:text-7xl font-black mb-24 relative text-center"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Digital Creations
            </span>
            <div className="absolute w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
          </h2>

          <div className="grid gap-12">
            {journeys.map((journey, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => {
                  setCursorVariant("hover");
                  setHoveredProject(index);
                }}
                onMouseLeave={() => {
                  setCursorVariant("default");
                  setHoveredProject(null);
                }}
              >
                <a
                  href={journey.link}
                  className="block relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Project card */}
                  <div className={`relative backdrop-blur-lg border border-white/10 overflow-hidden transform transition-all duration-700 ${hoveredProject === index ? 'scale-[0.98]' : 'scale-100'}`}>
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${journey.color} opacity-0 transition-opacity duration-700 ${hoveredProject === index ? 'opacity-20' : ''}`}></div>
                    
                    <div className="grid md:grid-cols-5 min-h-[30vh]">
                      {/* Left content */}
                      <div className="col-span-2 p-12 flex items-center justify-center relative overflow-hidden group">
                        {/* Icon with animated background */}
                        <div className={`relative z-10 w-32 h-32 flex items-center justify-center bg-gradient-to-r ${journey.color} rounded-full transform transition-transform duration-700 ${hoveredProject === index ? 'scale-110' : 'scale-100'}`}>
                          <div className="text-white transform scale-150">
                            {journey.icon}
                          </div>
                        </div>
                        
                        {/* Animated circles */}
                        <div className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-white/20 rounded-full animate-ping-slow opacity-30`}></div>
                          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/10 rounded-full animate-ping-slow animation-delay-1000 opacity-20`}></div>
                        </div>
                      </div>
                      
                      {/* Right content */}
                      <div className="col-span-3 p-12 flex flex-col justify-center relative">
                        <h3 className={`text-4xl font-bold mb-6 transition-colors duration-500 ${hoveredProject === index ? 'text-white' : 'text-gray-300'}`}>
                          {journey.title}
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                          {journey.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                          {journey.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`border border-white/20 px-4 py-2 text-sm transition-all duration-300 ${hoveredProject === index ? 'bg-white/10 text-white' : 'bg-transparent text-gray-400'}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Explore link */}
                        <div className={`absolute bottom-12 right-12 flex items-center transition-all duration-500 ${hoveredProject === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                          <span className="uppercase text-sm tracking-wider mr-3">Explore</span>
                          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                            <ArrowRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Experimental Form */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/20 filter blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-900/20 filter blur-[100px] rounded-full"></div>
          
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-[0.07] bg-circuit-pattern"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <h2 
                className="text-5xl md:text-6xl font-black mb-8 relative"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Let's Create<br />Together
                </span>
              </h2>
              
              <p 
                className="text-gray-400 text-lg mb-12 leading-relaxed"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Have a vision that needs execution? A concept that needs refinement? Or simply want to connect? I'm all ears.
              </p>
              
              {/* Social links */}
              <div 
                className="space-y-6"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <a href="mailto:ishushreyas@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-pink-500 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-sm">Email</span>
                    <span className="text-white group-hover:text-pink-500 transition-colors duration-300">ishushreyas@gmail.com</span>
                  </div>
                </a>
                
                <a href="https://github.com/ishushreyas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-purple-500 transition-colors duration-300">
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-sm">GitHub</span>
                    <span className="text-white group-hover:text-purple-500 transition-colors duration-300">ishushreyas</span>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/ishu-shreyas-776b61297" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-sm">LinkedIn</span>
                    <span className="text-white group-hover:text-blue-500 transition-colors duration-300">ishu-shreyas</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3">
              {/* Experimental contact form */}
              <div 
                className="relative backdrop-blur-xl bg-black/30 border border-white/10 p-12"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 border border-pink-500"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border border-purple-500"></div>
                
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 uppercase tracking-wide">Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-purple-500 outline-none transition-colors duration-300"
                          placeholder="What should I call you?"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 input-focus-indicator"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 uppercase tracking-wide">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-purple-500 outline-none transition-colors duration-300"
                          placeholder="Where can I reach you?"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 input-focus-indicator"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Subject</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-purple-500 outline-none transition-colors duration-300"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 input-focus-indicator"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-wide">Message</label>
                    <div className="relative">
                      <textarea
                        rows="5"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-purple-500 outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell me everything..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 input-focus-indicator"></div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-500 blur-md opacity-70 group-hover:opacity-100"></div>
                    <div className="relative px-8 py-4 bg-black text-white font-medium uppercase tracking-wider text-sm flex items-center gap-2">
                      Send Message
                      <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Experimental Design */}
      <footer className="py-12 relative">
        {/* Gradient border */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div 
              className="flex items-center gap-3 group"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-slow"></div>
                <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                  <Heart size={16} className="text-pink-500" />
                </div>
              </div>
              <div>
                <p className="text-white font-medium">Ishu Shreyas</p>
                <p className="text-gray-500 text-xs">Digital Explorer</p>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm">
              Crafted with obsessive attention to detail
            </p>

            {/* Stylized back to top button */}
            <a 
              href="#" 
              className="group relative w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-500 transition-colors duration-300"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <svg className="w-4 h-4 text-white group-hover:text-purple-500 transition-colors duration-300 transform rotate-90 group-hover:-translate-y-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      
      {/* Custom stylesheet for animations and effects */}
      <style jsx global>{`
        /* Noise texture */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        /* Grid patterns */
        .bg-grid {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .bg-grid-diagonal {
          background-image:
            linear-gradient(135deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(225deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(315deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%);
          background-size: 20px 20px;
        }
        
        .bg-circuit-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath path opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        /* Wave pattern */
        .bg-wave-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
        }
        
        /* Animation keyframes */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.4; }
          50% { opacity: 0.7; }
          100% { opacity: 0.4; }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes scroll-wheel {
          0% { transform: translateY(0); opacity: 1; }
          30% { opacity: 1; }
          50%, 100% { transform: translateY(6px); opacity: 0; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes cube-rotate {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes distort {
          0% { transform: scale(1) skew(0deg); filter: brightness(1); }
          25% { transform: scale(1.02) skew(1deg); filter: brightness(1.05); }
          50% { transform: scale(1) skew(0deg); filter: brightness(1); }
          75% { transform: scale(0.98) skew(-1deg); filter: brightness(0.95); }
          100% { transform: scale(1) skew(0deg); filter: brightness(1); }
        }
        
        @keyframes text-reveal {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        /* Apply animations */
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-tech {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-tech-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-scroll-wheel {
          animation: scroll-wheel 1.5s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 10s ease infinite;
          background-size: 200% 200%;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Perspective and 3D elements */
        .perspective {
          perspective: 1000px;
        }
        
        .cube-container {
          transform-style: preserve-3d;
          animation: cube-rotate 20s linear infinite;
        }
        
        .cube {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
          transform-style: preserve-3d;
        }
        
        .cube-face {
          position: absolute;
          width: 300px;
          height: 300px;
          backface-visibility: visible;
        }
        
        .cube-face-front {
          transform: translateZ(150px);
        }
        
        .cube-face-back {
          transform: rotateY(180deg) translateZ(150px);
        }
        
        .cube-face-right {
          transform: rotateY(90deg) translateZ(150px);
        }
        
        .cube-face-left {
          transform: rotateY(-90deg) translateZ(150px);
        }
        
        .cube-face-top {
          transform: rotateX(90deg) translateZ(150px);
        }
        
        .cube-face-bottom {
          transform: rotateX(-90deg) translateZ(150px);
        }
        
        /* Glitch effects */
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        
        .glitch-text::before {
          color: #ff00ff;
          z-index: -1;
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          animation-delay: 0.1s;
        }
        
        .glitch-text::after {
          color: #00ffff;
          z-index: -2;
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
          animation-delay: 0.2s;
        }
        
       .glitch-text-subtle {
  position: relative;
  overflow: hidden;
}

.glitch-text-subtle:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 0, 255, 0.2);
  mix-blend-mode: difference;
  animation: glitch 0.2s ease-in-out;
}

.glitch-heading {
  position: relative;
}

.glitch-heading:hover {
  animation: glitch 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* Image distortion effects */
.distortion-container {
  position: relative;
  overflow: hidden;
}

.image-distortion {
  animation: distort 8s infinite ease-in-out;
}

.distort-image {
  transition: all 0.5s ease;
}

.distortion-container:hover .distort-image {
  filter: hue-rotate(15deg) contrast(1.1);
}

/* Text animation effects */
.split-text-animation {
  overflow: hidden;
}

.split-text-animation > * {
  transform: translateY(100%);
  opacity: 0;
  animation: text-slide-up 0.8s forwards;
}

@keyframes text-slide-up {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.reveal-text {
  clip-path: inset(0 100% 0 0);
  animation: text-reveal 1s 0.5s forwards;
}

/* Shadow effects */
.shadow-glow {
  box-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
}

.shadow-glow-sm {
  box-shadow: 0 0 15px rgba(147, 51, 234, 0.2);
}

.shadow-glow-purple {
  box-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
}

.shadow-glow-pink {
  box-shadow: 0 0 30px rgba(236, 72, 153, 0.3);
}

/* Form input effects */
.input-focus-indicator {
  width: 0;
}

input:focus ~ .input-focus-indicator,
textarea:focus ~ .input-focus-indicator {
  width: 100%;
}

/* Background gradients */
.bg-gradient-radial {
  background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-to));
}

.bg-gradient-conic {
  background: conic-gradient(var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to), var(--tw-gradient-from));
}
      `}</style>
    </div>
  );
};

export default App;