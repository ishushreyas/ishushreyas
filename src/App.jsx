import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, 
  BookOpen, Award, User, Briefcase, 
  PenTool, Code, Zap, Cpu, ArrowUpRight
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
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
      icon: <Zap size={18} />
    },
    {
      level: "Intermediate (12th)",
      institution: "St. Michael Anglo Indian School",
      board: "CBSE",
      year: "2023",
      score: "72.2%",
      icon: <BookOpen size={18} />
    },
    {
      level: "Matriculation (10th)",
      institution: "St. Michael Anglo Indian School",
      board: "CBSE",
      year: "2021",
      score: "94.4%",
      icon: <BookOpen size={18} />
    },
  ];

  const internship = {
    title: "Industrial Training",
    place: "Indo Danish Tool Room, Jamshedpur",
    duration: "May - July 2025",
    skills: ["PLC Programming", "Machine Maintenance", "Sensor Technology", "Artificial Intelligence"]
  };

  const strengths = [
    "Quick Learner",
    "Hardworking",
    "Strong Problem-Solving",
    "Teamwork & Collaboration",
    "Positive Attitude"
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-50/50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-emerald-50/50 rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out 
        ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <span className="font-semibold tracking-tight text-zinc-800 text-lg">ishu.shreyas</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#profile" className="hover:text-zinc-900 transition-colors">Profile</a>
            <a href="#education" className="hover:text-zinc-900 transition-colors">Education</a>
            <a href="#training" className="hover:text-zinc-900 transition-colors">Training</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero / Objective Section */}
      <section id="profile" className="pt-40 pb-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              Open to Opportunities
            </div>
            
            <h1 className="text-5xl font-semibold text-zinc-900 tracking-tight">
              Ishu Shreyas
            </h1>
            
            <p className="text-lg text-zinc-600 leading-relaxed font-light">
              I'm looking for a role in a supportive, growth-oriented environment where I can expand my skills in advanced technologies, gain hands-on experience, and contribute to the success of the team.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm text-zinc-600 shadow-sm">
                <MapPin size={16} /> Jharkhand, India
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm text-zinc-600 shadow-sm">
                <Mail size={16} /> ishushreyas@gmail.com
              </span>
            </div>
          </div>

          {/* Profile Card / Photo Placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-sm ml-auto rounded-3xl overflow-hidden bg-zinc-200 relative shadow-2xl shadow-zinc-200/50">
               <img 
                 src="/ishushreyas.jpg" 
                 alt="Ishu Shreyas" 
                 className="w-full h-full object-cover"
               />
               {/* Hobbies Float */}
               <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm">
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-2 font-semibold">Hobbies</p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-800">
                      <PenTool size={16} className="text-zinc-400" /> Sketching
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-800">
                      <Code size={16} className="text-zinc-400" /> Programming
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-10 flex items-center gap-2">
            <BookOpen className="text-zinc-400" /> Academic Background
          </h2>

          <div className="grid gap-6">
            {education.map((edu, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-zinc-50 border border-zinc-100 rounded-2xl hover:border-zinc-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-zinc-600 group-hover:text-emerald-600 transition-colors">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-zinc-900">{edu.level}</h3>
                    <p className="text-zinc-500">{edu.institution}</p>
                    <p className="text-xs text-zinc-400 mt-1">{edu.board}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="inline-block px-3 py-1 bg-zinc-200 rounded-lg text-sm font-medium text-zinc-700">
                    {edu.year}
                  </div>
                  <div className="text-sm text-zinc-500 mt-1 font-medium">
                    Score: <span className="text-zinc-900">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship & Strengths Grid */}
      <section id="training" className="py-20 bg-zinc-50/50 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Internship Card */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-lg shadow-zinc-100">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-zinc-400" />
                <h2 className="text-xl font-semibold">Internship & Training</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-zinc-900">{internship.place}</h3>
                <p className="text-zinc-500 text-sm mb-4">{internship.duration}</p>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Strengths Card */}
            <div className="bg-zinc-900 text-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-zinc-400" />
                <h2 className="text-xl font-semibold">Key Strengths</h2>
              </div>
              
              <ul className="space-y-4">
                {strengths.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-4 bg-zinc-50 rounded-full mb-6">
            <Mail className="text-zinc-400" size={24} />
          </div>
          <h2 className="text-3xl font-semibold text-zinc-900 mb-2">Get in Touch</h2>
          <p className="text-zinc-500 mb-8">Feel free to reach out for collaborations or opportunities.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
             <a href="mailto:ishushreyas@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-50 rounded-xl hover:bg-zinc-100 transition-colors border border-zinc-100 text-zinc-700">
                <Mail size={18} /> ishushreyas@gmail.com
             </a>
             <div className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-50 rounded-xl border border-zinc-100 text-zinc-700 cursor-default">
                <Phone size={18} /> +91 9693446899
             </div>
          </div>

          <form onSubmit={handleSubmit} className="text-left space-y-4 max-w-lg mx-auto bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <textarea 
              rows="4" 
              placeholder="Message" 
              className="w-full bg-white border border-zinc-200 rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400 resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            
            <button 
              disabled={isSubmitting}
              className="w-full bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-zinc-800 transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 text-center text-zinc-400 text-sm">
          © {new Date().getFullYear()} Ishu Shreyas. Address: Godda / Jamshedpur, Jharkhand.
        </div>
      </footer>
    </div>
  );
};

export default App;
                                                                                   
