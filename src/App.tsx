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
        <div className="hidden md:flex items-center gap-6 font-headline tracking-tight uppercase text-sm">
          {['Work', 'Experience', 'Tech', 'Path', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-outline font-medium hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="/Adarsh-M-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline font-medium hover:text-primary transition-colors"
          >
            Resume
          </a>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <a href="/Adarsh-M-Resume.pdf" target="_blank" rel="noopener noreferrer" className="md:hidden text-sm font-semibold">Resume ↗</a>
          <a href="https://github.com/adarshm0602" target="_blank" rel="noopener noreferrer" aria-label="Adarsh on GitHub"><Github size={20} /></a>
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
          Software & AI Engineer · <span className="text-primary">Python, FastAPI, RAG & LLM applications</span>
        </motion.p>
        <p className="text-on-surface-variant mb-4 max-w-2xl mx-auto">Associate Forward Deployed Engineer intern at 1 Hat, building the Triage Engine prototype.</p>
        <p className="text-sm text-primary mb-10">Open to full-time software and AI roles · Bangalore or remote</p>
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
            href="/Adarsh-M-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass-panel ghost-border text-primary font-bold rounded-xl transition-all hover:bg-surface-container-highest/60 active:scale-95"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </header>
  );
};

const Experience = () => (
  <section id="experience" className="py-24 md:py-32 px-8 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <p className="text-primary text-sm uppercase tracking-widest mb-4">Professional experience</p>
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
        <div>
          <h2 className="text-4xl font-headline font-bold mb-3">Building Triage Engine at 1 Hat</h2>
          <p className="text-on-surface-variant">Associate Forward Deployed Engineer · Internship</p>
        </div>
        <p className="text-sm text-outline">August 2026 – Present · Scheduled through 31 October 2026</p>
      </div>
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 glass-panel ghost-border rounded-2xl p-8">
          <h3 className="text-2xl font-headline font-bold mb-5">A triage-engine prototype</h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">Triage Engine combines symptom pathways, LLM-based extraction and follow-up questions in a Python/FastAPI backend. My work spans the engine, persistence, testing and kiosk integration contracts.</p>
          <ul className="space-y-4 text-on-surface-variant leading-relaxed list-disc pl-5">
            <li>Improved response latency with row-oriented SQLite storage, caching and deterministic handling of simple answers.</li>
            <li>Fixed handling of uncertain and numeric answers, preserving answer evidence and reducing repeated questions.</li>
            <li>Added regression coverage and checked two live synthetic test journeys to reproduce and verify behavior.</li>
            <li>Documented integration contracts and reproducible evidence for the kiosk integration layer.</li>
          </ul>
          <p className="text-sm text-outline mt-6">Prototype engineering work; these results do not represent clinical validation or release approval.</p>
        </div>
        <div className="md:col-span-2 glass-panel ghost-border rounded-2xl p-8">
          <p className="text-sm text-outline mb-3">Median API response latency</p>
          <p className="text-5xl font-headline font-bold text-primary mb-2">50% lower</p>
          <p className="text-on-surface-variant mb-8">17.0 seconds → 8.5 seconds</p>
          <div className="space-y-5" aria-label="Baseline latency 17 seconds; optimized profile latency 8.5 seconds">
            <div><div className="flex justify-between text-sm mb-2"><span>Baseline</span><span>17.0s</span></div><div className="h-3 bg-outline/40 rounded-full" /></div>
            <div><div className="flex justify-between text-sm mb-2"><span>Optimized profile</span><span>8.5s</span></div><div className="h-3 w-1/2 bg-primary rounded-full" /></div>
          </div>
          <p className="text-sm text-outline leading-relaxed mt-8">Controlled comparison across 16 synthetic test turns per profile, measuring message-to-next-response API latency.</p>
          <div className="flex flex-wrap gap-2 mt-6">{['Python', 'FastAPI', 'SQLite', 'LLMs', 'pytest'].map(skill => <span key={skill} className="text-xs px-3 py-1.5 rounded-full bg-surface-container-high text-primary">{skill}</span>)}</div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => {
  return (
    <section id="path" className="py-32 px-8 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="glass-panel ghost-border rounded-2xl p-8 md:p-10">
              <Terminal size={32} className="text-primary mb-8" aria-hidden="true" />
              <p className="text-xs uppercase tracking-widest text-outline mb-4">From learning to building</p>
              <h3 className="text-3xl font-headline font-bold mb-8">Software with measurable results.</h3>
              <dl className="space-y-6">
                <div><dt className="text-sm text-outline">Current experience</dt><dd className="text-lg mt-1">1 Hat · Forward Deployed Engineering</dd></div>
                <div><dt className="text-sm text-outline">Education</dt><dd className="text-lg mt-1">B.E. Computer Science · Class of 2026</dd></div>
                <div><dt className="text-sm text-outline">Focus</dt><dd className="text-lg mt-1">Backend systems, applied AI & evaluation</dd></div>
              </dl>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 min-w-0"
          >
            <h2 className="text-4xl font-headline font-bold mb-8">About Me</h2>
            <p className="text-lg font-body text-on-surface-variant leading-relaxed mb-10">
              I graduated from JSS Science and Technology University in June 2026 with a B.E. in Computer Science. During my Associate Forward Deployed Engineer internship at 1 Hat, I have been developing Triage Engine, a prototype built with Python, FastAPI, LLM extraction and SQLite. My work focuses on response latency, answer handling, regression testing and integration. I also build RAG evaluation tools, multi-agent applications and full-stack web projects.
            </p>
            <div className="mb-12">
              <h3 className="text-sm font-headline text-outline uppercase tracking-widest mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'FastAPI', 'LLM Workflows', 'RAG Evaluation', 'SQLite', 'Regression Testing', 'React'].map(skill => (
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
                  <p className="text-sm text-outline">Graduated: June 2026</p>
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
      description: 'Built a multilingual review-analysis application with a Streamlit interface. On 1,154 Kannada reviews, an SVM achieved 83% macro-F1 versus 81% for Naive Bayes using an 80/20 split; a separate 50-review evaluation reached 92% accuracy.',
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
            <h2 className="text-4xl font-headline font-bold mb-4">Selected Projects</h2>
            <p className="text-outline">Public projects in applied AI, evaluation and full-stack development.</p>
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
      skills: ['FastAPI / Flask', 'React', 'Node.js / Express.js', 'SQLite / MySQL / MongoDB', 'REST APIs']
    },
    {
      title: 'AI / ML / NLP',
      icon: <Cpu size={32} />,
      skills: ['Scikit-learn', 'NLTK', 'Hugging Face Transformers', 'LangChain', 'RAG Evaluation (Hit@K / MRR)', 'LLM Extraction']
    },
    {
      title: 'Tools & Platforms',
      icon: <Database size={32} />,
      skills: ['Git / GitHub', 'pytest / Regression Testing', 'Vercel / Render', 'Streamlit']
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
        <p className="text-outline mb-16">Open to full-time software engineering, AI engineering and forward deployed engineering roles in Bangalore or remote. Available to join within one week.</p>
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
              className="flex items-center justify-center gap-3 px-4 sm:px-8 py-5 glass-panel rounded-xl ghost-border text-on-surface hover:text-primary hover:border-primary/30 transition-all"
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
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
