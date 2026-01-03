import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, ArrowRight, Heart,
  Zap, Book, Tv, Code, Cpu, Wallet,
  MessageSquare, Flower, Send, FileText, Star, PenTool, Terminal, Activity, Radio
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Custom cursor blinking effect state
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(timer);
  }, []);

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
      alert("SIGNAL TRANSMITTED SUCCESSFULLY"); // Replaced subtle toast with alert for retro feel
    } catch (error) {
      console.error("Transmission Error:", error);
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
      title: "PROJ: zerosix",
      id: "P-01",
      description: "Progressive Web App expense tracker. Implemented concurrent cost logic.",
      tags: ["React", "Golang", "WebSocket", "PWA"],
      link: "https://zerosix.ishushreyas.studio/",
      icon: <Wallet className="w-6 h-6" />
    },
    {
      title: "PROJ: Money Biz",
      id: "P-02",
      description: "Facial recognition interface for prank application logic.",
      tags: ["Python", "CV", "React"],
      link: "https://github.com/ishushreyas/money-buisness",
      icon: <Flower className="w-6 h-6" />
    },
    {
      title: "PROJ: Chat_Bot",
      id: "P-03",
      description: "Conversational agent utilizing Gemini API neural pathways.",
      tags: ["Golang", "LLM", "API"],
      link: "https://github.com/ishushreyas/gemini-project",
      icon: <MessageSquare className="w-6 h-6" />
    },
  ];

  return (
    <div className="min-h-screen bg-[#050a05] text-[#33ff33] font-mono selection:bg-[#33ff33] selection:text-black">
      
      {/* BACKGROUND GRID (Oscilloscope Effect) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{
             backgroundImage: `
               linear-gradient(to right, #1a4d1a 1px, transparent 1px),
               linear-gradient(to bottom, #1a4d1a 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Navigation - Top Status Bar */}
      <div className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050a05]/95 border-[#33ff33]' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 animate-pulse" />
            <span className="text-lg tracking-widest font-bold">SYS.ISHU_SHREYAS</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            {['ABOUT', 'JOURNEY', 'CONTACT'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:bg-[#33ff33] hover:text-black px-2 py-1 transition-colors border border-transparent hover:border-[#33ff33]"
              >
                [{item}]
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 border-b border-[#33ff33]/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block border border-[#33ff33] px-4 py-1 text-xs tracking-widest uppercase bg-[#33ff33]/10">
              <span className="animate-pulse">●</span> System Online
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-[#33ff33]/70 uppercase tracking-widest">
                // Diploma: Electrical Engineering
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tighter">
                ISHU<br/>SHREYAS
              </h1>
              <p className="text-xl text-[#33ff33] border-l-4 border-[#33ff33] pl-4 py-2 mt-4 bg-[#33ff33]/5">
                Bridging Hardware Logic &<br/>Software Architecture.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#journey" 
                className="group relative px-6 py-3 bg-[#33ff33] text-black font-bold 
                  hover:bg-[#2bd92b] transition-all flex items-center gap-2 clip-path-polygon"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)' }}
              >
                INITIATE_VIEW <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 border border-[#33ff33] text-[#33ff33] 
                  hover:bg-[#33ff33]/10 transition-all flex items-center gap-2"
              >
                DOWNLOAD_DATA <FileText size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Image Frame - Schematic Style */}
            <div className="relative border-2 border-[#33ff33] p-2">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#33ff33]"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#33ff33]"></div>
                
                <img
                  src="/ishushreyas.jpg"
                  alt="Ishu Shreyas"
                  className="w-full h-auto grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
                  style={{ filter: 'grayscale(100%) sepia(100%) hue-rotate(90deg) saturate(300%) contrast(0.8)' }}
                />
                
                {/* Technical Overlay */}
                <div className="absolute bottom-4 right-4 text-xs bg-black/80 px-2 py-1 border border-[#33ff33]">
                  FIG 1.1: CREATOR
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-b border-[#33ff33]/30 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-3 uppercase tracking-wider">
                <Radio className="w-8 h-8 animate-pulse" /> 
                <span className="border-b-4 border-[#33ff33]">Signal Input</span>
              </h2>
              <p className="text-lg text-[#33ff33]/80 leading-relaxed">
                > Origin: Jamshedpur, India<br/>
                > Status: Active Learner<br/><br/>
                My kernel is compiled with Electrical Engineering fundamentals, running on a Full-Stack loop. I translate voltage into visuals and logic into life.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Box 1 */}
              <div className="border border-[#33ff33] p-6 bg-[#33ff33]/5 relative">
                <div className="absolute top-0 left-0 bg-[#33ff33] text-black text-xs px-2 py-1 font-bold">
                  MODULE: INTERESTS
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3">
                    <Book size={16} /> [READING_DATA]
                  </li>
                  <li className="flex items-center gap-3">
                    <Tv size={16} /> [OP_ADVENTURE_LOGS]
                  </li>
                  <li className="flex items-center gap-3">
                    <PenTool size={16} /> [SCHEMATIC_DRAWING]
                  </li>
                </ul>
              </div>

              {/* Box 2 */}
              <div className="border border-[#33ff33] p-6 bg-[#33ff33]/5 relative">
                <div className="absolute top-0 left-0 bg-[#33ff33] text-black text-xs px-2 py-1 font-bold">
                  MODULE: TECH_STACK
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Terminal size={16} /> REACT.JS
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Cpu size={16} /> GOLANG
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap size={16} /> DOCKER
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Activity size={16} /> TAILWIND
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 border-b border-[#33ff33]/30 bg-[#081208]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 uppercase tracking-wider">
            <Cpu className="w-8 h-8" /> 
            <span className="border-b-4 border-[#33ff33]">Output Log</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {journeys.map((journey, index) => (
              <a
                href={journey.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative"
              >
                <div className="h-full border border-[#33ff33] bg-black p-6 hover:bg-[#33ff33]/10 transition-all duration-200">
                  {/* Decorative Screw Heads */}
                  <div className="absolute top-2 left-2 w-1 h-1 bg-[#33ff33] rounded-full opacity-50"></div>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-[#33ff33] rounded-full opacity-50"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-[#33ff33] rounded-full opacity-50"></div>
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-[#33ff33] rounded-full opacity-50"></div>

                  <div className="flex justify-between items-start mb-4 border-b border-[#33ff33]/30 pb-2">
                     <span className="text-xs bg-[#33ff33] text-black px-1 font-bold">{journey.id}</span>
                     {journey.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">
                    {journey.title}
                  </h3>
                  <p className="text-sm text-[#33ff33]/70 mb-6 font-light">
                    {journey.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {journey.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs border border-[#33ff33]/50 px-2 py-1 text-[#33ff33]/80 uppercase"
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
      <section id="contact" className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="border-2 border-[#33ff33] p-1 bg-[#050a05]">
            <div className="bg-[#33ff33]/10 p-8 md:p-12 border border-[#33ff33]/30">
              
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2 uppercase flex items-center justify-center gap-2">
                  <Send className="w-6 h-6" /> Transmission
                </h2>
                <div className="h-1 w-20 bg-[#33ff33] mx-auto"></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider font-bold">Input: Name</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-[#33ff33] px-4 py-3 
                        text-[#33ff33] focus:outline-none focus:ring-1 focus:ring-[#33ff33] 
                        placeholder-[#33ff33]/30"
                      placeholder="USER_ID"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider font-bold">Input: Email</label>
                    <input
                      type="email"
                      className="w-full bg-black border border-[#33ff33] px-4 py-3 
                        text-[#33ff33] focus:outline-none focus:ring-1 focus:ring-[#33ff33]
                        placeholder-[#33ff33]/30"
                      placeholder="LOCATOR@"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider font-bold">Param: Subject</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-[#33ff33] px-4 py-3 
                      text-[#33ff33] focus:outline-none focus:ring-1 focus:ring-[#33ff33]
                      placeholder-[#33ff33]/30"
                    placeholder="TOPIC_HEADER"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider font-bold">Data Payload</label>
                  <textarea
                    rows="4"
                    className="w-full bg-black border border-[#33ff33] px-4 py-3 
                      text-[#33ff33] focus:outline-none focus:ring-1 focus:ring-[#33ff33]
                      placeholder-[#33ff33]/30 resize-none"
                    placeholder="ENTER MESSAGE STREAM..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#33ff33] text-black font-bold py-4 
                    uppercase tracking-widest hover:bg-[#2bd92b] transition-all 
                    border-2 border-transparent hover:border-black flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'EXECUTE_SEND'}
                  <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>_</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#33ff33]/30 bg-[#020402]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <div className="w-2 h-2 bg-[#33ff33] rounded-full animate-ping"></div>
             <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <a href="https://github.com/ishushreyas" className="hover:text-white transition-colors flex items-center gap-2">
              <Github size={16} /> GITHUB
            </a>
            <a href="https://www.linkedin.com/in/ishu-shreyas-776b61297" className="hover:text-white transition-colors flex items-center gap-2">
              <Linkedin size={16} /> LINKEDIN
            </a>
            <a href="mailto:ishushreyas@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail size={16} /> EMAIL
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
