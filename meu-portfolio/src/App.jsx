import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Smartphone, Award, Briefcase, User, 
  Lightbulb, Code, Server, Database, GitBranch, Download, 
  GraduationCap, Bot, Cpu, Layers, ShieldCheck, CheckCircle2, 
  MapPin, Calendar, Sparkles, ExternalLink, ChevronRight, Activity
} from 'lucide-react';

const portfolioData = {
  name: "Luan Vitorio Da Silva",
  headline: "Desenvolvedor Full Stack & AI Engineer",
  subHeadline: "Java, Spring Boot, Node.js, Angular | LLMs, Agentic AI & RAG | Microsserviços & Cloud",
  location: "Curitiba, Paraná, Brasil",
  about: "Desenvolvedor de Software com atuação Full Stack e foco em Engenharia de IA, especializado no ecossistema Java (Spring Boot), Node.js e Angular. Experiência no desenho de microsserviços distribuídos, bancos relacionais e NoSQL (PostgreSQL, MongoDB, Redis) e orquestração de agentes autônomos e LLMs. Forte vivência em práticas ágeis, pirâmide de testes, integração contínua (CI/CD) e monitoramento com foco em performance, resiliência e entrega contínua de valor.",
  objective: "Busco oportunidades como Desenvolvedor Backend Java ou Full Stack, em empresas que valorizem colaboração, inovação e aprendizado contínuo. Tenho como propósito contribuir com comprometimento, qualidade e foco em resultados, entregando soluções que gerem valor real para o negócio. Desejo atuar em um ambiente que estimule o crescimento profissional, a troca de conhecimento e a adoção de boas práticas de engenharia de software, sempre com ênfase em qualidade, eficiência e melhoria constante.",
  contact: {
    email: "contato.luandeveloper@gmail.com",
    phone: "(41) 98422-1038",
    linkedin: "https://www.linkedin.com/in/luan-vitorio-da-silva-66a820245",
    github: "https://github.com/LuanvSilva",
    location: "Curitiba - PR"
  },
  
  experiences: [
    {
      company: "CI&T SOFTWARE S/A",
      role: "Desenvolvedor Full Stack",
      period: "Janeiro de 2026 – Presente",
      location: "Curitiba, PR",
      current: true,
      description: "Atuação no desenvolvimento full stack de soluções corporativas escaláveis e engenharia de software de alta performance. Aplicação de microsserviços modernos, ecossistema Java/Spring Boot, Node.js e Angular, arquitetura resiliente, pipelines de CI/CD e integração com agentes autônomos e LLMs.",
      highlights: [
        "Desenvolvimento e sustentação de microsserviços distribuídos de alta disponibilidade.",
        "Integração contínua (CI/CD), observabilidade e monitoramento focado em resiliência.",
        "Implementação de boas práticas de Clean Architecture e Clean Code."
      ],
      technologies: ["Java", "Spring Boot", "Node.js", "Angular", "Microsserviços", "Cloud", "Agentic AI", "Docker", "CI/CD"]
    },
    {
      company: "blueEz / Monditech",
      role: "Desenvolvedor Full Stack",
      period: "Julho de 2022 – Janeiro de 2026 (3 anos e 7 meses)",
      location: "São José dos Pinhais, PR",
      current: false,
      description: "Desenvolvimento de aplicações ponta a ponta com foco no ecossistema Java e Node.js, modelagem de dados relacionais e NoSQL, criação e consumo de APIs REST/SOAP, automação de testes e entrega contínua com metodologias ágeis.",
      highlights: [
        "Construção de APIs e microsserviços escaláveis em Java (Spring Boot) e Node.js.",
        "Desenvolvimento de interfaces modernas e responsivas utilizando Angular e TypeScript.",
        "Gerenciamento de bancos de dados PostgreSQL, MySQL, MongoDB e Redis.",
        "Automação de fluxos de deploy com Docker e Gitflow."
      ],
      technologies: ["Java", "Spring Boot", "Node.js", "Angular", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kafka"]
    }
  ],

  education: [
    {
      institution: "Full Cycle",
      degree: "MBA em Engenharia de Software com IA",
      period: "Junho de 2026 – Junho de 2027",
      status: "Em andamento",
      badge: "Pós-Graduação / MBA",
      description: "Especialização avançada abordando engenharia de software moderna integrada a Inteligência Artificial, orquestração de agentes autônomos, LLMs, arquitetura de microsserviços de altíssima escala, Domain-Driven Design (DDD) e computação em nuvem."
    },
    {
      institution: "UniCesumar",
      degree: "Curso Superior de Tecnologia (CST) em Análise e Desenvolvimento de Sistemas",
      period: "Maio de 2022 – Dezembro de 2024",
      status: "Concluído",
      badge: "Graduação",
      description: "Formação superior sólida com ênfase em engenharia de software, modelagem e administração de bancos de dados, algoritmos, estruturas de dados, padrões de projeto e desenvolvimento de aplicações corporativas."
    }
  ],

  skillCategories: [
    {
      name: "IA & LLMs",
      icon: Bot,
      skills: [
        { name: "Agentic AI & Agentes Autônomos", level: 92 },
        { name: "RAG (Retrieval-Augmented Gen)", level: 90 },
        { name: "Integração de LLMs & APIs", level: 92 },
        { name: "Model Context Protocol (MCP)", level: 88 },
        { name: "Claude Code & Prompts/Skills", level: 90 }
      ]
    },
    {
      name: "Backend",
      icon: Server,
      skills: [
        { name: "Java (11+)", level: 92 },
        { name: "Spring Boot", level: 90 },
        { name: "Node.js", level: 90 },
        { name: "Microsserviços Distribuídos", level: 88 },
        { name: "APIs REST & SOAP", level: 95 },
        { name: "Apache Kafka", level: 82 }
      ]
    },
    {
      name: "Frontend",
      icon: Code,
      skills: [
        { name: "Angular", level: 88 },
        { name: "TypeScript", level: 92 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "React", level: 78 },
        { name: "HTML5 & Tailwind CSS", level: 88 }
      ]
    },
    {
      name: "Bancos de Dados",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 86 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 85 }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: Layers,
      skills: [
        { name: "Docker", level: 88 },
        { name: "Kubernetes & Istio", level: 78 },
        { name: "GCP & Azure DevOps", level: 80 },
        { name: "CI/CD Pipelines", level: 85 }
      ]
    },
    {
      name: "Observabilidade & Qualidade",
      icon: Activity,
      skills: [
        { name: "Dynatrace & Grafana", level: 85 },
        { name: "Clean Architecture & Clean Code", level: 92 },
        { name: "Testes Automatizados (JUnit, Jest)", level: 88 },
        { name: "Gitflow & Práticas Ágeis / Scrum", level: 92 }
      ]
    }
  ],

  radarMetrics: [
    { subject: 'IA & LLMs', A: 92, fullMark: 100 },
    { subject: 'Backend (Java/Node)', A: 93, fullMark: 100 },
    { subject: 'Frontend (Angular/TS)', A: 88, fullMark: 100 },
    { subject: 'Bancos de Dados', A: 88, fullMark: 100 },
    { subject: 'Cloud & DevOps', A: 82, fullMark: 100 },
    { subject: 'Observabilidade', A: 85, fullMark: 100 },
    { subject: 'Qualidade & Clean Code', A: 92, fullMark: 100 },
  ],

  certifications: [
    {
      title: "Model Context Protocol: Advanced Topics",
      issuer: "Anthropic",
      year: "2026",
      category: "IA & Agentes",
      highlight: true
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      year: "2026",
      category: "IA & Agentes",
      highlight: true
    },
    {
      title: "Building with the Claude API",
      issuer: "Anthropic",
      year: "2026",
      category: "IA & LLMs",
      highlight: true
    },
    {
      title: "Dynatrace Essentials",
      issuer: "Dynatrace",
      year: "2026",
      category: "Observabilidade",
      highlight: true
    },
    {
      title: "Preparando sua Organização para Agentes de IA",
      issuer: "AI & Innovation",
      year: "2026",
      category: "IA & Estratégia",
      highlight: false
    },
    {
      title: "Introduction to Agent Skills",
      issuer: "Anthropic / AI Education",
      year: "2026",
      category: "IA & Agentes",
      highlight: false
    },
    {
      title: "Santander 2024 - Backend com Java",
      issuer: "Santander / DIO",
      year: "2024",
      category: "Backend",
      highlight: false
    },
    {
      title: "Fundamentos da Negociação com IA Generativa",
      issuer: "LinkedIn Learning",
      year: "2024",
      category: "IA Generativa",
      highlight: false
    },
    {
      title: "Construindo uma Mentalidade de Adaptabilidade na Era da IA",
      issuer: "LinkedIn Learning",
      year: "2024",
      category: "Inovação",
      highlight: false
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      issuer: "Universidade Cesumar",
      year: "2024",
      category: "Graduação",
      highlight: false
    },
    {
      title: "Introdução à Análise Macroeconômica",
      issuer: "Coursera",
      year: "2021",
      category: "Economia",
      highlight: false
    }
  ],

  projects: [
    {
      title: "NutriMaxIA - Geração de Planos com IA & RAG",
      description: "Sistema inteligente para geração de planos nutricionais e treinos personalizados utilizando Retrieval-Augmented Generation (RAG), vetores e orquestração de LLMs com alta precisão e performance.",
      tags: ["Python", "RAG", "Gemini API", "FastAPI", "Docker", "PostgreSQL", "Redis"],
      githubLink: "https://github.com/LuanvSilva/NutriMaxIA",
      deployLink: null,
      featured: true
    },
    {
      title: "Services - Sistema de Gestão em Microsserviços",
      description: "Aplicação web completa para gerenciamento interno de serviços, tarefas e equipes, arquitetada com microsserviços desacoplados, autenticação JWT e testes automatizados.",
      tags: ["Node.js", "JavaScript", "HTML5", "JWT", "Docker", "CSS3", "Jest"],
      githubLink: "https://github.com/LuanvSilva/Services",
      deployLink: null,
      featured: false
    },
    {
      title: "CarWash API - Back-end de Serviços Automotivos",
      description: "Sistema back-end robusto construído com Java 22 e Spring Boot para centralizar, automatizar e otimizar o fluxo de gestão de agendamentos e atendimento a clientes.",
      tags: ["Java 22", "Spring Boot", "PostgreSQL", "Docker", "REST API", "Clean Architecture"],
      githubLink: "https://github.com/LuanvSilva/back-end-carwash",
      deployLink: null,
      featured: false
    }
  ]
};

