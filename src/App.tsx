import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  Code, 
  Bot as Hub, 
  Cpu, 
  Database, 
  Settings, 
  ExternalLink, 
  Github, 
  Linkedin,
  Mail
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container font-headline tracking-tight uppercase">
          Adarsh.dev
        </div>
        <div className="hidden md:flex items-center gap-10 font-headline tracking-tight uppercase text-sm">
          {['Work', 'Tech', 'Path', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-outline font-medium hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://docs.google.com/document/d/1byE-KHmjBNu5j5YWVGncCfBKIT70YSEc/edit?usp=drive_link&ouid=118005030912405614150&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline font-medium hover:text-primary transition-colors"
          >
            Resume
          </a>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <Terminal size={20} className="cursor-pointer hover:scale-110 transition-transform" />
          <Code size={20} className="cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-tertiary-container/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-headline font-bold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-container to-tertiary"
        >
          Adarsh M
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-body text-outline max-w-3xl mx-auto leading-relaxed mb-12"
        >
          AI Engineer | RAG & Multi-Agent Systems | <span className="text-primary">Building production-ready intelligent applications</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
          >
            View My Work
          </a>
          <a
            href="https://github.com/adarshm0602"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-panel ghost-border text-primary font-bold rounded-xl transition-all hover:bg-surface-container-highest/60 active:scale-95"
          >
            GitHub Profile
          </a>
        </motion.div>
      </div>
    </header>
  );
};

