import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, ArrowUpRight, 
  Zap, Book, Tv, Code, Cpu, Wallet,
  MessageSquare, Flower, Send, FileText, Sparkles, Layers,
  Radio, PenTool
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Soft submission handling
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
      alert("Message sent gently."); 
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const journeys = [
    {
      title: "zerosix",
      category: "Fintech / PWA",
      description: "A concurrent expense tracker built for shared living costs.",
      tags: ["Go", "React", "Socket"],
      link: "https://zerosix.ishushreyas.studio/",
      icon: <Wallet className="w-5 h-5 text-zinc-600" />
    },
    {
      title: "Money Biz",
      category: "Computer Vision",
      description: "Face recognition interface for playful interactions.",
      tags: ["Python", "CV", "Web"],
      link: "https://github.com/ishushreyas/money-buisness",
      icon: <Flower className="w-5 h-5 text-zinc-600" />
    },
    {
      title: "Gemini Bot",
      category: "AI / LLM",
      description: "Interactive conversational agent using neural pathways.",
      tags: ["Go", "LLM", "API"],
      link: "https://github.com/ishushreyas/gemini-project",
      icon: <MessageSquare className="w-5 h-5 text-zinc-600" />
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200">
      
      {/* Soft Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Floating Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out 
        ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-zinc-900"></div>
            <span className="font-medium tracking-tight text-zinc-800">ishu.shreyas</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#work" className="hover:text-zinc-900 transition-colors">Work</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for projects
              </div>

              <h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight leading-[1.1]">
                Electrical<br />
                <span className="text-zinc-400">Engineering.</span>
              </h1>
              
              <p className="text-lg text-zinc-600 leading-relaxed max-w-md">
                I bridge the gap between voltage and visuals. A diploma student crafting software with an engineering mindset.
              </p>

              <div className="flex gap-4 pt-4">
                <a href="#work" className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 hover:shadow-xl hover:-translate-y-1">
                  View Work
                </a>
                <a href="/resume.pdf" className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-all flex items-center gap-2">
                  Resume <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 relative">
                 <img 
                   src="/ishushreyas.jpg" 
                   alt="Ishu Shreyas" 
                   className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 to-transparent"></div>
              </div>
              
              {/* Minimal Float Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-100 flex items-center gap-4 animate-bounce-slow">
                <div className="bg-zinc-100 p-3 rounded-xl">
                  <Zap size={20} className="text-zinc-700" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Focus</p>
                  <p className="text-sm font-medium text-zinc-800">Hardware & React</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Minimal Cards */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-zinc-900 mb-4">About Me</h2>
            <div className="h-1 w-20 bg-zinc-100 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-zinc-900 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <p className="text-xl text-zinc-600 leading-relaxed font-light">
                Hello. I'm <span className="text-zinc-900 font-medium">Ishu</span>. Based in Jamshedpur, I study Electrical Engineering while exploring the infinite canvas of full-stack development. I like things that are precise, functional, and beautiful.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-colors">
                  <Book className="mb-4 text-zinc-400" size={24} />
                  <h3 className="font-medium text-zinc-900">Research</h3>
                  <p className="text-sm text-zinc-500 mt-1">Constant learning</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-zinc-200 transition-colors">
                  <Tv className="mb-4 text-zinc-400" size={24} />
                  <h3 className="font-medium text-zinc-900">Anime</h3>
                  <p className="text-sm text-zinc-500 mt-1">One Piece fan</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 text-white p-8 rounded-3xl flex flex-col justify-between shadow-xl shadow-zinc-200">
              <div>
                <Sparkles className="mb-6 text-zinc-400" />
                <h3 className="text-2xl font-medium mb-2">Tech Stack</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Tools I use to build digital products.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                <li className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-300">React</span>
                  <Radio size={16} />
                </li>
                <li className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-300">Go (Golang)</span>
                  <Cpu size={16} />
                </li>
                <li className="flex items-center justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-300">Docker</span>
                  <Layers size={16} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="work" className="py-32 px-6 bg-zinc-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-zinc-900 mb-2">Selected Work</h2>
              <p className="text-zinc-500">A curation of my recent engineering.</p>
            </div>
            <a href="https://github.com/ishushreyas" className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
              View Github <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-6">
            {journeys.map((journey, index) => (
              <a 
                key={index}
                href={journey.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white p-8 rounded-3xl border border-zinc-100 
                hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100/50 
                transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-zinc-50 rounded-2xl group-hover:bg-zinc-100 transition-colors">
                    {journey.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-zinc-900 mb-1 flex items-center gap-2">
                      {journey.title}
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-0 group-hover:translate-x-1 transition-all text-zinc-400" />
                    </h3>
                    <p className="text-zinc-500 font-light mb-3">{journey.description}</p>
                    <div className="flex gap-2">
                      {journey.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded-md border border-zinc-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider border border-zinc-100 px-3 py-1 rounded-full">
                    {journey.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Contact */}
      <section id="contact" className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-zinc-50 rounded-2xl mb-6">
            <Mail className="text-zinc-400" size={24} />
          </div>
          <h2 className="text-4xl font-semibold text-zinc-900 mb-6">Let's start a conversation.</h2>
          <p className="text-zinc-500 mb-12">I'm currently open to new opportunities and collaborations.</p>
          
          <form onSubmit={handleSubmit} className="text-left space-y-4 max-w-lg mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all placeholder:text-zinc-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all placeholder:text-zinc-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <textarea 
              rows="4" 
              placeholder="How can I help you?" 
              className="w-full bg-zinc-50 border border-zinc-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-200 transition-all placeholder:text-zinc-400 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            
            <button 
              disabled={isSubmitting}
              className="w-full bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-sm">© 2024 Ishu Shreyas. Crafted with precision.</p>
          <div className="flex gap-6">
            <a href="https://github.com/ishushreyas" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ishu-shreyas-776b61297" className="text-zinc-400 hover:text-zinc-900 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
                  
