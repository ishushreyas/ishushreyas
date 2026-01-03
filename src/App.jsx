import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, MapPin, 
  BookOpen, Award, Briefcase, 
  PenTool, Code, Zap, ArrowRight, MousePointer2
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent!");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
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
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      level: "Intermediate (12th)",
      institution: "St. Michael Anglo Indian School",
      board: "CBSE",
      year: "2023",
      score: "72.2%",
      color: "bg-blue-100 text-blue-700"
    },
    {
      level: "Matriculation (10th)",
      institution: "St. Michael Anglo Indian School",
      board: "CBSE",
      year: "2021",
      score: "94.4%",
      color: "bg-zinc-100 text-zinc-700"
    },
  ];

  const strengths = [
    "Quick Learner",
    "Hardworking",
    "Problem Solving",
    "Team Collaboration",
    "Adaptability"
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200 overflow-x-hidden">
      
      {/* GRAPHIC: Technical Dot Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      {/* GRAPHIC: Soft Blobs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b 
        ${scrolled ? 'bg-white/90 backdrop-blur-md border-zinc-200 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold text-xs">IS</div>
             <span className="font-semibold text-zinc-800 tracking-tight">Ishu Shreyas</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#education" className="hover:text-zinc-900 transition-colors">Education</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm border border-white/50 p-1 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 inline-block w-full">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-zinc-100 relative overflow-hidden">
              
              {/* Abstract Graphic Lines */}
              <div className="absolute top-0 right-0 w-64 h-64 border-[30px] border-zinc-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 grid md:grid-cols-3 gap-10 items-center">
                <div className="md:col-span-2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold text-zinc-600 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for work
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
                    Engineering student<br/>
                    <span className="text-zinc-400 font-light">& Tech Enthusiast</span>
                  </h1>
                  
                  <p className="text-zinc-600 leading-relaxed">
                    I am seeking a role in a supportive environment to expand my skills in advanced technologies. I combine an 
                    <strong className="text-zinc-900 font-medium"> Electrical Engineering</strong> background with a passion for 
                    <strong className="text-zinc-900 font-medium"> Software Development</strong>.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-zinc-500 bg-zinc-50 px-3 py-2 rounded-lg border border-zinc-100">
                       <MapPin size={16} /> Jharkhand, India
                    </div>
                    <a href="mailto:ishushreyas@gmail.com" className="flex items-center gap-2 text-sm text-zinc-900 bg-zinc-50 hover:bg-zinc-100 px-3 py-2 rounded-lg border border-zinc-200 transition-colors">
                       <Mail size={16} /> ishushreyas@gmail.com
                    </a>
                  </div>
                </div>

                {/* Profile Image with Graphic Frame */}
                <div className="relative mx-auto md:mx-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                     <img src="/ishushreyas.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  {/* Decorative Circles behind image */}
                  <div className="absolute inset-0 border border-zinc-200 rounded-full scale-110 -z-0 dashed-border"></div>
                  <div className="absolute inset-0 border border-zinc-100 rounded-full scale-125 -z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Career Grid */}
      <section id="education" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Left Column: Education (8 cols) */}
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-xl font-bold text-zinc-900 flex items-center gap-2 mb-6">
                <BookOpen className="text-zinc-400" size={20} /> Academic History
              </h2>
              
              <div className="space-y-4">
                {education.map((item, idx) => (
                  <div key={idx} className="group bg-white p-6 rounded-2xl border border-zinc-200/60 hover:border-zinc-300 transition-all hover:shadow-lg hover:shadow-zinc-100/50 flex flex-col sm:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-zinc-900">{item.level}</h3>
                      <p className="text-sm text-zinc-500">{item.institution}</p>
                      <p className="text-xs text-zinc-400 mt-1">{item.board}</p>
                    </div>
                    <div className="text-right flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                       <span className={`text-xs font-bold px-2 py-1 rounded-md ${item.color}`}>
                         {item.year}
                       </span>
                       <span className="text-sm font-medium text-zinc-900">
                         {item.score}
                       </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Internship Card - Styled differently to stand out */}
              <div className="mt-8 pt-8 border-t border-zinc-200">
                 <h2 className="text-xl font-bold text-zinc-900 flex items-center gap-2 mb-6">
                    <Briefcase className="text-zinc-400" size={20} /> Professional Training
                 </h2>
                 <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                    {/* Graphic overlay */}
                    <div className="absolute top-0 right-0 p-12 bg-white/5 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold">Industrial Training</h3>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">May - July 2025</span>
                      </div>
                      <p className="text-zinc-300 text-sm mb-6">Indo Danish Tool Room, Jamshedpur</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {["PLC Programming", "Machine Maintenance", "Sensor Tech", "AI"].map((skill) => (
                          <span key={skill} className="text-xs font-medium bg-black/30 border border-white/10 px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Column: Strengths & Hobbies (4 cols) */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Strengths */}
              <div className="bg-white p-6 rounded-3xl border border-zinc-200/60 h-full">
                <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Award size={16} /> Strengths
                </h2>
                <ul className="space-y-4">
                  {strengths.map((str, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      {str}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hobbies Mini Card */}
              <div className="bg-white p-6 rounded-3xl border border-zinc-200/60">
                <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Hobbies</h2>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-50 rounded-lg text-sm text-zinc-600 border border-zinc-100">
                    <PenTool size={14} /> Sketching
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-50 rounded-lg text-sm text-zinc-600 border border-zinc-100">
                    <Code size={14} /> Programming
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer / Contact Trigger */}
      <footer id="contact" className="py-12 bg-white border-t border-zinc-100 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">Ready to collaborate?</h2>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 mb-12">
            <div className="flex gap-3">
              <input 
                type="text" placeholder="Name" 
                className="w-1/2 bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" placeholder="Email" 
                className="w-1/2 bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <textarea 
              placeholder="Leave a message..." 
              rows="3"
              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 resize-none"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            ></textarea>
            <button disabled={isSubmitting} className="w-full bg-zinc-900 text-white font-medium py-3 rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
              {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={16} />
            </button>
          </form>

          <div className="flex justify-center gap-6 text-zinc-400">
            <a href="https://github.com/ishushreyas" className="hover:text-zinc-900 transition-colors"><Github size={20}/></a>
            <a href="https://www.linkedin.com/in/ishu-shreyas-776b61297" className="hover:text-zinc-900 transition-colors"><Linkedin size={20}/></a>
            <a href="mailto:ishushreyas@gmail.com" className="hover:text-zinc-900 transition-colors"><Mail size={20}/></a>
          </div>
          <p className="mt-8 text-xs text-zinc-400">© 2025 Ishu Shreyas</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