const About = () => {
  return (
    <section id="path" className="py-32 px-8 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-square glass-panel ghost-border shadow-2xl">
              <img 
                src="https://picsum.photos/seed/adarsh/800/800" 
                alt="Adarsh M" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 glass-panel rounded-xl ghost-border shadow-xl hidden lg:block">
              <p className="font-headline text-2xl font-bold text-primary">02+</p>
              <p className="text-xs text-outline uppercase tracking-widest">Years of Craft</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h2 className="text-4xl font-headline font-bold mb-8">Architecting Intelligence</h2>
            <p className="text-lg font-body text-on-surface-variant leading-relaxed mb-10">
              Computer Science Engineering student at JSS Science and Technology University (graduating June 2026), specializing in AI Engineering. I build RAG pipelines, multi-agent AI applications, NLP solutions, and LLM-powered systems — with a MERN-stack foundation that lets me ship end-to-end, production-ready products. Experienced with LangChain, Hugging Face Transformers, and LoRA fine-tuning.
            </p>
            <div className="mb-12">
              <h3 className="text-sm font-headline text-outline uppercase tracking-widest mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'RAG Pipelines', 'Multi-Agent Systems', 'LangChain', 'NLP / ML', 'React', 'MERN Stack'].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-surface-container-high text-primary text-sm font-medium ghost-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-headline text-outline uppercase tracking-widest mb-4">Academic Path</h3>
              <div className="flex gap-6 items-start">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Computer Science & Engineering</h4>
                  <p className="text-sm text-outline">B.E. · JSS Science and Technology University, Mysuru · CGPA 8.1</p>
                  <p className="text-sm text-outline">Expected graduation: June 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Community Members Connect',
      description: 'Built a 3-agent CLI pipeline (Watcher → Matcher → Outreach) that scans community feeds, extracts seeking/offering signals with Groq (Llama), and drafts personalized intro DMs using hybrid TF-IDF pre-filtering and LLM-based matching.',
      tags: ['Python', 'Groq API', 'Multi-Agent'],
      image: 'https://picsum.photos/seed/community/600/400',
      github: 'https://github.com/adarshm0602/Community-Members-Connect-'
    },
    {
      title: 'RAG Evaluation Dataset Builder',
      description: 'Built a timestamp-grounded RAG evaluation dataset (20 QA pairs, 3 difficulty levels) from ML/DL video transcripts via an automated Python pipeline, with a retrieval harness benchmarking multilingual embeddings using Hit@K and MRR over 123 chunks.',
      tags: ['Python', 'RAG', 'Evaluation'],
      image: 'https://picsum.photos/seed/rag/600/400',
      github: 'https://github.com/adarshm0602/Golden-Dataset-for-Evaluating-RAG-'
    },
    {
      title: 'Multilingual Sentiment Analysis',
      description: 'Built a 4-stage NLP pipeline (language detection → Kannada transliteration → neural translation → DistilBERT sentiment) to classify reviews across Kannada script, Romanized Kannada, and English, with an interactive Streamlit demo.',
      tags: ['Python', 'NLP', 'Streamlit'],
      image: 'https://picsum.photos/seed/nlp/600/400',
      github: 'https://github.com/adarshm0602/Multilingual-sentiment-analysis-of-reviews.-'
    },
    {
      title: 'Text Topic Analysis',
      description: 'Topic analysis tool using NLP and machine learning algorithms to uncover patterns in unstructured text data.',
      tags: ['Python', 'NLP', 'ML'],
      image: 'https://picsum.photos/seed/clustering/600/400',
      github: 'https://github.com/adarshm0602/Text-topic-analysis'
    },
    {
      title: 'Match My Car',
      description: 'Full-stack car discovery platform with user authentication, filtering, and responsive UI; deployed frontend on Vercel and backend on Render.',
      tags: ['MERN', 'Full-Stack', 'Vercel'],
      image: 'https://picsum.photos/seed/cars/600/400',
      github: 'https://github.com/adarshm0602/Match-my-Car',
      demo: 'https://match-my-car.vercel.app'
    },
    {
      title: 'Cricket Score Predictor',
      description: 'Developed a web app to predict IPL match scores using historical match data and a Random Forest regression model, deployed with Flask on Render.',
      tags: ['Python', 'Random Forest', 'Flask'],
      image: 'https://picsum.photos/seed/cricket/600/400',
      github: 'https://github.com/adarshm0602/IPL',
      demo: 'https://ipl-ur6z.onrender.com/'
    },
  ];

  return (
    <section id="work" className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-headline font-bold mb-4">Selected Deployments</h2>
            <p className="text-outline">Coded experiments in AI and Scalability.</p>
          </div>
          <Hub size={40} className="text-primary/20 hidden md:block" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel rounded-xl overflow-hidden flex flex-col ghost-border group"
            >
              <div className="h-48 overflow-hidden bg-surface-container-high relative">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-surface-container-highest rounded text-[10px] font-bold text-primary uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                    <Github size={16} /> Code
                  </a>
                  {(project as any).demo && (
                    <a href={(project as any).demo} target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      icon: <Code size={32} />,
      skills: ['Java', 'Python', 'C', 'JavaScript', 'HTML / CSS', 'SQL']
    },
    {
      title: 'Web & Full-Stack',
      icon: <Settings size={32} />,
      skills: ['React', 'Node.js / Express.js', 'MongoDB / MySQL', 'REST APIs']
    },
    {
      title: 'AI / ML / NLP',
      icon: <Cpu size={32} />,
      skills: ['Scikit-learn', 'NLTK', 'Hugging Face Transformers', 'LangChain', 'RAG Pipelines', 'LoRA Fine-tuning']
    },
    {
      title: 'Tools & Platforms',
      icon: <Database size={32} />,
      skills: ['Git / GitHub', 'Vercel / Render', 'AWS (S3, EC2)', 'Streamlit', 'ComfyUI / Flux']
    }
  ];

  return (
    <section id="tech" className="py-32 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-headline font-bold mb-16">My Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 glass-panel rounded-xl ghost-border"
            >
              <div className="text-primary mb-6">{cat.icon}</div>
              <h3 className="text-lg font-headline font-bold mb-4">{cat.title}</h3>
              <ul className="space-y-3 text-outline font-body">
                {cat.skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const links = [
    { icon: <Github size={24} />, label: 'GitHub', href: 'https://github.com/adarshm0602' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/adarsh-m-679724248/' },
    { icon: <Mail size={24} />, label: 'adarshm0602@gmail.com', href: 'mailto:adarshm0602@gmail.com' },
  ];

  return (
    <section id="contact" className="py-32 px-8 bg-surface-container-lowest relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl font-headline font-bold mb-4">Get In Touch</h2>
        <p className="text-outline mb-16">Open for AI engineering internships and roles — with end-to-end product delivery experience.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center gap-3 px-8 py-5 glass-panel rounded-xl ghost-border text-on-surface hover:text-primary hover:border-primary/30 transition-all"
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background w-full py-12 px-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-headline text-on-surface opacity-50">
          Adarsh.dev
        </div>
        <p className="font-body text-sm tracking-wide text-primary text-center md:text-left">
          © {new Date().getFullYear()} Adarsh M • Crafted with code
        </p>
        <div className="flex gap-8 font-body text-sm tracking-wide">
          <a href="https://github.com/adarshm0602" target="_blank" rel="noopener noreferrer" className="text-outline hover:text-on-surface transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/adarsh-m-679724248/" target="_blank" rel="noopener noreferrer" className="text-outline hover:text-on-surface transition-colors">LinkedIn</a>
          <a href="mailto:adarshm0602@gmail.com" className="text-outline hover:text-on-surface transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
