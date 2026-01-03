import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, MapPin, 
  BookOpen, Award, Briefcase, 
  PenTool, Code, Zap, ArrowRight, MousePointer2
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent!");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const education = [
    {
      level: "Diploma in Electrical Engineering",
      institution: "Government Polytechnic Adityapur",
      board: "Jharkhand University Of Technology",
      year: "Pursuing",
      score: "Active",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      level: "Intermediate (12th)",
      institution: "St. Michael Anglo Indian School",
      board: "CBSE",
      year: "2023",
      score: "72.2%",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      level: "Matriculation (10th)",
      institution: "St. Michael Anglo Indian School",
      board: "CBSE",
      year: "2021",
      score: "94.4%",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
  ];

  const internship = {
    title: "Industrial Training",
    place: "Indo Danish Tool Room, Jamshedpur",
    duration: "May - July 2025",
    skills: ["PLC Programming", "Machine Maintenance", "Sensor Technology", "AI Basics"]
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200 overflow-x-hidden">
      
      {/* GRAPHIC: Technical Dot Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}>
      </div>

      {/* GRAPHIC: Soft Ambient Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-100 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-emerald-100 rounded-full blur-[100px] opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out 
        ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200/50 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-lg shadow-zinc-200">
              IS
            </div>
            <span className="font-semibold tracking-tight text-zinc-800">ishu.shreyas</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            {['Profile', 'Education', 'Training', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-zinc-900 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="profile" className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-600 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open to Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight leading-[1.1]">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800">
                Creativity.
              </span>
            </h1>
            
            <p className="text-lg text-zinc-600 leading-relaxed font-light max-w-md">
              A diploma student blending <strong>Electrical Engineering</strong> precision with modern software development.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="group bg-zinc-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-2 px-6 py-3 bg-white/50 border border-zinc-200 rounded-xl text-zinc-600 backdrop-blur-sm">
                <MapPin size={18} /> Jamshedpur, IN
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center">
            {/* GRAPHIC: Abstract Rotating Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-zinc-200 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-zinc-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-zinc-200">
               <img 
                 src="/ishushreyas.jpg" 
                 alt="Ishu Shreyas" 
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-xl border border-white flex items-center gap-3">
              <div className="p-2 bg-zinc-100 rounded-lg">
                <PenTool size={20} className="text-zinc-700" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-zinc-400 uppercase">Focus</p>
                <p className="text-sm font-semibold text-zinc-800">Design & Code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Timeline Graphic */}
      <section id="education" className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <BookOpen size={24} className="text-zinc-700" />
            </div>
            <h2 className="text-3xl font-bold text-zinc-900">Academic Timeline</h2>
          </div>

          <div className="relative border-l-2 border-zinc-200 ml-3 md:ml-6 space-y-12">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                {/* Timeline Dot */}
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white ${edu.bg.replace('50', '500')}`}></div>
                
                <div className="group bg-white p-6 rounded-2xl border border-zinc-100 hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${edu.color} mb-2 block`}>
                        {edu.year}
                      </span>
                      <h3 className="text-xl font-bold text-zinc-900">{edu.level}</h3>
                      <p className="text-zinc-500 font-medium">{edu.institution}</p>
                      <p className="text-sm text-zinc-400 mt-1">{edu.board}</p>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className={`px-4 py-2 rounded-lg font-bold text-sm ${edu.bg} ${edu.color}`}>
                         {edu.score}
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Skills - Grid Graphics */}
      <section id="training" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Internship Card */}
            <div className="md:col-span-7 bg-zinc-900 text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
              {/* Graphic: Circuit Pattern */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={120} />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                   <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-zinc-800 rounded-lg">
                      <Briefcase size={20} className="text-white" />
                    </div>
                    <span className="text-zinc-400 font-medium">Internship</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{internship.place}</h3>
                  <p className="text-zinc-400 mb-8">{internship.duration}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-zinc-800 rounded-md text-sm font-medium border border-zinc-700 text-zinc-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Strengths Card */}
            <div className="md:col-span-5 bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-xl relative overflow-hidden">
               {/* Graphic: Abstract shapes */}
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-zinc-50 rounded-full z-0"></div>
               
               <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-zinc-100 rounded-lg">
                      <Award size={20} className="text-zinc-900" />
                    </div>
                    <span className="text-zinc-500 font-medium">Core Strengths</span>
                  </div>
                  
                  <div className="space-y-4">
                    {["Quick Learner", "Problem Solving", "Teamwork", "Hardworking"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 group">
                        <div className="w-8 h-1 bg-zinc-100 rounded-full overflow-hidden">
                           <div className="h-full bg-zinc-900 w-0 group-hover:w-full transition-all duration-500"></div>
                        </div>
                        <span className="font-medium text-zinc-800">{item}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Minimal Contact */}
      <section id="contact" className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-zinc-200 shadow-2xl shadow-zinc-200/50">
            <div className="text-center mb-10">
              <div className="inline-block p-4 bg-zinc-50 rounded-2xl mb-4">
                <Mail className="text-zinc-900" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-2">Let's Connect</h2>
              <p className="text-zinc-500">
                Have a project or just want to say hi? <br/> Drop me a message below.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group relative">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-zinc-50 border-2 border-transparent focus:bg-white focus:border-zinc-900 rounded-xl px-4 py-3 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="group relative">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-zinc-50 border-2 border-transparent focus:bg-white focus:border-zinc-900 rounded-xl px-4 py-3 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <textarea 
                rows="4" 
                placeholder="How can I help you?" 
                className="w-full bg-zinc-50 border-2 border-transparent focus:bg-white focus:border-zinc-900 rounded-xl px-4 py-3 outline-none transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              
              <button 
                disabled={isSubmitting}
                className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold tracking-wide hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <MousePointer2 size={16} />
              </button>
            </form>

            <div className="mt-8 text-center pt-8 border-t border-zinc-100">
              <a href="mailto:ishushreyas@gmail.com" className="text-zinc-400 hover:text-zinc-900 transition-colors font-medium">
                ishushreyas@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-zinc-400 text-sm">
          <span>© {new Date().getFullYear()} Ishu Shreyas</span>
          <div className="flex gap-4">
            <a href="https://github.com/ishushreyas" className="hover:text-zinc-900 transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com" className="hover:text-zinc-900 transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