const SectionWrapper = ({ children, id, className = '' }) => (
  <motion.section
    id={id}
    className={`py-20 md:py-28 px-4 relative ${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-6xl mx-auto">{children}</div>
  </motion.section>
);

const SectionTitle = ({ icon: Icon, badge, children }) => (
  <div className="text-center mb-14">
    {badge && (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 rounded-full">
        <Sparkles size={13} />
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center justify-center gap-3">
      {Icon && <Icon className="text-cyan-400" size={36} />}
      {children}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-4 rounded-full"></div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Sobre' },
    { href: '#experience', label: 'Experiência' },
    { href: '#education', label: 'Formação' },
    { href: '#skills', label: 'Tecnologias' },
    { href: '#projects', label: 'Projetos' },
    { href: '#certifications', label: 'Certificações' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800/80 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            &lt;Luan.Dev /&gt;
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="/docs/LuanCv.pdf" 
              download 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
            >
              <Download size={14} />
              Currículo
            </a>
          </nav>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/98 border-b border-slate-800 px-6 py-4 space-y-3"
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 font-medium py-2 border-b border-slate-800/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a 
                href="/docs/LuanCv.pdf" 
                download 
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-cyan-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-cyan-400 transition-colors"
              >
                <Download size={16} />
                Download CV (PDF)
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = [
    "Desenvolvedor Full Stack & AI Engineer",
    "Java (Spring Boot) & Node.js Specialist",
    "Angular & TypeScript Developer",
    "Agentic AI, RAG & LLMs Orchestration",
    "Arquiteturas de Microsserviços & Cloud"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [subtitles.length]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20">
      {/* Dynamic Background Grid & Ambient Glows */}
      <div 
        className="absolute inset-0 z-0 opacity-15" 
        style={{
          backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
          backgroundSize: '3rem 3rem',
        }}
      ></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        className="z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 rounded-full shadow-inner">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Disponível para novos desafios e soluções inovadoras
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Olá, eu sou <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            {portfolioData.name}
          </span>
        </h1>

        <div className="h-14 mt-4 flex items-center justify-center text-lg sm:text-2xl text-cyan-300 font-mono">
          <AnimatePresence mode="wait">
            <motion.p
              key={subtitleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="px-3"
            >
              {subtitles[subtitleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Especializado na construção de microsserviços distribuídos de alta resiliência, 
          ecossistema Java/Node.js, frontend com Angular e soluções avançadas com Inteligência Artificial e Agentes Autônomos.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a 
            href="#projects" 
            className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all flex items-center gap-2"
          >
            <Briefcase size={18} />
            Ver Projetos
          </a>
          <a 
            href="#contact" 
            className="px-7 py-3.5 bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl hover:bg-slate-700 hover:border-cyan-500/50 hover:text-white transition-all flex items-center gap-2"
          >
            <Mail size={18} />
            Fale Comigo
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center items-center gap-4">
          <a 
            href={portfolioData.contact.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-slate-800/80 border border-slate-700 rounded-full hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all text-slate-300 hover:text-white shadow-md"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={portfolioData.contact.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 bg-slate-800/80 border border-slate-700 rounded-full hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all text-slate-300 hover:text-white shadow-md"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={`mailto:${portfolioData.contact.email}`} 
            className="p-3 bg-slate-800/80 border border-slate-700 rounded-full hover:bg-cyan-500 hover:border-cyan-500 hover:scale-110 transition-all text-slate-300 hover:text-white shadow-md"
            title="E-mail"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      {/* Down indicator */}
      <motion.div 
        className="absolute bottom-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <a href="#about" className="text-cyan-400 hover:text-cyan-300 transition-colors p-2" aria-label="Ir para Sobre Mim">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

const About = () => (
  <SectionWrapper id="about" className="bg-slate-900 border-t border-slate-800/60">
    <SectionTitle icon={User} badge="Perfil Profissional">Sobre Mim</SectionTitle>
    <div className="grid lg:grid-cols-12 gap-10 items-center">
      
      {/* Profile Image & Quick Highlights */}
      <div className="lg:col-span-5 flex flex-col items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-slate-800 border-2 border-cyan-400/50 overflow-hidden shadow-2xl">
            <img 
              src="/docs/Luan.jpg" 
              alt="Luan Vitorio Da Silva" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-400 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700/60">
          <MapPin size={16} className="text-cyan-400" />
          <span>Curitiba, Paraná, Brasil</span>
        </div>
      </div>

      {/* Bio Text & Pillars */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-700/50 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
            <Sparkles className="text-cyan-400" size={24} />
            Desenvolvedor Full Stack & AI Engineer
          </h3>
          
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            {portfolioData.about}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-sm font-bold text-slate-200">Backend & Microsserviços</h4>
                <p className="text-xs text-slate-400">Java (Spring Boot), Node.js, Kafka, APIs REST/SOAP</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <Bot className="text-cyan-400 shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-sm font-bold text-slate-200">Engenharia de IA & LLMs</h4>
                <p className="text-xs text-slate-400">Agentic AI, RAG, Claude API, MCP, Integrações Inteligentes</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <Code className="text-cyan-400 shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-sm font-bold text-slate-200">Frontend Moderno</h4>
                <p className="text-xs text-slate-400">Angular, TypeScript, JavaScript, React</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <Layers className="text-cyan-400 shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-sm font-bold text-slate-200">DevOps & Observabilidade</h4>
                <p className="text-xs text-slate-400">Docker, Kubernetes, Dynatrace, Grafana, CI/CD</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="/docs/LuanCv.pdf" 
              download 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all hover:scale-102"
            >
              <Download size={18} />
              Baixar Currículo Completo (PDF)
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold py-3 px-4 transition-colors"
            >
              Entrar em contato <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>

    </div>
  </SectionWrapper>
);

const Experience = () => (
  <SectionWrapper id="experience" className="bg-slate-950">
    <SectionTitle icon={Briefcase} badge="Trajetória">Experiência Profissional</SectionTitle>
    <div className="space-y-8 max-w-4xl mx-auto">
      {portfolioData.experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
        >
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">{exp.company}</h3>
                {exp.current && (
                  <span className="px-3 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Atual
                  </span>
                )}
              </div>
              <p className="text-cyan-400 font-medium text-lg mt-0.5">{exp.role}</p>
            </div>
            
            <div className="flex flex-col sm:items-end text-sm text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-mono">
                <Calendar size={14} className="text-cyan-400" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                <MapPin size={13} />
                {exp.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base leading-relaxed mb-5">
            {exp.description}
          </p>

          {/* Highlights */}
          {exp.highlights && (
            <div className="space-y-2 mb-6">
              {exp.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {exp.technologies.map(tech => (
              <span 
                key={tech} 
                className="bg-slate-800 text-cyan-300 border border-slate-700/80 text-xs font-medium px-3 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

const Education = () => (
  <SectionWrapper id="education" className="bg-slate-900">
    <SectionTitle icon={GraduationCap} badge="Acadêmico">Formação Acadêmica</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {portfolioData.education.map((edu, idx) => (
        <motion.div
          key={idx}
          className="bg-slate-800/70 border border-slate-700/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                {edu.badge}
              </span>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                edu.status === 'Em andamento' 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              }`}>
                {edu.status}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-1">{edu.degree}</h3>
            <p className="text-cyan-400 font-semibold text-base mb-3">{edu.institution}</p>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {edu.description}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Calendar size={14} className="text-cyan-400" />
            <span>{edu.period}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <SectionWrapper id="skills" className="bg-slate-950">
      <SectionTitle icon={Code} badge="Competências">Tecnologias e Stack Técnica</SectionTitle>

      {/* Radar & Overview Chart */}
      <div className="grid lg:grid-cols-12 gap-8 items-center mb-16 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="lg:col-span-6 h-80 sm:h-96">
          <h3 className="text-lg font-bold text-slate-200 text-center mb-2 flex items-center justify-center gap-2">
            <Sparkles size={18} className="text-cyan-400" />
            Visão Geral de Competências
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={portfolioData.radarMetrics}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 11 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'transparent' }} />
              <Radar name="Domínio" dataKey="A" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.5} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <h3 className="text-xl font-bold text-slate-100 mb-3">Engenharia de Software de Alto Impacto</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Abordagem moderna combinando robustez de back-end corporativo em Java e Node.js com a flexibilidade de microsserviços distribuídos e o poder transformador de Inteligência Artificial Generativa e Agentes Autônomos.
          </p>
          
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
              <span className="text-2xl font-extrabold text-cyan-400">4+ anos</span>
              <p className="text-xs text-slate-400 mt-0.5">Experiência com Dev Full Stack</p>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
              <span className="text-2xl font-extrabold text-emerald-400">100%</span>
              <p className="text-xs text-slate-400 mt-0.5">Foco em Qualidade & AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {portfolioData.skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === idx;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                isActive 
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105' 
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Icon size={16} />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Selected Category Skills Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {portfolioData.skillCategories[selectedCategory].skills.map((skill, i) => (
            <div 
              key={i} 
              className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-slate-200 text-sm">{skill.name}</span>
                <span className="font-mono text-xs text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-500/40 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
    whileHover={{ y: -5 }}
  >
    <div className="p-6 sm:p-7 flex-1 flex flex-col">
      {project.featured && (
        <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 bg-cyan-950 px-2.5 py-1 rounded-md border border-cyan-800 w-fit mb-3">
          <Sparkles size={12} /> Destaque em IA
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="bg-slate-800 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-700/60">
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="px-6 sm:px-7 py-4 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between">
      {project.githubLink ? (
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
        >
          <Github size={16} /> Ver Repositório
        </a>
      ) : <span />}

      {project.deployLink && (
        <a 
          href={project.deployLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ExternalLink size={14} /> Demo Online
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = () => (
  <SectionWrapper id="projects" className="bg-slate-900">
    <SectionTitle icon={Briefcase} badge="Portfólio">Projetos em Destaque</SectionTitle>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.projects.map((proj, i) => (
        <ProjectCard key={i} project={proj} />
      ))}
    </div>
  </SectionWrapper>
);

const Certifications = () => (
  <SectionWrapper id="certifications" className="bg-slate-950">
    <SectionTitle icon={Award} badge="Evolução Contínua">Certificações & Conquistas</SectionTitle>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioData.certifications.map((cert, i) => (
        <motion.div 
          key={i} 
          className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-md ${
            cert.highlight 
              ? 'bg-gradient-to-b from-slate-900 to-slate-850 border border-cyan-500/40 shadow-cyan-500/10 hover:border-cyan-400' 
              : 'bg-slate-900 border border-slate-800 hover:border-slate-700'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                {cert.category}
              </span>
              <span className="font-mono text-xs text-slate-500 font-bold">{cert.year}</span>
            </div>
            
            <h3 className="font-bold text-base text-slate-100 mb-1 leading-snug">
              {cert.title}
            </h3>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <p className="text-xs font-semibold text-cyan-400">{cert.issuer}</p>
            {cert.highlight && (
              <span className="text-xs text-amber-400 flex items-center gap-1 font-medium">
                ★ Destaque
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

const Objective = () => (
  <SectionWrapper id="objective" className="bg-slate-900">
    <SectionTitle icon={Lightbulb} badge="Metas">Objetivo Profissional</SectionTitle>
    <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-cyan-500/30 p-8 sm:p-10 rounded-2xl shadow-2xl relative">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 to-blue-600 rounded-l-2xl"></div>
        <p className="text-lg sm:text-xl text-slate-200 leading-relaxed italic">
          &ldquo;{portfolioData.objective}&rdquo;
        </p>
      </div>
    </div>
  </SectionWrapper>
);

const Contact = () => (
  <SectionWrapper id="contact" className="bg-slate-950">
    <SectionTitle icon={Mail} badge="Vamos Conversar">Entre em Contato</SectionTitle>
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed">
        Estou sempre aberto a novas oportunidades profissionais, colaborações em projetos de alto impacto e discussões sobre Engenharia de Software e IA.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <a 
          href={`mailto:${portfolioData.contact.email}`} 
          className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 text-slate-200 hover:text-cyan-400 transition-all group shadow-md"
        >
          <div className="p-3 bg-cyan-950 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
            <Mail size={20} />
          </div>
          <div className="text-left overflow-hidden">
            <span className="block text-xs text-slate-400 font-semibold">E-mail</span>
            <span className="text-sm font-medium truncate block">{portfolioData.contact.email}</span>
          </div>
        </a>

        <a 
          href={`tel:${portfolioData.contact.phone.replace(/\D/g, '')}`} 
          className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 text-slate-200 hover:text-cyan-400 transition-all group shadow-md"
        >
          <div className="p-3 bg-cyan-950 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
            <Smartphone size={20} />
          </div>
          <div className="text-left">
            <span className="block text-xs text-slate-400 font-semibold">Telefone / WhatsApp</span>
            <span className="text-sm font-medium">{portfolioData.contact.phone}</span>
          </div>
        </a>
      </div>

      <div className="flex justify-center items-center gap-5">
        <a 
          href={portfolioData.contact.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 font-semibold text-slate-200 transition-all shadow-lg hover:scale-105"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a 
          href={portfolioData.contact.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 font-semibold text-slate-200 transition-all shadow-lg hover:scale-105"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </SectionWrapper>
);

const Footer = () => (
  <footer className="bg-slate-950 text-center py-8 border-t border-slate-800/80">
    <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">{portfolioData.name}</span>. Todos os direitos reservados.
      </p>
      <p className="text-xs text-slate-500 flex items-center gap-1.5">
        Construído com React, Tailwind CSS & Framer Motion
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-slate-950 text-white font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Objective />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
